# dmx

> 基于[mpx](https://github.com/didi/mpx/)框架的微信规范开发一套高复用型UI组件库

- [组件文档](https://github.com/songyazhao/dmx-ui/blob/master/docs/component.md)
- [示例说明](https://github.com/songyazhao/dmx-ui/blob/master/docs/example.md)
- [更新记录](https://github.com/songyazhao/dmx-ui/blob/master/docs/history.md)

## Use

安装组件库

```bash
npm install @songyazhao/dmx-ui
```

在mpx脚手架生成的build下找到 webpack 的配置文件并配置目录别名

```js
  resolve: {
    ...
    alias: {
      ...
      '~dmx': resolve('node_modules/@songyazhao/dmx-ui/packages')
    }
  }
```

在页面中引用, 比如 `dmx-button`

```html
<template>
  <dmx-button
    round
    size="middle"
    type="primary"
    disabled="{{disabled}}"
    bind:click="bindClick">Ok
  </dmx-button>
</template>

<script>
import { createPage } from '@mpxjs/core'

createPage({
  data: {
    disabled: false
  },

  methods: {
    bindClick () {
      console.log('我是一个按钮, 我被点击了(⊙o⊙)…')
    }
  }
})
</script>

<script type="application/json">
{
  "usingComponents": {
    "dmx-button": "~dmx/dmx-button"
  }
}
</script>
```
