模仿实现from 

首先从最外层开始，这里分成3层来嵌套实现。slot 是好东西呀。

整个表单,能接收校验规则，能接收整个表单对象
<form>
<form>

里面是每一个表单项，能接收 每个label值，和本表单项接收的值的键名
<form-item/>
这里每个表单项有需要显示错误信息，那么在这里做校验就最好了，校验后的结果和提示方便处理

那么 怎么方便的拿到from的 规则和表单对象呢，这里用到也了一个API ，很好用  祖先组件：provide(){return{ kForm : this}}一下需要传递的值，然后在需要的子孙组件中 注入一下 inject:[kForm]

    provide 和 inject 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中。
    开发高阶插件/组件库时使用

这里还用了插件    import Schema from 'async-validator'

[async-validator](https://www.npmjs.com/package/async-validator)
  ```js
  schema.validate({[this.prop]:value},errors =>{
                    if(errors){
                        this.errMessage = errors[0].message;
                        this.errStatus = true;
                    } else {
                        this.errMessage = '';
                        this.errStatus = '';
                    }
                })
  ```


输入框，要双向数据绑定，实现v-model
<input :type="type" :value="value" @input="onInput">
接收type和value 。
另外双向数据绑定实质是 监听input事件，并且$emit('input', val)

这里输入结束还要让父组件校验一下
