# Contributing to testboi4

Thank you for considering contributing to testboi4! This document provides guidelines for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce the bug
4. Add any relevant screenshots or error messages

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue with the "feature request" label
3. Clearly describe the feature and its benefits
4. Provide examples of how it would work

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines
4. Test your changes thoroughly
5. Commit your changes with clear, descriptive messages
6. Push to your fork and submit a pull request

## Development Guidelines

### Code Style

- Use ES6+ JavaScript features
- Follow the existing code formatting (use Prettier)
- Write clear, self-documenting code
- Add comments for complex logic
- Follow the ESLint rules configured in the project

### File Organization

- Keep files focused and single-purpose
- Place utility functions in `src/js/utils/`
- Place components in `src/js/components/`
- Keep CSS modular and component-based

### CSS Guidelines

- Use CSS custom properties for theming
- Follow BEM naming convention for classes
- Keep styles scoped to components
- Mobile-first responsive design

### JavaScript Guidelines

- Use ES6 modules
- Keep functions small and focused
- Use meaningful variable and function names
- Handle errors appropriately
- Add JSDoc comments for public functions

### Commit Messages

- Use clear and descriptive commit messages
- Start with a verb in present tense (Add, Fix, Update, Remove)
- Keep the first line under 50 characters
- Add detailed description if needed

Example:
```
Add form validation for contact form

- Implement email validation
- Add required field checks
- Display error messages to users
```

### Testing

- Test your changes in multiple browsers
- Test responsive behavior on different screen sizes
- Verify accessibility features work correctly

## Getting Help

If you need help or have questions:

- Check the README.md for setup instructions
- Review existing issues and pull requests
- Create a new issue with the "question" label

## License

By contributing to testboi4, you agree that your contributions will be licensed under the MIT License.
