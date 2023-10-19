module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ['react-refresh'],
  rules: {
    'no-shadow': [
      'error',
      {
        'builtinGlobals': false,
        'hoist': 'functions',
        'allow': [],
        'ignoreOnInitialization': false
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ["off"],
    '@typescript-eslint/no-unused-vars': ["off"],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': ['off'],
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
}
