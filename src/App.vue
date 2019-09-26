<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="loginView"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
