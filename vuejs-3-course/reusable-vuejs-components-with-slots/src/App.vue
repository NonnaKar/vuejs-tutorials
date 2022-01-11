<template>
  <AppLayout>
    <template #header> Slots are awesome </template>
    <template #default>
      <AppButton @click="log">
        <AppIcon name="heart" />
        add to favorites
      </AppButton>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "./components/AppLayout.vue";
import AppButton from "./components/AppButton.vue";
import AppIcon from "./components/AppIcon.vue";
export default {
  components: {
    AppButton,
    AppIcon,
    AppLayout,
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
