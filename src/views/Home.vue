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
      <i-form-item label="多选"
                   prop="check">
        <i-check-group v-model="formValidate.multiple">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-check-group>
      </i-form-item>
    </i-form>
    <i-radio :checked='false'>是</i-radio>
    <i-radio :checked='true'>否</i-radio>
    <i-radio-group v-model='phone'>
      <i-radio label='apple'>apple</i-radio>
      <i-radio label='android'>android</i-radio>
      <i-radio label='windows'>Windows</i-radio>
    </i-radio-group>
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
      phone: 'apple',
      formValidate: {
        name: '',
        mail: '',
        multiple: ['option1', 'option3'],
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        check: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleClick () {
      console.log(this.formValidate)
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
    iInput: () => import('../components/input/input.vue'),
    iCheckbox: () => import('../components/checkbox/checkbox.vue'),
    iCheckGroup: () => import('../components/checkbox/checkbox-group.vue'),
    iRadio: () => import('../components/radio/radio.vue'),
    iRadioGroup: () => import('../components/radio/radio-group.vue'),
  }
}
</script>
