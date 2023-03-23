module.exports = {
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 一行最多 120 字符
  printWidth: 120,
  // 使用单引号
  singleQuote: true,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 行尾不需要有分号
  semi: false,
  // 箭头函数，只有一个参数的时候，不需要括号
  arrowParens: 'avoid',
  // 换行符使用 lf
  endOfLine: 'lf',
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'ignore',
  // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  proseWrap: 'preserve',
  // 在jsx中把'>' 是否单独放一行
  bracketSameLine: false,
  jsxBracketSameLine: false,
  // 在jsx中使用单引号代替双引号
  jsxSingleQuote: false
}
