<template>
  <section>
    <b-field grouped group-multiline>
      <b-select v-model="perPage" :disabled="!isPaginated">
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="100">100 per page</option>
      </b-select>
    </b-field>

    <b-table
      :data="news"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="id"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>{{ props.row.id }}</b-table-column>

        <b-table-column field="name" label="Name" sortable>{{ props.row.name }}</b-table-column>

        <b-table-column field="created_at" label="Created At" sortable centered>
          <span class="tag is-success">{{ new Date(props.row.created_at).toLocaleDateString() }}</span>
        </b-table-column>

        <b-table-column field="updated_at" label="Updated At" sortable centered>
          <span class="tag is-success">{{ new Date(props.row.updated_at).toLocaleDateString() }}</span>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 20
    };
  },
  created: function() {
    this.$store.dispatch("categories/getAll");
  },
  computed: mapGetters({
    news: "categories/categories"
  })
};
</script>