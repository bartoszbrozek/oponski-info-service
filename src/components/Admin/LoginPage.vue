<template>
  <div class="container">
    <h1 class="title">Login to Admin Panel</h1>
    <section>
      <b-field label="Username" type="is-success">
        <b-input maxlength="30" required v-model="username"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" password-reveal required v-model="password"></b-input>
      </b-field>

      <b-button type="is-info" @click="login">Login</b-button>
    </section>
  </div>
</template>
<script>
export default {
  name: "admin-login",
  data() {
    return {
      username: "",
      password: ""
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