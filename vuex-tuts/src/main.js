import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  }
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

app.mount("#app");
