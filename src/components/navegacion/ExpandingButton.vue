<template>
  <div>
    <div class="hButtonContainer" ref="Contenido">
      <div class="hButtonExpanding">{{button_name}}</div>
      <div class="hButtonExpandingContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
//Componente contenido del boton
export default {
  name: "ExpandingButton",
  props: {
    button_name: {
      type: String,
      default: "No Name",
      required: true,
      validator: value => value.length > 3
    },
    button_path: {
      type: String,
      default: "path",
      required: true,
      validator: value => value.length > 3
    }
  },
}
</script >

<style scoped>

.hButtonContainer {
    width: inherit;
    max-width: 150px;
    margin: 1em auto;
    display: inline-block;
   }

 .hButtonExpanding {
    padding: .5em 1.5em;
    border: 1px solid rgb(189, 51, 51);
    background-color: rgb(131, 214, 97);
   }


</style>

