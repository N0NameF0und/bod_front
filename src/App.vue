<template>
  <div>
    <div id="app" class="container">
      <!-- Nav Bar Principal -->
      <div class="nav_bar_principal">
        <!-- botones -->
      </div>
      <nav-bar />
      <div class="pruebaB">
 <expanding-button button_name="test">
        <p>Contenido del boton</p>
      </expanding-button>
      </div>
      <div class="pruebaB" >
 <expanding-button button_name="test">
        <p>Contenido del boton</p>
      </expanding-button>
      </div>
      
      <expanding-button button_name="test">
        <p>Contenido del boton</p>
      </expanding-button>

      <nav-bar />

      <nav-bar />

      <expanding-button />
      <p>Aqui debajo esta el router</p>
      <router-view />

      <!-- container principal -->

      <div class="container_principal"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navegacion/NavBar";
export default {
  name: "app",
  data() {
    return {
      msg: "Hola preuba"
    };
  }
};
</script>

<style>
/* box sizing format */

:root {
  box-sizing: border-box;
}
*,
::before,
::after {
  box-sizing: inherit;
}

/* owl selector  */

#app * + * {
  margin-top: 1.5em;
}

/* double container */

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav_bar_principal {
  background: gray;
  padding: 1em;
}
.pruebaB{
  width: 10%;
  display: inline-block;
}
.test{
  background: red;
}
</style>
