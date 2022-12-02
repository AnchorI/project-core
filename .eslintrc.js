module.exports = {
    env: {
        "jest/globals": true
    },
    plugins: ["jest"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2019,
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"]
    },
    rules: {
        "jest/no-export": "off",
        "jest/no-commented-out-tests": "off"
    },
    overrides: [
        {
            files: ["src/database/connect.ts"],
            rules: { "sort-keys": ["error", "asc", { minKeys: 10 }] }
        }
    ]
}
