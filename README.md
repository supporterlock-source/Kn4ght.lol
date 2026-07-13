# 🎮 Kn4ght Bot - Discord Bot Website

Welcome to the official website for **Kn4ght Bot**! This is a beautiful, modern website showcasing your Discord bot with easy bot invite functionality.

## Features

✨ **Modern Design**
- Dark Discord-themed UI
- Smooth animations and transitions
- Fully responsive (works on mobile, tablet, desktop)
- Professional color scheme

🔗 **Discord Bot Integration**
- Direct bot invite button
- Pre-configured with permissions
- One-click add to server

📱 **Responsive Layout**
- Auto-adjusts for all screen sizes
- Mobile-friendly navigation
- Touch-friendly buttons

🎨 **Customizable**
- Easy to modify colors and text
- Add your own features section
- Update bot invite link anytime

## Bot Invite Link

Your bot invite URL:
```
https://discord.com/api/oauth2/authorize?client_id=1526044186242060429&permissions=93184&scope=bot%20applications.commands
```

**Permissions Included:**
- Manage messages
- Manage roles
- Kick members
- Ban members
- And more...

## How to Customize

### Change Bot Name
Edit `index.html` and replace "Kn4ght Bot" with your bot name in:
- The `<title>` tag
- The `.logo` section
- Hero section headings

### Update Bot Invite Link
Find this URL in `index.html` and replace with your own:
```html
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=93184&scope=bot%20applications.commands
```

### Modify Colors
Edit `style.css` CSS variables at the top:
```css
:root {
    --primary-color: #5865F2;      /* Discord Blue */
    --secondary-color: #36393F;    /* Dark Gray */
    --accent-color: #43B581;       /* Green */
}
```

### Add Your Discord Server Link
In `index.html`, update:
```html
<a href="https://discord.gg/your-server-invite">Join Discord Server</a>
```

### Update Contact Email
Change the email in the contact section:
```html
<a href="mailto:your-email@example.com">Email Support</a>
```

## File Structure

```
Kn4ght.lol/
├── index.html          # Main website
├── style.css           # Styling and animations
├── script.js           # Interactive features
└── README.md           # This file
```

## Deployment

### Option 1: GitHub Pages (Free)
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Set source to `main` branch
4. Your site will be live at: `https://supporterlock-source.github.io/Kn4ght.lol/`

### Option 2: Custom Domain
1. Create a `CNAME` file with your domain
2. Update DNS records pointing to GitHub Pages
3. Configure in repository settings

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Features Explained

**Moderation** - Tools to keep your server safe
**Music** - Play songs and control playback
**Games** - Fun interactive games for your community
**Analytics** - Track server stats and activity

## Support

For issues or questions:
- Join the Discord server
- Send an email to support
- Check GitHub Issues

## License

This project is open source and available for modification.

---

**Made with ❤️ for the Discord community**
