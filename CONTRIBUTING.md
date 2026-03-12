# Contributing to testboi4

Thank you for your interest in contributing to testboi4! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce, expected behavior, and actual behavior
4. Add screenshots if applicable

### Suggesting Enhancements

1. Check if the enhancement has already been suggested
2. Create a new issue with a clear title and detailed description
3. Explain why this enhancement would be useful

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run linting and tests
5. Commit your changes with clear commit messages
6. Push to your fork
7. Open a Pull Request

## Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd testboi4
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Coding Standards

### JavaScript

- Use ES6+ features
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused

### CSS

- Follow BEM naming convention where appropriate
- Use CSS custom properties (variables)
- Keep styles modular and reusable
- Mobile-first responsive design

### HTML

- Use semantic HTML5 elements
- Ensure accessibility (ARIA labels, alt text, etc.)
- Keep markup clean and well-indented

## Commit Messages

Follow conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add user authentication`

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

## Code Review Process

1. All PRs require at least one review
2. Address review comments
3. Keep PRs focused and reasonably sized
4. Update documentation as needed

## Questions?

Feel free to open an issue for any questions or clarifications.

Thank you for contributing! 🎉
