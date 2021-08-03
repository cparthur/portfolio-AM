module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
    },
    settings: {
        'import/resolver': {
            alias: [
                ['src', './src'],
                ['components', './src/components'],
                ['library', './src/components/library'],
                ['styles', './src/styles'],
            ],
        },
        react: {
            version: 'detect',
        },
    },
};
