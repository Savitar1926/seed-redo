<script>
import LottieAnimation from "lottie-web-vue";
import IntersectionObserver from "@/components/IntersectionObserver";

export default {
  name: "CenterAnimation",
  data() {
    return {};
  },
  components: {
    LottieAnimation,
    IntersectionObserver,
  },
  mounted() {
    this.centerIntersection();
  },
  methods: {
    centerIntersection() {
      const el = document.querySelector("#pass-center");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            // pause animation
            this.$refs.centerAnimation.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            this.$refs.centerAnimation.play();
          } else {
            // pause animation
            this.$refs.centerAnimation.pause();
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(el);
    },
  },
};
</script>
<template>
  <div class="zoom container-center-animation animate-lead limiter" style="">
    <div class="center-animation">
      <div class="center-lottie">
        <lottie-animation
          ref="centerAnimation"
          :auto-play="false"
          class="lottie_animation"
          :animationData="require('@/assets/Frame 14293 (3)-min.json')"
          :loop="true"
        />
      </div>
    </div>
    <intersection-observer
      id="pass-center"
      style="position: absolute; bottom: -20rem"
    />
  </div>
</template>

<style lang="scss" scoped>
.container-center-animation {
  z-index: 2;
  align-self: center;
  border-radius: 16px;
  padding-inline: var(--step-4);

  .center-animation {
    height: 100%;
    width: 100%;
    color: white; // white
    overflow: hidden;
    border-radius: var(--step-2);

    > .center-lottie {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(2);
      border-radius: var(--step-2);
    }
  }
}
</style>
