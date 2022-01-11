<template>
  <AppUserList>
    <template v-slot:loading>
      <AppSpinner />
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "./components/AppUserList.vue";
import AppSpinner from "./components/AppSpinner.vue";
export default {
  components: {
    AppUserList,
    AppSpinner,
  },
  data() {
    return {
      log: true,
    };
  },
  methods: {
    click() {
      console.log("works");
    },
  },
};
</script>
