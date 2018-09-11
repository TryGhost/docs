module.exports = {
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    plugins: ['ghost', 'react'],
    extends: [
        'plugin:ghost/ember',
        'plugin:react/recommended'
    ],
    "rules": {
        "no-console": "off",
        "no-inner-declarations": "off",
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        "quotes": ["error", "backtick"],
        "consistent-return": ["error"],
        "arrow-body-style": [
            "error",
            "as-needed",
            { "requireReturnForObjectLiteral": true }
        ],
        "jsx-quotes": ["error", "prefer-double"],
        "semi": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore"
            }
        ],
        "react/prop-types": [
            "error",
            {
                "ignore": ["children"]
            }
        ]
    }
};
