<template>
  <div class="home">
    <i-form :model="formValidate"
            :rules="ruleValidate"
            ref='form'>
      <i-form-item label="用户名"
                   prop="name">
        <i-input v-model="formValidate.name" />
      </i-form-item>
      <i-form-item label="邮箱"
                   prop="mail">
        <i-input v-model="formValidate.mail" />
      </i-form-item>
    </i-form>
    <div>{{message}}</div>
    <button @click='handleClick'>check</button>
    <button @click='handleClear'>clear</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      message: '',
      formValidate: {
        name: '',
        mail: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    handleClick () {
      this.$refs.form.validate().then(res => {
        console.log(res)
      })
    },
    handleClear () {
      this.$refs.form.resetFields()
    }
  },
  components: {
    iForm: () => import('../components/form/form.vue'),
    iFormItem: () => import('../components/form/form-item.vue'),
    iInput: () => import('../components/input/input.vue')
  }
}
</script>
