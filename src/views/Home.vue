<template>
  <div class="home">
    <Form :model="formValidate"
          :rules="ruleValidate">
      <FormItem label="用户名"
                prop="name">
        <Input v-model="formValidate.name" />
      </FormItem>
      <FormItem label="邮箱"
                prop="mail">
        <Input v-model="formValidate.mail" />
      </FormItem>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
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
  components: {
    Form: () => import('../components/form/form.vue'),
    FormItem: () => import('../components/form/form-item.vue'),
    Input: () => import('../components/input/input.vue')
  }
}
</script>
