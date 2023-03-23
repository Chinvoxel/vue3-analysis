module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 配置全局变量
  globals: {},
  // 拓展
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb-typescript/base',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  rules: {
    // 关闭错误提示开发依赖需安装为生产依赖
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    /* JS */
    'no-console': 'off', // 关闭禁止存在打印
    'consistent-return': 'off', // 是否关闭需要显式返回
    'no-restricted-syntax': 'off', // 关闭禁用for-in for-of的规则
    'no-bitwise': 'off', // 允许使用位或操作符（｜）
    'no-plusplus': 'off', // 允许使用一元操作符(++ / --)

    // 解决后缀忽略不识别问题
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}
