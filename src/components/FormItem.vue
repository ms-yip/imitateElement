<template>
    <div class="form-item">
        <label for="" style="width:200px">{{label}}</label>
        <div class="input-block">
            <slot></slot>
            <p v-if="errStatus" class="error">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject:['kForm'],
        props:['label','prop'],
        data() {
            return {
                errMessage: '',
                errStatus: false
            }
        },
        mounted(){
          // 组件间通信，input $emit 本组件让他校验呀
            this.$on('validate',this.validator)
        },
        methods: {
            validator() {
                //有两个input!  一个用户名 一个密码
                const rules = this.kForm.rules[this.prop]; // 取到当前项的规则
                const value = this.kForm.model[this.prop]; // 取到当前项的值

                // 描述对象
                const descriptor = {[this.prop]:rules};
                const schema = new Schema(descriptor);
                schema.validate({[this.prop]:value},errors =>{
                    if(errors){
                        this.errMessage = errors[0].message;
                        this.errStatus = true;
                    } else {
                        this.errMessage = '';
                        this.errStatus = '';
                    }
                })

            }
        },
    }
</script>

<style scoped>
.form-item {
  display: flex;
  align-items: center;
}
.input-block {
  display: flex;
  align-items: center;
}
.error {
  color: red;
}
</style>