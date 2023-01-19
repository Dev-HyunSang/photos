<template>
    <div id="home">
        <MainComponent></MainComponent>
    </div>
</template>
<script>
import MainComponent from '../components/MainComponent.vue';

export default {
    name: "HomeView",
    components: { MainComponent }
}
</script>
<style>
#home {
    display: flex;
    flex-direction: row;
}
</style>