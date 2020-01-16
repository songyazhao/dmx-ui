module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  settings: {
    "html/html-extensions": [".html", ".mpx"],  // consider .html and .mpx files as HTML
  },
  plugins: [
    'html'
  ],
  globals: {
    'wx': true,
    'my': true,
    'swan': true,
    'getApp': true,
    'App': true,
    '__mpx_mode__': true
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0, // 文件末尾不强制换行
    'curly': [0, 'all'], // 必须使用 if(){} 中的{}
    'comma-dangle': [0, 'never'],// 对象字面量项尾不能有逗号
    'camelcase': 0, // 强制驼峰法命名
    'no-return-assign': 0,
    'no-cond-assign': 0,
    'standard/no-callback-literal': 0,
    'no-useless-call': 0,
    'prefer-promise-reject-errors': 0,
    'max-lines': [
      'error',
      {
        'max' : 600,
        'skipBlankLines': true, // 忽略空白行
        'skipComments': true // 忽略只包含注释的行
      }
    ]
  }
}
