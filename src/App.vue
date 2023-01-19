<template>
  <div id="app">
    <SideMeun class="sidemeun"></SideMeun>
    <RouterView></RouterView>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import SideMeun from './components/SideMeun.vue'

export default {
    name: "App",
    components: { RouterView, SideMeun}
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f2f1ed;
}
#app {
  padding: 60px;
  display: flex;
  flex-direction: row;
}
</style>
