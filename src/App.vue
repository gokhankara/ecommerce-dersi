<template>
  <div id="app">
    <Layout>
      <router-view :key="$route.fullPath"></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
export default {
  name: "App",
  components:{Layout}
};
</script>

<style>
</style>
