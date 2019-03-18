<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot :data="data">
      </slot>
    </div>
    <div>
      <slot name='footer'></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        name: 'tom'
      }
    }
  }
}
</script>