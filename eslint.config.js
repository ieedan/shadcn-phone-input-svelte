import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import pluginUnicorn from 'eslint-plugin-unicorn';
import cspellPlugin from '@cspell/eslint-plugin';

const enforceUpperCaseForAsConstRule = {
	meta: {
		type: 'suggestion',
		docs: {
			description: "Enforce UPPER_CASE for constants marked with 'as const'",
			category: 'Stylistic Issues',
			recommended: false,
		},
		fixable: null,
	},
	create(context) {
		return {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			VariableDeclaration(node) {
				if (node.kind === 'const') {
					node.declarations.forEach((declaration) => {
						if (
							declaration.id.type === 'Identifier' &&
							declaration.init &&
							declaration.init.type === 'TSAsExpression' &&
							declaration.init.typeAnnotation.type === 'TSTypeReference' &&
							declaration.init.typeAnnotation.typeName.name === 'const'
						) {
							const name = declaration.id.name;
							if (name !== name.toUpperCase()) {
								context.report({
									node: declaration.id,
									message:
										"Constant marked with 'as const' should be in UPPER_CASE",
								});
							}
						}
					});
				}
			},
		};
	},
};

const commonConfig = {
	plugins: {
		'@typescript-eslint': ts.plugin,
		unicorn: pluginUnicorn,
		cspell: cspellPlugin,
		custom: {
			rules: {
				'enforce-upper-case-as-const': enforceUpperCaseForAsConstRule,
			},
		},
	},
	languageOptions: {
		globals: globals.browser,
	},
	rules: {
		'no-new-object': 'error',
		'object-shorthand': 'error',
		'prefer-object-spread': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'default-param-last': 'error',
		'no-new-func': 'error',
		'no-param-reassign': 'error',
		'prefer-arrow-callback': 'error',
		'nonblock-statement-body-position': 'error',
		'no-else-return': 'error',
		'spaced-comment': 'error',
		'no-console': ['error', { allow: ['info', 'clear', 'error', 'warn'] }],
		'no-nested-ternary': 'error',
		'unicorn/filename-case': ['error', { case: 'kebabCase' }],
		'custom/enforce-upper-case-as-const': 'error',
		'cspell/spellchecker': [
			'error',
			{
				autoFix: false,
				cspell: {
					words: [
						'shadcn',
						'svelte-tel-input',
						'sonner',
						'cmdk',
						'nonblock',
						'bunx',
						'',
					],
				},
			},
		],
		'@typescript-eslint/array-type': ['error', { default: 'array' }],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ varsIgnorePattern: '^_|^\\$\\$', argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		],
		'max-params': 'off',
		'@typescript-eslint/max-params': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'variable',
				modifiers: ['const'],
				format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
				trailingUnderscore: 'forbid',
				leadingUnderscore: 'allow',
			},
			{
				selector: 'import',
				format: ['camelCase', 'PascalCase'],
				trailingUnderscore: 'forbid',
			},
			{
				selector: 'objectLiteralProperty',
				format: null,
			},
		],
	},
};

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	commonConfig,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		rules: {
			'svelte/no-at-html-tags': 'warn',
		},
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
];
