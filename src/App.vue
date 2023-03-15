<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
  <div>
    <router-view></router-view>
    <router-link to="/foo">To Foo</router-link>
    <router-link to="/bar">To Bar</router-link>
  </div>
</template>

<style scoped>
</style>
