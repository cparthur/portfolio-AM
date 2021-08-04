module.exports = {
    plugins: ['@typescript-eslint'],
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    root: true,
    env: {
        browser: true,
        node: true,
        amd: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
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
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 0,
        'react/jsx-indent': ['error', 4],
        'no-nested-ternary': 'off',
    },
};
