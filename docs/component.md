# dmx - 基于mpx框架的微信规范开发一套高复用型UI组件库

## dmx-button

> 按钮

_*Props*_

| 属性名                 | 类型    | 默认值  | 必填 | 说明                                                                                                                                                           |
| ---------------------- | ------- | ------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size                   | string  | middle  | 否   | 尺寸，可选值： `large`、`middle`、`small`                                                                                                                      |
| type                   | string  | default | 否   | 类型，可选值： `default`、`primary`、`success`、`warning`、`danger`、`info`                                                                                    |
| plain                  | boolean | false   | 否   | 是否朴素按钮                                                                                                                                                   |
| round                  | boolean | false   | 否   | 是否圆角按钮                                                                                                                                                   |
| inline                 | boolean | false   | 否   | 是否行内按钮                                                                                                                                                   |
| active                 | boolean | false   | 否   | 是否激活(同点击态的样式)                                                                                                                                       |
| disabled               | boolean | false   | 否   | 是否禁用                                                                                                                                                       |
| open-type              | string  |         | 否   | 微信开放能力                                                                                                                                                   |
| loading                | boolean | false   | 否   | 名称前是否带 loading 图标                                                                                                                                      |
| hover-stop-propagation | boolean |         | 否   | 指定是否阻止本节点的祖先节点出现点击态                                                                                                                         |
| session-from           | string  |         | 否   | 会话来源，open-type="contact"时有效                                                                                                                            |
| send-message-title     | string  |         | 否   | 会话内消息卡片标题，open-type="contact"时有效                                                                                                                  |
| send-message-path      | string  |         | 否   | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效                                                                                                    |
| send-message-img       | string  |         | 否   | 会话内消息卡片图片，open-type="contact"时有效                                                                                                                  |
| show-message-card      | boolean | false   | 否   | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 |
| app-parameter          | string  |         | 否   | 打开 APP 时，向 APP 传递的参数，open-type="launchApp" 时有效                                                                                                   |

_*Events*_

| 方法名         | 参数  | 说明                                                                                                                    |
| -------------- | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| getuserinfo    | event | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，open-type="getUserInfo"时有效 |
| getphonenumber | event | 获取用户手机号回调，open-type="getPhoneNumber"时有效                                                                    |
| contact        | event | 客服消息回调，open-type="contact"时有效                                                                                 |
| launchapp      | event | 打开 APP 成功的回调，open-type="launchApp"时有效                                                                        |
| error          | event | 当使用开放能力时，发生错误的回调，open-type="launchApp"时有效                                                           |
| opensetting    | event | 在打开授权设置页后回调，open-type="openSetting"时有效                                                                   |

## dmx-button-group

> 按钮组, 字内容必须为 `<dmx-button>`

_*Props*_

| 属性名   | 类型    | 默认值 | 必填 | 说明             |
| -------- | ------- | ------ | ---- | ---------------- |
| vertical | boolean | false  | 是   | 是否纵向排列按钮 |

## dmx-cell

> 单元格

_*Props*_

| 属性名        | 类型    | 默认值 | 必填 | 说明             |
| ------------- | ------- | ------ | ---- | ---------------- |
| label         | string  |        | 是   | 左侧标题         |
| show-arrow    | boolean | false  | 否   | 是否显示右侧箭头 |
| tap-highlight | boolean | false  | 否   | 是否点击态高亮   |

_*Events*_

| 方法名         | 参数  | 说明                                                                                                                    |
| -------------- | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| getuserinfo    | event | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，open-type="getUserInfo"时有效 |
| getphonenumber | event | 获取用户手机号回调，open-type="getPhoneNumber"时有效                                                                    |
| contact        | event | 客服消息回调，open-type="contact"时有效                                                                                 |
| launchapp      | event | 打开 APP 成功的回调，open-type="launchApp"时有效                                                                        |
| error          | event | 当使用开放能力时，发生错误的回调，open-type="launchApp"时有效                                                           |
| opensetting    | event | 在打开授权设置页后回调，open-type="openSetting"时有效                                                                   |

## dmx-radio-group

> 单选框组

_*Props*_

| 属性名  | 类型   | 默认值 | 必填 | 说明                                           |
| ------- | ------ | ------ | ---- | ---------------------------------------------- |
| name    | string |        | 是   | 同 radio 的 name                               |
| options | array  |        | 是   | 配置项，其中数组每一个子元素是一个 object      |
| value   | string |        | 否   | 默认选中的值, 支持使用 `wx:model` 进行双向绑定 |

options 子元素的合法值

| 值    | 说明             |
| ----- | ---------------- |
| label | 子项要显示的文字 |
| value | 子项对应的值     |

## dmx-checkbox

> 复选框

_*Props*_

| 属性名       | 类型    | 默认值 | 必填 | 说明                                     |
| ------------ | ------- | ------ | ---- | ---------------------------------------- |
| val          | string  |        | 是   | 选项携带的值                             |
| value        | boolean | false  | 否   | 是否选中                                 |
| label        | string  |        | 否   | 选项显示的文字(同 slot)                  |
| size         | string  | middle | 否   | 尺寸，可选值：`large`、`middle`、`small` |
| solid        | boolean | false  | 否   | 是否实色按钮                             |
| checkedStyle | object  |        | 否   | 选中态的样式                             |
| disabled     | boolean | false  | 否   | 是否禁用                                 |
| width        | string  |        | 否   | 设置宽以覆盖默认宽                       |
| height       | string  |        | 否   | 设置高以覆盖默认高                       |

_*Events*_

| 方法名 | 参数  | 说明                 |
| ------ | ----- | -------------------- |
| change | event | 选中态发生改变时触发 |

## dmx-checkbox-group

> 复选框组

_*Props*_

| 属性名  | 类型           | 默认值   | 必填 | 说明                                                              |
| ------- | -------------- | -------- | ---- | ----------------------------------------------------------------- |
| mode    | string         | multiple | 否   | 模式，`single`(单选)、`multiple`(多选)                            |
| title   | string         |          | 否   | 标题                                                              |
| options | array          |          | 是   | 选项的数据，其中数组每一个子元素是一个 object                     |
| value   | array          |          | 否   | 默认选中的值，其中数组每一个子元素为需要默认选中的选项的 value 值 |
| min     | number、string | 1        | 否   | 至少选中几个                                                      |
| max     | number、string | -1       | 否   | 至多选中几个, 默认 `-1` 表示不限                                  |

options 子元素的合法值

| 值    | 说明             |
| ----- | ---------------- |
| label | 子项要显示的文字 |
| value | 子项对应的值     |

_*Events*_

| 方法名 | 参数  | 说明                                                                     |
| ------ | ----- | ------------------------------------------------------------------------ |
| change | event | 子项的选中态发生改变时触发，参数中携带了改变后的子选项值的集合和原始的值 |

## dmx-select

> 下拉选择器，通常要和 `dmx-option` 一块使用

_*Props*_

| 属性名  | 类型  | 默认值 | 必填 | 说明                                      |
| ------- | ----- | ------ | ---- | ----------------------------------------- |
| options | array |        | 否   | 配置项，其中数组每一个子元素是一个 object |

options 子元素的合法值

| 值    | 说明             |
| ----- | ---------------- |
| label | 子项要显示的文字 |
| value | 子项对应的值     |

_*Methods*_

| 方法名 | 参数 | 返回值 | 说明                   |
| ------ | ---- | ------ | ---------------------- |
| shrink | 无   | 无     | 收起所有展开的下拉选项 |

_*Events*_

| 方法名 | 参数 | 说明                 |
| ------ | ---- | -------------------- |
| change | 无   | 切换时值发生改变触发 |

## dmx-option

> 下拉选择器的值，通常要和 `dmx-select` 一块使用

_*Props*_

| 属性名   | 类型    | 默认值 | 必填 | 说明           |
| -------- | ------- | ------ | ---- | -------------- |
| label    | string  |        | 否   | 选项显示的文字 |
| value    | string  |        | 是   | 选项携带的值   |
| selected | string  |        | 否   | 默认选中的值   |
| disabled | boolean | false  | 否   | 是否禁用       |

_*Events*_

| 方法名 | 参数 | 说明                 |
| ------ | ---- | -------------------- |
| change | 无   | 选中态发生改变时触发 |

## dmx-flex

> 复选框组

_*Props*_

| 属性名    | 类型   | 默认值 | 必填 | 说明                                |
| --------- | ------ | ------ | ---- | ----------------------------------- |
| direction | string | row    | 否   | 排列方向，可选值：`row` or `column` |

## dmx-loadmore

> 用于列表底部的加载更多

_*Props*_

| 属性名  | 类型   | 默认值 | 必填 | 说明   |
| ------- | ------ | ------ | ---- | ------ |
| options | object |        | 否   | 配置项 |

options 的合法值

| 值         | 说明           |
| ---------- | -------------- |
| loadingTxt | 加载状态的文字 |
| noMoreTxt  | 无数据的文字   |

_*Methods*_

| 方法名      | 参数 | 返回值 | 说明              |
| ----------- | ---- | ------ | ----------------- |
| showLoading | 无   | 无     | 显示 loading 状态 |
| showNoMore  | 无   | 无     | 显示无数据状态    |
| hide        | 无   | 无     | 隐藏              |

## dmx-popup-wrapper

> 通用型弹出组件的包裹层, 内置了进入、离开的动画(可配置)

_*Props*_

| 属性名    | 类型           | 默认值 | 必填 | 说明                                      |
| --------- | -------------- | ------ | ---- | ----------------------------------------- |
| entry     | object, string | center | 否   | 进入视图时的动画, 不需要动画时请传 `none` |
| leave     | object, string | 提示   | 否   | 离开视图时的动画, 不需要动画时请传 `none` |
| positionX | string         | left   | 否   | 确定按钮文字                              |
| positionY | string         | center | 否   | 取消按钮文字                              |

entry 和 leave 子元素的合法值

| 值                      | 说明                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| animationName           | 定义动画的 name, 可以在 `animate.styl` 中找到, 或者自己在页面中使用@keyframes 写入新动画 |
| animationDuration       | 定义动画执行的时间                                                                       |
| animationTimingFunction | 定义动画的变化曲线                                                                       |

_*Methods*_

| 方法名 | 参数    | 返回值 | 说明                                     |
| ------ | ------- | ------ | ---------------------------------------- |
| show   | content | 无     | 在页面显示用 dmx-popup-wrapper 创建的组件 |
| hide   | 无      | 无     | 在页面隐藏用 dmx-popup-wrapper 创建的组件 |

## dmx-modal

> 模态框, 扩展自 dmx-popup-wrapper 组件

_*Props*_

| 属性名       | 类型   | 默认值 | 必填 | 说明         |
| ------------ | ------ | ------ | ---- | ------------ |
| position     | string | center | 否   | 弹框位置     |
| title        | string | 提示   | 否   | 标题         |
| confirm-text | string | 确认   | 否   | 确定按钮文字 |
| cancel-text  | string | 取消   | 否   | 取消按钮文字 |

_*Methods*_

| 方法名 | 参数    | 返回值 | 说明                                                  |
| ------ | ------- | ------ | ----------------------------------------------------- |
| show   | content | 无     | 显示模态框, 参数 content 为通过传参控制弹框显示的内容 |
| hide   | 无      | 无     | 隐藏模态框                                            |

_*Events*_

| 方法名  | 参数 | 说明               |
| ------- | ---- | ------------------ |
| cancel  | 无   | 点击 `取消` 时触发 |
| confirm | 无   | 点击 `完成` 时触发 |

## dmx-picker

> 从底部弹出的滚动选择器, 扩展自 dmx-popup-wrapper 组件

_*Props*_

| 属性名        | 类型          | 默认值 | 必填 | 说明                                            |
| ------------- | ------------- | ------ | ---- | ----------------------------------------------- |
| title         | string        |        | 否   | 标题                                            |
| confirm-text  | string        | 确认   | 否   | 确定按钮文字                                    |
| cancel-text   | string        | 取消   | 否   | 取消按钮文字                                    |
| column-titles | array         |        | 否   | 自定义列选择器的 title                          |
| range         | array         |        | 否   | 列选项的数据                                    |
| range-key     | boolean       | name   | 否   | 多列选择器的取值字段，mode 为 `multiple` 时有效 |
| default-value | number, array |        | 否   | 多列选择器的取值字段，mode 为 `multiple` 时有效 |
| mode          | string        | single | 否   | 模式，可选值：`single`(单列)、`multiple`(多列)  |

_*Methods*_

| 方法名             | 参数  | 参数说明                                                      | 返回值 | 说明             |
| ------------------ | ----- | ------------------------------------------------------------- | ------ | ---------------- |
| show               | 无    | 无                                                            | 无     | 显示             |
| hide               | 无    | 无                                                            | 无     | 隐藏             |
| updateDetaultValue | value | 要更新的值，单列模式时传`number`类型，多列模式时传`array`类型 | 无     | 更新默认选中的值 |

_*Events*_

| 方法名       | 参数               | 说明                                                  |
| ------------ | ------------------ | ----------------------------------------------------- |
| cancel       | event.detail.value | 点击 `取消` 时触发，参数中的 value 为当前列选中行的值 |
| confirm      | event.detail.value | 点击 `完成` 时触发，参数同上                          |
| columnchange | event.detail.value | 列的值更改时触发，参数同上                            |

## dmx-mask

> 蒙层

_*Props*_

| 属性名          | 类型    | 默认值             | 必填 | 说明                       |
| --------------- | ------- | ------------------ | ---- | -------------------------- |
| auto-hide       | boolean | true               | 否   | 是否点击蒙层时自动隐藏     |
| bg-color        | string  | rgba(0, 0, 0, 0.4) | 否   | 蒙层颜色                   |
| height          | string  | 100%               | 否   | 蒙层高                     |
| z-index         | number  | 1000               | 否   | 遮罩的层叠次序             |
| enableAnimation | boolean | false              | 否   | 是否激活动画过渡, 默认关闭 |

_*Methods*_

| 方法名 | 参数 | 返回值 | 说明     |
| ------ | ---- | ------ | -------- |
| show   | 无   | 无     | 显示蒙层 |
| hide   | 无   | 无     | 隐藏蒙层 |

_*Events*_

| 方法名 | 参数 | 说明           |
| ------ | ---- | -------------- |
| show   | 无   | 蒙层显示时触发 |
| hide   | 无   | 蒙层隐藏时触发 |

## dmx-nav

> tab 导航

_*Props*_

| 属性名  | 类型  | 默认值 | 必填 | 说明                                      |
| ------- | ----- | ------ | ---- | ----------------------------------------- |
| options | array |        | 否   | 配置项，其中数组每一个子元素是一个 object |

options 子元素的合法值

| 值    | 说明             |
| ----- | ---------------- |
| label | 子项要显示的文字 |
| value | 子项对应的值     |

_*Events*_

| 方法名 | 参数 | 说明                     |
| ------ | ---- | ------------------------ |
| change | 无   | 选中的子项发生改变时触发 |

## dmx-tag

> 标签

_*Props*_

| 属性名  | 类型   | 默认值 | 必填 | 说明           |
| ------- | ------ | ------ | ---- | -------------- |
| text    | string |        | 否   | 标签内的文字   |
| color   | string |        | 否   | 标签的颜色     |
| bgColor | string |        | 否   | 标签的背景颜色 |

## dmx-icon

> icon 组件

_*Props*_

| 属性名 | 类型   | 默认值 | 必填 | 说明                                    |
| ------ | ------ | ------ | ---- | --------------------------------------- |
| name   | string |        | 是   | icon 的 name, 可以在 `icon.styl` 中找到 |

## dmx-search-box

> 搜索框

_*Props*_

| 属性名      | 类型    | 默认值             | 必填 | 说明                                   |
| ----------- | ------- | ------------------ | ---- | -------------------------------------- |
| show-close  | boolean | true               | 否   | 是否显示清除按钮                       |
| wait        | number  | 800                | 否   | 输入的等待时间                         |
| placeholder | string  | 在此处输入搜索内容 | 否   | 输入框为空时占位符                     |
| disabled    | boolean | false              | 否   | 是否禁用                               |
| maxlength   | number  | -1                 | 否   | 最大输入长度，默认 -1 为不限制最大长度 |
| focus       | boolean | false              | 否   | 自动聚焦，拉起键盘                     |

_*Events*_

| 方法名         | 参数               | 说明                                                              |
| -------------- | ------------------ | ----------------------------------------------------------------- |
| input-complete | event.detail.value | 输入完成时触发，参数 event 中携带了搜索框输入的内容               |
| clean          | event.detail.value | 点击清除按钮时触发，参数 event 中携带了搜索框输入的内容           |
| focus          | event.detail.value | 搜索框聚焦时触发，参数 event 中携带了搜索框输入的内容             |
| blur           | event.detail.value | 搜索框失焦时触发，参数 event 中携带了搜索框输入的内容             |
| confirm        | event.detail.value | 点击弹起键盘的完成按钮时触发，参数 event 中携带了搜索框输入的内容 |

## dmx-preview-image

> 搜索框

_*Props*_

| 属性名     | 类型    | 默认值 | 必填 | 说明                                                                   |
| ---------- | ------- | ------ | ---- | ---------------------------------------------------------------------- |
| pictures   | array   |        | 否   | 需要做大图预览的图片集合, 子元素格式需为 `https://` 形式的网络地址图片 |
| show-count | boolean | true   | 否   | 是否显示数量, pictures.length > 1 时有效                               |

_*Events*_

| 方法名      | 参数                                     | 说明                       |
| ----------- | ---------------------------------------- | -------------------------- |
| on-show-big | event.detail.index, event.detail.current | 点击某一项展示大图时间触发 |

## dmx-nav-bar-adapter

> 自定义头部导航栏适配在刘海屏的组件, 将需要自定义的头部内容直接放入子插槽即可

## dmx-formid-collector

> formid 收集组件(在微信最新政策下已失效, 后面将做废弃处理)

_*Events*_

| 方法名   | 参数                | 说明                  |
| -------- | ------------------- | --------------------- |
| complate | event.detail.formId | formid 被收集到时触发 |
