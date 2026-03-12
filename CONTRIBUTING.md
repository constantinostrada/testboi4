# Contributing to testboi4

First off, thank you for considering contributing to testboi4! It's people like you that make testboi4 such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript styleguide
* Include screenshots in your pull request whenever possible
* End all files with a newline
* Avoid platform-dependent code

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

All JavaScript must adhere to the ESLint configuration included in the project.

* Use ES6+ features
* Use semicolons
* Use single quotes for strings
* 2 spaces for indentation
* Prefer `const` over `let`, never use `var`
* Use arrow functions when possible
* Use template literals instead of string concatenation

### CSS Styleguide

* Use CSS custom properties for theming
* Follow BEM naming convention for classes
* Use mobile-first approach for responsive design
* Avoid using `!important`
* Group related properties together
* Use shorthand properties when possible

### HTML Styleguide

* Use semantic HTML5 elements
* Include proper ARIA labels for accessibility
* Use double quotes for attributes
* Self-close void elements
* Use lowercase for element names and attributes

## Development Process

1. Fork the repo
2. Create a new branch from `main`
3. Make your changes
4. Run the linter: `npm run lint`
5. Format your code: `npm run format`
6. Test your changes
7. Commit your changes
8. Push to your fork
9. Submit a Pull Request

## Project Structure

```
testboi4/
├── src/              # Source files
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript files
│   └── assets/      # Static assets
├── public/          # Public files
└── ...              # Configuration files
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎉
