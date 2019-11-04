module.exports = {
  "extends": [
    "./node_modules/eslint-config-airbnb-base/rules/best-practices.js",
    "./node_modules/eslint-config-airbnb-base/rules/errors.js",
    "./node_modules/eslint-config-airbnb-base/rules/node.js",
    "./node_modules/eslint-config-airbnb-base/rules/style.js",
    "./node_modules/eslint-config-airbnb-base/rules/variables.js",
    "./node_modules/eslint-config-airbnb-base/rules/es6.js",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "lines-between-class-members": "off",
    "spaced-comment": "off",
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-undef": "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
};
