<template>
    <div class="appheader">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        title: String
    }
}
</script>

<style scoped>
    .appheader{
         text-align: center;
    }
</style>
