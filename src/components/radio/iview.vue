<template>
  <div :class="classes"
       :name="name">
    <slot></slot>
  </div>
</template>
<script>
import { oneOf, findComponentsDownward } from '../../utils/assist';
import Emitter from '../../mixins/emitter';


let seed = 0;
const now = Date.now();
const getUuid = () => `ivuRadioGroup_${now}_${seed++}`;

export default {
  name: 'RadioGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
   
    type: {
      validator (value) {
        return oneOf(value, ['button']);
      }
    },
    name: {
      type: String,
      default: getUuid
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  mounted () {
    this.updateValue();
  },
  methods: {
    updateValue () {
      this.childrens = findComponentsDownward(this, 'Radio');
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.currentValue = this.currentValue === child.label;
          child.group = true;
        });
      }
    },
    change (data) {
      this.currentValue = data.value;
      this.updateValue();
      this.$emit('input', data.value);
      this.$emit('on-change', data.value);
      this.dispatch('FormItem', 'on-form-change', data.value);
    }
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
};
</script>
