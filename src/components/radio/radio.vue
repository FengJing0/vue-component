<template>
  <label>
    <input type="radio"
           :name="groupName"
           :disabled="disabled"
           :checked="currentValue"
           @change='change'>
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import { findComponentUpward } from '../../utils/assist.js';
export default {
  name: 'iRadio',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number]
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      group: false,
      currentValue: this.value,
      parent: findComponentUpward(this, 'iRadioGroup'),
      groupName: this.name
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  },
  methods: {
    updateValue () {
      this.currentValue = this.value === this.trueValue;
    },
    change (e) {
      if (this.disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if (this.group) {
        if (this.label !== undefined) {
          this.parent.change(this.label);
        }
      } else {
        this.$emit('on-change', value);
        this.dispatch('iFormItem', 'on-form-change', value);
      }
    },
    click (e) {
      if (this.disabled) {
        return false;
      }
      this.currentValue = e.target.checked
    }
  },
  mounted () {
    if (this.parent) {
      this.group = true
      if (this.name && this.name !== this.parent.name) {
        console.log(this.name)
      } else {
        this.groupName = this.parent.name;
      }
    }
    if (this.group) {
      this.parent.updateValue();
    } else {
      this.updateValue();
    }
  }
}
</script>