module.exports = {
    plugins: ['prettier'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'jest/no-export': 'off',
        'jest/no-commented-out-tests': 'off',
        'ban-ts-comment': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-empty-interface': 'off',
    },
    overrides: [
        {
            files: ['src/database/connect.ts'],
            rules: { 'sort-keys': ['error', 'asc', { minKeys: 10 }] },
        },
    ],
}
