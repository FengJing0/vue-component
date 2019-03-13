<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from '../../utils/assist.js';
import Emitter from '../../mixins/emitter.js';
export default {
  name: 'iRadioGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
  },
  data () {
    return {
      childrens: [],
      currentValue: this.value
    }
  },
  methods: {
    updateValue () {
      this.childrens = findComponentsDownward(this, 'iRadio');
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.currentValue = this.currentValue === child.label;
          child.group = true;
        })
      }
    },
    change (data) {
      console.log(data)
      this.currentValue = data;
      this.updateValue();
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    }
  },
  mounted () {
    this.updateValue()
  },
  watch: {
    value () {
      if (this.currentValue !== this.value) {
        this.currentValue = this.value;
        this.$nextTick(() => {
          this.updateValue();
        });
      }
    }
  }
}
</script>