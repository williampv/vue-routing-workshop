<script>
export default {
  methods: {
    redirectTo() {
      this.$router.push({ name: 'Foo', params: { id: 123312 } })
    }
  }
}

</script>

<template>
  <div>
    <router-view></router-view>
    <router-link to="/foo">To Foo</router-link>
    <router-link to="/bar">To Bar</router-link>

    <button @click="redirectTo">Click</button>
  </div>
</template>

<style scoped>
</style>
