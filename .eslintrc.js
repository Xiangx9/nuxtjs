module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off', // 文件名是否驼峰命名
    'no-undef': 'off', // 不能有未定义的变量
    '@typescript-eslint/no-empty-interface': 'off', // 不允许定义空的接口
    '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型警告
    '@typescript-eslint/no-unused-vars': 'off', // 不允许未使用的变量
    '@typescript-eslint/no-empty-function': 'off', // 不允许未使用的方法
    '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 引入
    'vue/no-v-html': 'off', // 不允许使用 v-html 引入
    'no-useless-escape': 'off', // 禁止不必要的转义字符
    'vue/prop-name-casing': 'off' // 禁止检测驼峰命名
  }
}
