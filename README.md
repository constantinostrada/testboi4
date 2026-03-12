# testboi4

A modern, production-ready web application built with HTML, CSS, and JavaScript.

## Description

This project provides a clean, minimal boilerplate for building web applications using vanilla JavaScript, HTML5, and CSS3. It follows best practices for project structure, code organization, and development workflow.

## Features

- Modern HTML5 structure
- Responsive CSS with CSS custom properties
- Modular JavaScript (ES6+)
- ESLint and Prettier configuration
- Git workflow setup
- Development-ready structure

## Project Structure

```
testboi4/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   └── utils/
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── components/
│   └── assets/
│       ├── images/
│       └── fonts/
├── public/
│   └── index.html
├── .gitignore
├── .eslintrc.json
├── .prettierrc.json
├── .prettierignore
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd testboi4
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   - Open `public/index.html` in your browser, or
   - Use a local development server:
   ```bash
   npm start
   ```

4. **Run linting**
   ```bash
   npm run lint
   ```

5. **Format code**
   ```bash
   npm run format
   ```

## Development

- All source files are in the `src/` directory
- The main entry point is `public/index.html`
- JavaScript modules are in `src/js/`
- Styles are in `src/css/`
- Static assets go in `src/assets/`

## Scripts

- `npm start` - Start a local development server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
