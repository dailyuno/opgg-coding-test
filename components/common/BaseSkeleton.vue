<script>
export default {
  name: "base-skeleton",
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    radius: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
};
</script>

<style></style>
