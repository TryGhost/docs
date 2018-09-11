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
    ]
};
