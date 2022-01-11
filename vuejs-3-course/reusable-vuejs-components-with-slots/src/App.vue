<template>
  <AppUserList>
    <template v-slot:secondrow="item">
      <a :href="'tel:' + item.item.phone">{{ item.item.phone }}</a>
      <a :href="'mailto:' + item.item.email">{{ item.item.email }}</a>
    </template>
  </AppUserList>
</template>

<script>
import AppUserList from "./components/AppUserList.vue";
export default {
  components: {
    AppUserList,
  },
};
</script>
