<template>
  <div>
    <input
      type="text"
      v-model="name"
      placeholder="소환사"
      @keyup.enter="search"
    />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    search() {
      const { name } = this;

      this.$router.push({
        name: "summoner-name",
        params: {
          name,
        },
      });
    },
  },
};
</script>
