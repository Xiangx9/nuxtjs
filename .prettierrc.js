module.exports = {
  printWidth: 200, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为4
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: false, // 行位是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  jsxSingleQuote: true, // jsx 不使用单引号，而使用双引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSameLine: false,
  jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
  arrowParens: 'always', // 箭头函数尽可能省略括号 有两个可选值"<avoid|always>"
  // insertPragma: false,// 不需要自动在文件开头插入 @prettier
  // requirePragma: false, // 不需要写文件开头的 @prettier
  proseWrap: 'never', // 使用默认的折行标准
  // htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  // vueIndentScriptAndStyle: false,  // .vue 缩进
  endOfLine: 'auto' // default lf,
}
