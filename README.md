# ⚔️ Kn4ght Bypass - Link Bypass Tool

Welcome to **Kn4ght Bypass**! A fast and reliable tool to bypass link shorteners and get direct access to content.

## Features

✨ **Fast Bypass Processing**
- Instantly bypass shortened links
- Support for multiple services
- One-click copy functionality

🔗 **Supported Services**
- Displays all supported link shorteners
- Real-time service list loading
- Easy to use interface

📱 **Responsive Design**
- Works on all devices
- Dark Discord-themed UI
- Smooth animations

⚖️ **Legal Protection**
- Complete Privacy Policy
- Terms of Service included
- Comprehensive legal documentation

## How to Use

1. **Paste your link** - Enter any shortened URL (bit.ly, tinyurl, etc.)
2. **Click Bypass** - Wait for processing
3. **Copy result** - Get your direct link instantly

## API Endpoints

### Bypass Endpoint
```
GET http://fi8.bot-hosting.net:21163/freeapibypass?url={encoded_url}
```

### Supported Services
```
GET http://fi8.bot-hosting.net:21163/supported
```

## File Structure

```
Kn4ght.lol/
├── index.html          # Main website
├── style.css           # Styling
├── script.js           # Functionality
├── CNAME               # Custom domain
└── README.md           # This file
```

## Customization

### Change Service Name
Edit `index.html` - Replace "Kn4ght Bypass" with your desired name

### Modify Colors
Edit `style.css` CSS variables:
```css
:root {
    --primary-color: #5865F2;      /* Discord Blue */
    --secondary-color: #36393F;    /* Dark Gray */
    --accent-color: #43B581;       /* Green */
}
```

### Update API Endpoints
Edit `script.js`:
- Line 30: Bypass API endpoint
- Line 49: Supported services endpoint

## Legal Documents

✅ **Privacy Policy** - Full data handling disclosure
✅ **Terms of Service** - User agreement and limitations
✅ **Footer Links** - Easy access to legal documents

## Deployment

### GitHub Pages
1. Settings → Pages
2. Select `main` branch
3. Your site: `https://supporterlock-source.github.io/Kn4ght.lol/`

### Custom Domain (kn4ght.lol)
1. DNS A Records point to GitHub Pages IPs
2. CNAME file already configured
3. Wait for DNS propagation (24-48 hours)

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Disclaimer

This tool is provided for educational and legitimate purposes. Users are responsible for complying with applicable laws and terms of service of linked websites.

---

**Made with ❤️ by Kn4ght**
