<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Add Categories</h1>
      </div>
      <div class="column">
        <b-button
          icon-left="long-arrow-alt-left"
          size="is-medium is-right"
          class="is-pulled-right"
          tag="router-link"
          :to="{ path: '/admin/categories' }"
        >Back to Categories</b-button>
      </div>
    </div>

    <section>
      <b-field label="Name">
        <b-input v-model="name" required></b-input>
      </b-field>

      <b-button icon-left="check" size="is-medium is-right" @click="create">Create</b-button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
      this.$store.commit("categories/clearForm")
  },
  computed: {
    name: {
      get() {
        return this.$store.getters["categories/name"];
      },
      set(value) {
        this.$store.commit("categories/updateName", value);
      }
    }
  },
  methods: {
    ...mapActions({
      create: "categories/create"
    })
  }
};
</script>