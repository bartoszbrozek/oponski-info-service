<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Categories</h1>
      </div>
      <div class="column">
        <b-button
          icon-left="plus-circle"
          size="is-medium is-right"
          class="is-pulled-right"
          tag="router-link"
          :to="{ path: '/admin/categories/add' }"
        >Add</b-button>
      </div>
    </div>

    <CategoriesTable />
  </div>
</template>

<script>
import CategoriesTable from "./CategoriesTable";
export default {
  components: {
    CategoriesTable
  }
};
</script>