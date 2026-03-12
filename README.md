# testboi4

A modern, production-ready web application built with vanilla HTML, CSS, and JavaScript.

## Description

testboi4 is a clean, minimal web application following modern best practices and standards. The project is structured for scalability and maintainability.

## Features

- 🎨 Modern, responsive CSS with CSS Grid and Flexbox
- 📱 Mobile-first design approach
- ♿ Accessible HTML5 markup
- 🚀 Vanilla JavaScript (ES6+)
- 🔧 ESLint and Prettier configuration
- 📦 Organized project structure

## Project Structure

```
testboi4/
├── src/
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── reset.css
│   ├── js/
│   │   ├── main.js
│   │   └── utils.js
│   └── assets/
│       └── images/
├── public/
│   └── index.html
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Node.js and npm for development tools

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd testboi4
```

2. (Optional) Install development dependencies:
```bash
npm install
```

### Development

1. Open `public/index.html` in your browser, or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server (install globally: npm install -g http-server)
http-server public -p 8000

# Using PHP
php -S localhost:8000 -t public
```

2. Navigate to `http://localhost:8000` in your browser

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with modern web standards
- Follows accessibility guidelines (WCAG 2.1)
