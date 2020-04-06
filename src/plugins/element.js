import Vue from 'vue'
// 完整引入
// import ElementUI from 'element-ui'
// Vue.use(ElementUI，{ size: 'small', zIndex: 3000 })
// 这里能全局设置 size 好zIndex 是因为源码中：https://github.com/ElemeFE/element/blob/dev/src/index.js， install 函数接收一个opts，并将其中的size 和 zIndex值赋值给 $ELEMENT。
// const install = function(Vue, opts = {}) {
// Vue.prototype.$ELEMENT = {
//   size: opts.size || '',
//   zIndex: opts.zIndex || 2000
// };



// 按需引入组件
import { Button, Form, FormItem, Input } from 'element-ui'
// 一种引用方法
// Vue.component(Button.name, Button);

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)