<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Add News</h1>
      </div>
      <div class="column">
        <b-button
          icon-left="long-arrow-alt-left"
          size="is-medium is-right"
          class="is-pulled-right"
          tag="router-link"
          :to="{ path: '/admin/news' }"
        >Back to News</b-button>
      </div>
    </div>

    <section>
      <b-field label="Title">
        <b-input v-model="title" required></b-input>
      </b-field>

      <b-field label="Subtitle">
        <b-input v-model="subtitle" required></b-input>
      </b-field>

      <b-field label="Content">
        <b-input v-model="content" maxlength="200" type="textarea" required></b-input>
      </b-field>

      <b-button icon-left="check" size="is-medium is-right" @click="create">Publish</b-button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
      this.$store.commit("news/clearForm")
  },
  computed: {
    title: {
      get() {
        return this.$store.getters["news/title"];
      },
      set(value) {
        this.$store.commit("news/updateTitle", value);
      }
    },
    subtitle: {
      get() {
        return this.$store.getters["news/subtitle"];
      },
      set(value) {
        this.$store.commit("news/updateSubtitle", value);
      }
    },
    content: {
      get() {
        return this.$store.getters["news/content"];
      },
      set(value) {
        this.$store.commit("news/updateContent", value);
      }
    }
  },
  methods: {
    ...mapActions({
      create: "news/create"
    })
  }
};
</script>