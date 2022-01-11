<template>
  <section>
    <ul class="userlist" v-if="state === 'loaded'">
      <li v-for="item in data.results" :key="item.email">
        <img
          width="48"
          height="48"
          :src="item.picture.large"
          :alt="item.name.first + ' ' + item.name.last"
        />
        <div>
          <div>{{ item.name.first }}</div>
        </div>
      </li>
    </ul>
    <slot name="loading">loading...</slot>
  </section>
</template>

<script>
const states = {
  idle: "idle",
  loading: "loading",
  loaded: "loaded",
  failed: "failed",
};

export default {
  data() {
    return {
      state: "idle",
      data: undefined,
      error: undefined,
      states,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      this.state = "loading";
      this.error = undefined;
      this.data = undefined;
      try {
        setTimeout(async () => {
          const response = await fetch("https://randomuser.me/api/?results=5");
          const json = await response.json();
          this.state = "loaded";
          this.data = json;
          return response;
        }, 1000);
      } catch (error) {
        this.state = "failed";
        this.error = error;
        return error;
      }
    },
    remove(item) {
      this.data.results = this.data.results.filter(
        (entry) => entry.email !== item.email
      );
    },
  },
};
</script>

<style scoped>
.userlist {
  margin: 10px;
}
.userlist img {
  border-radius: 50%;
  margin-right: 1rem;
}

.userlist li + li {
  margin-top: 10px;
}

.userlist li > div {
  display: flex;
  align-items: center;
}

.userlist li div div {
  flex: 1;
}
</style>
