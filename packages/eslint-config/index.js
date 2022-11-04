module.exports = {
    extends: ['@rocketseat/eslint-config/react'],
    rules: {
        'prettier/prettier': ["error", {
            'printWidth': 120,
            'tabWidth': 4,
            'singleQuote': true,
            'trailingComma': 'all',
            'arrowParens': 'avoid',
            'semi': false,
            'endOfLine': 'auto',
            'bracketSpacing': true
        }],
    },
}