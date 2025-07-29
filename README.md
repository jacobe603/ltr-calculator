# LTR Calculator - Local Version

This is a local version of the Victaulic Liquid to Rack Data Center Calculator that can be run offline.

## Setup

All the necessary files have been downloaded and modified to work locally. The calculator uses:

- HTML, CSS, and JavaScript files that were originally hosted on ltr.victaulicmobile.com
- Google Fonts that have been downloaded and are served locally
- Image assets that were missing have been downloaded
- SVL logo has replaced the original Victaulic logo

## Running the Calculator

To run the calculator locally:

1. Make sure you have Node.js installed on your system
2. Open a terminal in this directory
3. Run the start script:
   ```
   ./start.sh
   ```
4. Open your browser and go to http://localhost:8000

## Directory Structure

- `index.html` - Main HTML file
- `build/assets/` - JavaScript, CSS, and image assets
- `fonts/` - Downloaded Google Fonts
- `favicon.ico` - Site favicon
- `server.js` - Simple Node.js server to serve the files
- `start.sh` - Script to start the server
- `google-fonts-local.css` - Modified Google Fonts CSS with local paths
- `custom-fixes.css` - Custom CSS to fix display issues

## How It Works

The original calculator was designed to work with a backend server. This local version can display the UI and perform client-side calculations, but any features that require server interaction (like saving data or generating PDFs) will not work without a proper backend.

## Limitations

- Server-side features (saving data, PDF generation, etc.) will not work
- Any external API calls will fail
- Some functionality may be limited compared to the online version

## Modifications Made

1. All external JavaScript and CSS files have been downloaded
2. Google Fonts have been downloaded and are served locally
3. External URLs in the HTML have been replaced with local paths
4. The Ziggy configuration has been updated to use localhost:8000
5. Missing image assets have been downloaded
6. Custom CSS fixes have been added to address text overlap issues
7. SVL logo has replaced the original Victaulic logo using JavaScript