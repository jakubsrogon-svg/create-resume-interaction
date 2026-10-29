import fs from 'node:fs';
const g = JSON.parse(fs.readFileSync(new URL('./browser-globals.json', import.meta.url)));
export default [{
  files: ['src/app.js'],
  languageOptions: { ecmaVersion: 2024, sourceType: 'script', globals: g },
  rules: {
    'no-undef': 'error', 'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none' }], 'no-redeclare': 'error',
    'no-dupe-keys': 'error', 'no-duplicate-case': 'error', 'no-unreachable': 'error', 'no-self-assign': 'error',
    'no-dupe-else-if': 'error', 'no-use-before-define': ['warn', { functions: false, classes: true, variables: true }],
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }], 'no-shadow': 'off',
    'no-constant-condition': 'warn', 'no-empty': 'warn', 'no-cond-assign': 'warn', 'no-sparse-arrays': 'error',
    'no-loss-of-precision': 'error', 'no-unsafe-negation': 'error', 'valid-typeof': 'error', 'no-compare-neg-zero': 'error',
    'no-func-assign': 'error', 'no-const-assign': 'error', 'no-import-assign': 'error', 'no-setter-return': 'error',
    'no-unsafe-optional-chaining': 'error', 'no-useless-escape': 'off', 'no-self-compare': 'warn', 'no-template-curly-in-string': 'warn',
    'array-callback-return': 'warn', 'no-unmodified-loop-condition': 'warn'
  }
}];
