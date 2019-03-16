<!-- src/views/alert.vue -->
<template>
  <i-tree :data='data'
          :showCheckbox='true'
          @on-check-change='change'></i-tree>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        },
        {
          title: 'parent 2',
          children: [
            {
              title: 'parent 2-1',
              children: [
                {
                  title: 'leaf 2-1-1'
                },
                {
                  title: 'leaf 2-1-2'
                }
              ]
            },
            {
              title: 'parent 2-2',
              children: [
                {
                  title: 'leaf 2-2-1'
                },
                {
                  title: 'leaf 2-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    change (a, b) {
      // console.log(a, b)
    }
  },
  components: {
    iTree: () => import('../components/tree/tree.vue')
  }
}
</script>