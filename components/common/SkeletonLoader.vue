<template>
  <div
    class="skeleton-loader animation--wave"
    :class="inline ? 'skeleton-loader--inline' : ''"
  >
    <component
      :is="currentTypeComponent"
      :width="width"
      :height="height"
      :radius="radius"
    >
    </component>
  </div>
</template>

<script>
import SkeletonCircle from "~/components/common/SkeletonCircle.vue";
import SkeletonRect from "~/components/common/SkeletonRect.vue";

export default {
  name: "skeleton-loader",
  components: { SkeletonRect, SkeletonCircle },
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: "rect",
    },
    radius: {
      type: Number,
      default: 2,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentTypeComponent() {
      switch (this.type) {
        case "circle":
          return SkeletonCircle;
        case "rect":
        default:
          return SkeletonRect;
      }
    },
  },
};
</script>

<style lang="scss">
@-webkit-keyframes wave {
  100% {
    transform: translateX(100%);
  }
}

@keyframes wave {
  100% {
    transform: translateX(100%);
  }
}

.skeleton-loader {
  $self: &;

  &--inline {
    display: inline-block;
  }

  &.animation--wave {
    #{$self}__shape:after {
      -webkit-animation: wave 1.5s infinite;
      animation: wave 1.5s infinite;
    }
  }

  &__shape {
    position: relative;
    overflow: hidden;
    background: rgb(0, 0, 0, 0.12);

    &--circle {
      border-radius: 50%;
    }

    &::after {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
      );

      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(-100%);
      z-index: 1;
    }
  }
}
</style>
