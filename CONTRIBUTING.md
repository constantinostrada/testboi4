# Contributing to testboi4

First off, thank you for considering contributing to testboi4! It's people like you that make this project great.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Exercise consideration and empathy
- Focus on what is best for the community
- Use welcoming and inclusive language

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include your environment details** (OS, browser, versions, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternative solutions you've considered**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure your code follows the existing style (run linters)
4. Update documentation as needed
5. Write a clear commit message

#### Pull Request Process

1. Update the README.md with details of changes if applicable
2. Follow the coding style guidelines below
3. The PR will be merged once you have approval from a maintainer

## Style Guidelines

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add user authentication feature

- Implement login form
- Add JWT token validation
- Create user session management

Closes #123
```

### JavaScript Style Guide

- Follow the ESLint configuration provided
- Use ES6+ features when appropriate
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await instead of promises when possible

### CSS Style Guide

- Follow the existing naming conventions (BEM-like methodology)
- Use CSS custom properties for values that might be reused
- Mobile-first responsive design
- Keep selectors simple and performant
- Group related properties together

### HTML Style Guide

- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Keep markup clean and properly indented
- Use lowercase for element names and attributes
- Always include alt text for images

## Development Process

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Run linting**
   ```bash
   npm run lint
   ```

4. **Format code**
   ```bash
   npm run format
   ```

5. **Before committing**
   - Run linting and fix any issues
   - Format your code
   - Test in multiple browsers if possible
   - Ensure no console errors

## Project Structure

```
testboi4/
├── src/              # Source files
│   ├── js/          # JavaScript modules
│   ├── css/         # Stylesheets
│   └── assets/      # Static assets
├── public/          # Public files
└── docs/            # Documentation
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing! 🎉
