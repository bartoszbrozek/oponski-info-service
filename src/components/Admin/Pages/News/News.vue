<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title">News</h1>
      </div>
      <div class="column">
        <b-button
          icon-left="plus-circle"
          size="is-medium is-right"
          class="is-pulled-right"
          tag="router-link"
          :to="{ path: '/admin/news/add' }"
        >Add</b-button>
      </div>
    </div>

    <NewsTable />
  </div>
</template>

<script>
import NewsTable from "./NewsTable";
export default {
  components: {
    NewsTable
  }
};
</script>