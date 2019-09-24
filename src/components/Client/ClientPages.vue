<template>
  <div>
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <b-navbar>
              <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img src="./../../assets/logo.png" alt="OPOŃ" />
                </b-navbar-item>
              </template>
              <template slot="start">
                <b-navbar-item href="#">Strona Główna</b-navbar-item>
                <b-navbar-item href="#">Wiadomości</b-navbar-item>
                <b-navbar-item href="#">HBOpoń</b-navbar-item>
              </template>
            </b-navbar>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Opońskie Wiadomości</h1>
          <h2 class="subtitle">Jedyny w Polsce serwis z Opońskimi Wiadomościami</h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container"></div>
        </nav>
      </div>
    </section>

    <div class="container">&nbsp;</div>

    <div class="container">
      <div class="is-centered">
        Render CLIENT pages t
        <router-view name="clientView"></router-view>
      </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Opońskie Wiadomości</strong> by
          <a href="https://github.com/bartoszbrozek">Bartosz Brożek</a>.
        </p>
      </div>
    </footer>
  </div>

</template>
<script>
export default {
  name: "client-pages",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$store.dispatch("user/retrieveToken", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>