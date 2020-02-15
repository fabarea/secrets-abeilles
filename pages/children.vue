<template>
  <div>
    <app-store-grid :data="children" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapGetters(["children"])
  }
};
</script>

<style lang="scss" scoped>
</style>
