<template>
  <div>
    Admin PAGES
    <button @click="logout">Logout</button>
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
      logout() {
          this.$store.dispatch('user/removeToken')
      }
  }
};
</script>