# The Hyper Chamber - Wellness Website

A modern, responsive website for The Hyper Chamber wellness center, built with Vite and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Component-Based Architecture**: Organized, maintainable code structure
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Mobile Menu**: Responsive navigation with hamburger menu for mobile devices

## 📁 Project Structure

```
thehyperchamber/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── App.js          # Main application component
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── Services.js     # Services showcase
│   │   └── Footer.js       # Footer component
│   ├── utils/              # Utility functions
│   │   └── analytics.js    # Analytics and event tracking
│   ├── assets/             # Static assets
│   │   ├── images/         # Image files
│   │   └── icons/          # Icon files
│   ├── styles/             # Additional stylesheets
│   ├── pages/              # Page components (future)
│   ├── main.js             # Application entry point
│   └── style.css           # Main stylesheet with Tailwind
├── public/                 # Public assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 20.19.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thehyperchamber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Colors and Styling
The project uses Tailwind CSS with custom utility classes defined in `src/style.css`:

- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling  
- `.container-custom`: Responsive container with max-width

### Adding New Components
1. Create a new file in `src/components/`
2. Export a function that returns HTML string
3. Import and use in other components

### Adding New Pages
1. Create a new file in `src/pages/`
2. Import and integrate into the main App component

## 🔌 Future Integrations

### Square Integration
The project is prepared for Square integration for:
- **Appointment Scheduling**: Online booking system
- **Payment Processing**: Secure payment handling
- **Inventory Management**: Service and product management

### Planned Features
- [ ] Square API integration for booking
- [ ] Payment processing with Square
- [ ] Customer management system
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] Blog/Content management
- [ ] Customer reviews and testimonials

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Performance

- **Fast Loading**: Optimized with Vite's build tools
- **Minimal Bundle**: Only includes necessary CSS and JavaScript
- **Image Optimization**: Ready for optimized image loading
- **SEO Ready**: Semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, contact:
- Email: info@thehyperchamber.com
- Phone: (555) 123-4567

---

Built with ❤️ using Vite and Tailwind CSS 