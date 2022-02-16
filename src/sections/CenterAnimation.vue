<script>
import LottieAnimation from "lottie-web-vue";

export default {
  components: {
    LottieAnimation,
  },
};
</script>
<template>
  <div>
    <lottie-animation
      :animationData="require('@/assets/center-animation.json')"
      :loop="true"
    />
    <!-- <img src="@/assets/Editor (3) (1).svg" alt="" class="center-animation" /> -->
  </div>
</template>

<style lang="scss" scoped>
div {
  padding-inline: var(--step-0);
  padding-block: var(--step-0);
  .center-animation {
    z-index: 5;
    transform: scale(2.35);

    border-radius: var(--step-0);
    border: rgba(255, 255, 255, 0.5) solid var(--step--4);
    // aspect-ratio: 16 / 9;
    // width: clamp(40rem, 24.39rem + 78.05vw, 80rem);
    -moz-box-shadow: 3px 1px 15px 0px rgba(217, 217, 217, 0.49);
    -webkit-box-shadow: 3px 1px 15px 0px rgba(217, 217, 217, 0.49);
    box-shadow: 3px 1px 15px 0px rgba(217, 217, 217, 0.49);
  }
}
</style>
