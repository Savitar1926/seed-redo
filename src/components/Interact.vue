<template>
  <div class="preloading">
    <div class="preloading-icon"></div>
  </div>
</template>

<script>
import loading from "../assets/Interactive_Heart-Click_all-states.json";
import * as lottie from "lottie-web";
export default {
  name: "loadingicon",
  data: () => ({
    speed: 1,
    elt: {},
    autoplay: true,
    animData: null,
  }),
  mounted() {
    this.elt = this.$el.children[0];
    this.animData = this.buildAnimation();
    // this.animData.addEventListener("complete", this.isDone);
    const btn_Heart = document.getElementById("btn_Heart");
    this.animData.playSegments([[0, 239]], true);
    btn_Heart.addEventListener("mouseover", () => {
      this.animData.playSegments([[240, 269]], true);
      this.animData.addEventListener("loopComplete", () => {
        this.animData.playSegments([[269, 270]], true);
      });
      btn_Heart.addEventListener("mouseout", () => {
        this.animData.playSegments([[270, 299]], true);
        this.animData.addEventListener("loopComplete", () => {
          this.animData.playSegments([[0, 239]], true);
        });
      });
    });
    btn_Heart.addEventListener("mouseout", () => {
      this.animData.playSegments([[240, 269]], true);
    });
    btn_Heart.addEventListener("click", () => {
      // this.play();
      this.animData.playSegments([[300, 599]], true);
      this.animData.addEventListener("loopComplete", () => {
        this.animData.playSegments([[0, 239]], true);
      });
      btn_Heart.addEventListener("mouseout", () => {
        this.animData.playSegments([[240, 269]], true);
      });
      btn_Heart.addEventListener("mouseout", () => {
        this.animData.playSegments([[270, 299]], true);
        this.animData.addEventListener("loopComplete", () => {
          this.animData.playSegments([[0, 239]], true);
        });
      });
    });
  },
  methods: {
    play() {
      this.animData.play();
    },
    isDone() {
      this.$emit("done");
    },
    buildAnimation() {
      const self = this;
      const animData = {
        wrapper: self.elt,
        animType: "svg",
        loop: true,
        prerender: true,
        autoplay: false,
      };
      animData.animationData = loading;
      return lottie.loadAnimation(animData);
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
}

#btn_Heart {
  cursor: pointer;
}
</style>