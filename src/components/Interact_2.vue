<template>
  <div class="preloading">
    <div
      style="margin-inline: auto; transform: scale(1.05); transform-origin: top"
      class="preloading-icon"
    ></div>
  </div>
</template>

<script>
import loading from "../assets/Interactive_Light-Dark.json";
import * as lottie from "lottie-web";
export default {
  name: "loadingicon",
  data: () => ({
    speed: 1,
    elt: {},
    autoplay: true,
    anim_LightDark: null,
    dir: -1,
    btn_LightDark: null,
  }),
  mounted() {
    this.elt = this.$el.children[0];
    this.anim_LightDark = this.buildAnimation();
    // this.anim_LightDark.addEventListener("complete", this.isDone);
    this.btn_LightDark = document.getElementById("btn_LightDark");
    this.startAnimation();
  },
  methods: {
    buildAnimation() {
      const self = this;
      const anim_LightDark = {
        wrapper: self.elt,
        animType: "svg",
        loop: false,
        prerender: true,
        autoplay: false,
      };
      anim_LightDark.animationData = loading;
      return lottie.loadAnimation(anim_LightDark);
    },
    // Functions
    segment_Idle() {
      this.anim_LightDark.goToAndStop(0);
    },
    segment_Active() {
      this.anim_LightDark.play();
      this.dir *= -1;
      this.anim_LightDark.setDirection(this.dir);
    },
    startAnimation() {
      this.btn_LightDark.addEventListener("click", this.segment_Active);
      this.segment_Idle();
    },
  },
};
</script>

<style>
svg {
  width: 100%;
}

.anim-preload-main {
  fill: var(--color-invert);
  stroke: var(--color-invert);
}
.anim-preload-mask {
  fill: var(--color-bg-dark);
  stroke: var(--color-bg-dark);
}
.anim-bg {
  fill: transparent;
  stroke: transparent;
}
.preloading-icon {
  width: 300px;
  cursor: pointer;
}

#btn_LightDark {
  cursor: pointer;
}
</style>