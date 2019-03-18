<template>
  <i-slot>
    <template slot='header'>Header</template>
    <template slot="default"
              slot-scope="{data}">{{data.name}}</template>
    <template slot='footer'>Footer</template>
  </i-slot>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
    iSlot: () => import('../components/slot/slot.vue')
  }
}
</script>
