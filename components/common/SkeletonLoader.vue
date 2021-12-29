<template>
  <div
    class="skeleton-loader animation--wave"
    :class="inline ? 'skeleton-loader--inline' : ''"
  >
    <skeleton-rect
      v-if="type === 'rect'"
      :width="width"
      :height="height"
      :radius="radius"
      :margin="margin"
    ></skeleton-rect>
    <skeleton-circle
      v-else-if="type === 'circle'"
      :width="width"
      :height="height"
      :margin="margin"
    ></skeleton-circle>
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
      required: true,
      default: "rect",
    },
    radius: {
      type: Number,
      default: 0,
    },
    margin: {
      type: String,
      default: "0",
    },
    inline: {
      type: Boolean,
      default: false,
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
