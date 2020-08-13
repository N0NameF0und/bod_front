<template>
  <div class="hNavBar">
    <div  v-if="5>6" class="hNavButtons">
      <ul>
        <li>
          <a href>Login</a>
        </li>
        <li>
          <a href>+ Información</a>
        </li>
        <li>
          <a href>Contactos</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <a href="">hola</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
};
</script>


<style scoped>

.hNavBar{
  background: rgb(31, 28, 28);
}


</style>

