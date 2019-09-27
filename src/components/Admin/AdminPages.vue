<template>
  <div>
    <div class="container is-fluid" v-if="isLoggedIn">
      <!-- NAVBAR -->
      <section>
        <b-navbar class="is-primary">
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="./../../assets/logo.png" alt="OPOŃ" />
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item href="#">Home</b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-light" @click="logout">Log out</a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </section>

      <div class="container">&nbsp;</div>

      <div class="columns">
        <div class="column is-narrow">
          <!-- MENU -->
          <section>
            <b-menu>
              <b-menu-list label="Menu">
                <b-menu-item label="Dashboard" tag="router-link" :to="{ path: '/admin' }"></b-menu-item>
                <b-menu-item label="News" tag="router-link" :to="{ path: '/admin/news' }"></b-menu-item>
                <b-menu-item
                  label="Categories"
                  tag="router-link"
                  :to="{ path: '/admin/categories' }"
                ></b-menu-item>
              </b-menu-list>
              <b-menu-list label="Actions">
                <b-menu-item label="Logout" @click="logout"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </section>
        </div>

        <div class="column">
          <router-view name="adminView"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "admin-pages",
  methods: {
    logout() {
      this.$store.dispatch("user/removeToken");
      this.$router.push("/admin/login");
    }
  },
  computed: mapGetters({
    isLoggedIn: "user/isLoggedIn"
  })
};
</script>