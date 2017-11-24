<template>
  <div>
    {{ typedata }}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        typedata: [1, 2.3]
      }
    },
    created () {
      this.getType()
    },
    methods: {
      getType () {
        this.$http.get('./../../../static/type.json').then((response) => {
          this.typedata = response.data
        }, (response) => {
          console.log(response)
        })
      }
    }
  }
</script>
<style>

</style>
