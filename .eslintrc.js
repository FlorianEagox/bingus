module.exports = {
	'env': {
		'commonjs': true,
		'es2020': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 11
	},
	'rules': {
		indent: [1, 'tab'],
		allowIndentationTabs: 0,
		'no-tabs': 0,
		semi: [1, 'always'],
		quotes: [1, 'single'],
		'space-before-function-paren': [1, 'never'],
		curly: 0,
		eqeqeq: 0,
		'arrow-parens': 0
	}
};
