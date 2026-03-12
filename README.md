# testboi4

A modern, production-ready web application built with vanilla HTML, CSS, and JavaScript.

## Description

This project provides a clean foundation for building web applications using modern JavaScript practices, organized file structure, and development tooling.

## Features

- Modern ES6+ JavaScript
- Responsive CSS design
- ESLint for code quality
- Prettier for code formatting
- Git hooks with Husky
- Development server setup

## Project Structure

```
testboi4/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── utils/
│   │   └── components/
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── components/
│   └── assets/
│       ├── images/
│       └── fonts/
├── public/
│   └── index.html
├── tests/
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd testboi4
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:8080`

### Building for Production

Build the project:
```bash
npm run build
```

### Linting and Formatting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

Format code with Prettier:
```bash
npm run format
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

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

## Author

Your Name

## Acknowledgments

- Project created with modern web development best practices
