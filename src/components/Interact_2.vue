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
import checkScreen from "@/mixins/checkScreen";

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
  mixins: [checkScreen],

  mounted() {
    this.elt = this.$el.children[0];
    this.anim_LightDark = this.buildAnimation();
    // this.anim_LightDark.addEventListener("complete", this.isDone);
    this.btn_LightDark = document.getElementById("btn_LightDark");

    window.addEventListener("resize", this.deviceAnimation);
    this.deviceAnimation();
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
    deviceAnimation() {
      if (this.mobile) {
        this.startAnimation();
      } else {
        this.startTracking();
      }
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
    startTracking() {
      document.addEventListener("mousemove", this.moveListener_LightDark);
    },
    moveListener_LightDark(trackSideways_LightDark) {
      // add cursor tracker
      const nextFrame_LightDark =
        ((trackSideways_LightDark.clientX / window.innerWidth) *
          this.anim_LightDark.totalFrames) /
        2;
      // link to Lottie playback
      this.anim_LightDark.goToAndStop(nextFrame_LightDark, true);

      // current frame number checker (frames 0-150 for this animation)
      // console.log(nextFrame_LightDark)
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
  width: 100%;
  cursor: pointer;
}

#btn_LightDark {
  cursor: pointer;
}
</style>