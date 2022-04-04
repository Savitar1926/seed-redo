<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "CenterAnimation",
  components: {
    LottieAnimation,
  },
};
</script>
<template>
  <div class="zoom container-center-animation animate-lead limiter" style="">
    <div class="center-animation">
      <div class="center-lottie">
        <!-- <img
          loading="lazy"
          src="https://i.pinimg.com/originals/44/d3/cb/44d3cb171c571b949242bb57603bc88f.png"
          alt=""
        /> -->
        <lottie-animation
          class="lottie_animation"
          :animationData="require('@/assets/center-animation.json')"
          :loop="true"
        />
      </div>
    </div>
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

    > .center-lottie {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(2);
      border-radius: var(--step-2);

      .lottie_animation {
        box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
        -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
        -moz-box-shadow: 34px 16px 32px rgba(207, 208, 235, 0.32);
      }
    }
  }
}
</style>
