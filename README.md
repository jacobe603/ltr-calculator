# SVL LTR Calculator - Complete Offline Solution

A fully customized, offline-ready Liquid to Rack Data Center Calculator with SVL branding, originally converted from the Victaulic web application.

## Features

✅ **Complete Offline Functionality** - No internet connection required  
✅ **SVL Custom Branding** - Orange and blue color scheme with SVL logo  
✅ **Single Page Application** - Proper SPA routing with refresh support  
✅ **Security Hardened** - Path traversal protection and security headers  
✅ **Print Optimized** - Professional print layouts  
✅ **Multi-Format Favicon** - SVG, PNG, WebP, and ICO support  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  

## Technologies

- **Frontend**: Laravel Inertia.js with Vue.js components
- **Build Tool**: Vite for asset compilation  
- **Styling**: Tailwind CSS with SVL custom overrides
- **Server**: Node.js HTTP server with security features
- **Fonts**: Google Fonts (locally hosted)
- **Assets**: Optimized images and icons

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser

### Installation & Running
```bash
# Clone the repository
git clone https://github.com/jacobe603/ltr-calculator.git
cd ltr-calculator

# Start the server
node server.js
# or use the start script
./start.sh

# Open in browser
http://localhost:8000
```

## Project Structure

```
ltr-calculator/
├── index.html                    # Main application entry point
├── server.js                     # Secure Node.js HTTP server
├── custom-fixes.css              # SVL branding and custom styles
├── google-fonts-local.css        # Locally hosted Google Fonts
├── start.sh                      # Server startup script
├── CONVERSION_GUIDE.md           # Complete conversion documentation
├── IMPROVEMENTS.md               # Security and code quality changes
├── build/assets/                 # Compiled JavaScript and CSS
│   ├── app-*.js                  # Main application bundle
│   ├── app-*.css                 # Compiled stylesheets
│   ├── Calculator-*.js           # Calculator components
│   ├── svl-logo.png             # SVL logo assets
│   └── SVL-Swirl-favicon.webp   # Favicon source
├── fonts/                        # Local Google Fonts files
├── favicon.*                     # Multi-format favicon files
└── docs/                         # Additional documentation
```

## Key Features Implemented

### 🎨 SVL Branding
- **Color Scheme**: Orange (#f89728) and Blue (#112e52) throughout UI
- **Logo Replacement**: CSS-only SVL logo implementation
- **Favicon**: Multi-format SVL swirl favicon (SVG, PNG, WebP, ICO)
- **Toggle Switches**: Custom orange/blue Imperial/Metric toggles
- **Print Styles**: Professional SVL-branded print layouts

### 🔒 Security Features
- Path traversal protection
- Content Security Policy headers
- Input sanitization and validation
- Method restrictions (GET only for static files)
- Comprehensive error handling

### 🖥️ Single Page Application
- Client-side routing with Inertia.js
- Refresh-safe URLs (`/calculator/tool-name` works on refresh)
- Absolute asset paths prevent sub-route loading issues
- Proper SPA fallback handling

### 📱 User Experience
- Responsive design works on all devices
- Fast loading with local assets
- Offline functionality (no internet required)
- Print-optimized layouts
- Clickable logo and home links redirect to svl.com

## Development

### Environment Configuration
```bash
# Development mode (with debug logging)
NODE_ENV=development node server.js

# Production mode
NODE_ENV=production HOST=0.0.0.0 PORT=3000 node server.js
```

### Custom Styling
All SVL customizations are in `custom-fixes.css`:
- CSS variables for consistent branding
- Tailwind CSS overrides with proper specificity
- Print media queries for professional output
- Component-specific styling (toggles, navigation, etc.)

### Adding New Features
1. Place custom CSS in `custom-fixes.css`
2. Use CSS variables for colors (see `:root` section)
3. Test in both development and production modes
4. Verify print layouts work correctly
5. Test SPA routing on sub-routes

## Deployment Options

### Local Network Access
```bash
# Allow access from other devices on network
HOST=0.0.0.0 PORT=8000 node server.js
```

### Production Web Server
See `CONVERSION_GUIDE.md` for complete deployment instructions including:
- Nginx reverse proxy configuration
- SSL/TLS setup
- Environment variable management
- Asset optimization

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["node", "server.js"]
```

## Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Common Issues

**Favicon not updating**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache for localhost
- Try incognito/private mode

**Blank page on refresh**
- Check that all asset paths are absolute (`/build/assets/...`)
- Verify server is running with SPA routing enabled

**Assets not loading**
- Ensure server.js includes all required MIME types
- Check browser console for 404 errors
- Verify file paths match actual directory structure

**Print layout issues**
- Check `@media print` rules in `custom-fixes.css`
- Test with browser's print preview
- Adjust margins and scaling as needed

For complete troubleshooting guide, see `CONVERSION_GUIDE.md`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test thoroughly
4. Commit with descriptive messages
5. Push and create a pull request

## License

This project is a customized version of the original Victaulic LTR Calculator, modified for SVL with offline capabilities.

## Documentation

- `CONVERSION_GUIDE.md` - Complete conversion process documentation
- `IMPROVEMENTS.md` - Security and code quality improvements made
- Source code comments - Inline documentation for complex sections

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review `CONVERSION_GUIDE.md` for detailed explanations
3. Submit issues via GitHub Issues with detailed reproduction steps