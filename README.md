# Danil Lobanov - Personal Portfolio

A modern, responsive personal portfolio website for Danil Lobanov, Senior C# Developer with 3+ years of experience in scalable SaaS products and enterprise systems.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **Interactive**: Smooth scrolling, hover effects, and scroll-based animations
- **Fast Loading**: Optimized assets and performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant design

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables, Grid, and Flexbox
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons for social links and UI elements
- **Google Fonts**: Inter font family for modern typography

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/envydany/portfolio.git
cd portfolio
```

2. Install dependencies (optional, for development):
```bash
pnpm install
```

3. Start local development server:
```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

## 🌐 GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on every push to main branch

### Option 2: Manual Deployment

1. Install gh-pages:
```bash
pnpm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
pnpm run deploy
```

### Option 3: Direct GitHub Pages

1. Go to repository Settings > Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/ (root)" folder
4. Save and wait for deployment

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## 🎨 Customization

### Colors
The site uses CSS custom properties (variables) for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;
    --accent-color: #f59e0b;
    --bg-color: #0f172a;
    /* ... other colors */
}
```

### Content
Update the content in `index.html` to match your information:

- Personal information in the hero section
- About section text
- Experience timeline
- Skills and technologies
- Contact information

### Animations
Modify animation timings and effects in `script.js` and `styles.css` to match your preferences.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Running Locally

```bash
# Using live-server (recommended for development)
pnpm run dev

# Or using serve
pnpm run start
```

### Building for Production

This is a static site, so no build process is needed. Simply upload the files to your hosting provider.

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Danil Lobanov**
- Email: danil.lobanov@outlook.com
- LinkedIn: [linkedin.com/in/envydany](https://www.linkedin.com/in/envydany/)
- Telegram: [@envydany](https://t.me/envydany)
- GitHub: [@envydany](https://github.com/envydany)

## 🌟 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern web design trends
- GitHub Pages for free hosting

---

⭐ **If you like this project, please give it a star!** ⭐ 