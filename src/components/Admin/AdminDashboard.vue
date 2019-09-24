<template>
  <div>
    Admin PAGES
  </div>
</template>
<script>
export default {
  name: "admin-dashboard",
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