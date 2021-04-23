<template>
  <div id="app">
   
      <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
#nav {
  margin-top: 20px;
}
.icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
