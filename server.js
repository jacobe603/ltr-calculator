const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:;"
};

// Sanitize file path to prevent directory traversal
function sanitizePath(requestedPath) {
  // Decode URL and normalize path
  const decodedPath = decodeURIComponent(requestedPath);
  const normalizedPath = path.normalize(decodedPath);
  
  // Remove leading slash and resolve relative to current directory
  const safePath = path.join(__dirname, normalizedPath.replace(/^\/+/, ''));
  
  // Ensure the resolved path is within the current directory
  if (!safePath.startsWith(__dirname)) {
    return null; // Path traversal attempt detected
  }
  
  return safePath;
}

const server = http.createServer((req, res) => {
  // Log requests only in development mode
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Request: ${req.method} ${req.url}`);
  }
  
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('Method Not Allowed');
    return;
  }
  
  let requestedPath = req.url;
  
  // Handle the root path
  if (requestedPath === '/') {
    requestedPath = '/index.html';
  }
  
  // Sanitize the file path
  const filePath = sanitizePath(requestedPath);
  if (!filePath) {
    res.writeHead(403, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
    res.end('Forbidden: Invalid path');
    return;
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found - check if it's a SPA route
        // If the path doesn't have a file extension, serve index.html for SPA routing
        if (!extname && !requestedPath.includes('.')) {
          const indexPath = path.join(__dirname, 'index.html');
          fs.readFile(indexPath, (err, indexContent) => {
            if (err) {
              // If index.html doesn't exist, show 404
              res.writeHead(404, { 'Content-Type': 'text/html', ...SECURITY_HEADERS });
              res.end('<html><body><h1>404 Not Found</h1><p>The requested file was not found.</p></body></html>');
            } else {
              // Serve index.html for SPA routing
              res.writeHead(200, { 'Content-Type': 'text/html', ...SECURITY_HEADERS });
              res.end(indexContent, 'utf-8');
            }
          });
        } else {
          // File with extension not found - try to serve custom 404 page
          const custom404Path = path.join(__dirname, '404.html');
          fs.readFile(custom404Path, (err, content404) => {
            if (err) {
              // No 404 page, send default error
              res.writeHead(404, { 'Content-Type': 'text/html', ...SECURITY_HEADERS });
              res.end('<html><body><h1>404 Not Found</h1><p>The requested file was not found.</p></body></html>');
            } else {
              // Serve custom 404 page
              res.writeHead(404, { 'Content-Type': 'text/html', ...SECURITY_HEADERS });
              res.end(content404, 'utf-8');
            }
          });
        }
      } else {
        // Server error
        res.writeHead(500, { 'Content-Type': 'text/plain', ...SECURITY_HEADERS });
        res.end('Internal Server Error');
      }
    } else {
      // Success - add security headers
      const headers = { 'Content-Type': contentType, ...SECURITY_HEADERS };
      res.writeHead(200, headers);
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});