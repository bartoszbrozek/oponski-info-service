<template>
  <div>
    <router-view name="adminView"></router-view>
  </div>
</template>
<script>
export default {
  name: "admin-pages",
  data() {
    return {

    };
  },
  methods: {
      login() {
          this.$store.dispatch('user/retrieveToken', {
              username: this.username,
              password: this.password
          })
      }
  }
};
</script>