<template>
<div>
  <div id="div1" ref="expandBox" class="box"></div>
  <div ref="expandBoxTwo" class="box"></div>
  <button @click="expandBox">expandBox</button>
</div>

</template>

<script>
import velocity from "velocity-animate";
export default {
   methods:{
    expandBox(){
      velocity(this.$refs.expandBox,{ width: "500px" }, { easing: [ 500, 20 ] })

      Velocity(this.$refs.expandBoxTwo, {
        width: '500px'
      }, {
        duration: 3000,
        delay: 3000
      })
    }
  }

};
</script>

<style scoped>

</style>