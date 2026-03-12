# testboi4

A modern, lightweight web application built with vanilla HTML, CSS, and JavaScript.

## Description

This project provides a clean, production-ready boilerplate for building web applications using modern vanilla JavaScript, HTML5, and CSS3. It follows best practices for project structure, code organization, and development workflow.

## Features

- Clean, semantic HTML5 structure
- Modern CSS with CSS custom properties (variables)
- Modular JavaScript with ES6+ syntax
- Responsive design out of the box
- ESLint and Prettier configuration for code quality
- Git-ready with comprehensive .gitignore

## Project Structure

```
testboi4/
├── src/
│   ├── js/
│   │   ├── main.js          # Application entry point
│   │   ├── utils/           # Utility functions
│   │   └── components/      # Reusable components
│   ├── css/
│   │   ├── main.css         # Main styles
│   │   ├── variables.css    # CSS custom properties
│   │   └── components/      # Component-specific styles
│   └── assets/
│       ├── images/          # Image files
│       └── fonts/           # Custom fonts
├── public/
│   └── index.html           # Main HTML file
├── docs/                    # Documentation
└── tests/                   # Test files
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd testboi4
   ```

2. Install development dependencies:
   ```bash
   npm install
   ```

### Development

#### Using a Local Server

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js http-server**
```bash
npx http-server -p 8000
```

**Option 3: Using VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `public/index.html`
- Select "Open with Live Server"

Then open your browser to `http://localhost:8000/public/`

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

## Authors

- Your Name

## Acknowledgments

- Built with vanilla HTML, CSS, and JavaScript
- Follows modern web development best practices
