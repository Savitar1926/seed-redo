<template>
  <div class="panel limiter">
    <div class="parent-interactive" style="position: relative; height: 100vh">
      <div
        style="
          position: absolute;
          inset: 0;
          padding-block: var(--step-0);
          display: flex;
          align-items: center;
          z-index: 998;
        "
      >
        <div
          class="content-container"
          style="display: flex; background: red; height: 80%; width: 100%"
        >
          <div
            class="section-content"
            style="width: 50%; background: cyan"
          ></div>
          <div class="section-empty"></div>
        </div>
      </div>
      <div
        class="cards-overflow"
        style="
          display: flex;
          width: 100%;
          position: absolute;
          inset: 0;
          z-index: 999;
        "
      >
        <div class="section-empty" style="background: none; width: 50%"></div>
        <div
          class="section-cards"
          style="
            width: 50%;
            background: rgba(0 0 0 / 0.2);
            height: 100%;
            backdrop-filter: blur(16px);
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { LottieInteractive } from "lottie-interactive";
export default {
  name: "SimpleForEveryone",
  data() {
    return {
      controller: null,
      tween: null,
      scene: null,
    };
  },
  components: {
    // LottieInteractive,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  // background: linear-gradient(
  //     61.31deg,
  //     rgba(254, 184, 42, 0.5) -58.21%,
  //     rgba(238, 49, 131, 0.5) 72.74%,
  //     rgba(124, 113, 253, 0) 105.16%
  //   ),
  //   linear-gradient(
  //     243.29deg,
  //     rgba(254, 184, 42, 0) -7.96%,
  //     rgba(238, 49, 131, 0.5) 35.93%,
  //     rgba(124, 113, 253, 0) 68.85%
  //   );
  // border: 16px solid rgba(43, 43, 43, 0.8);
  backdrop-filter: blur(16px);
  border-radius: 40px;
  z-index: 2;
  position: relative;
  margin-inline: auto;
}
</style>
