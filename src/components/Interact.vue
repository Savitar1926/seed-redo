<template>
  <div class="preloading">
    <div
      style="width: 210px; margin-inline: auto"
      class="preloading-icon"
    ></div>
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
    anim_Heart: null,
    btn_Heart: null,
    heartActive: false,
  }),
  mounted() {
    this.elt = this.$el.children[0];
    this.anim_Heart = this.buildAnimation();
    // this.anim_Heart.addEventListener("complete", this.isDone);
    this.btn_Heart = document.getElementById("btn_Heart");

    this.segment_Idle();
    this.Addclick();
  },
  methods: {
    buildAnimation() {
      const self = this;
      const anim_Heart = {
        wrapper: self.elt,
        animType: "svg",
        loop: true,
        prerender: true,
        autoplay: false,
      };
      anim_Heart.animationData = loading;
      return lottie.loadAnimation(anim_Heart);
    },
    // Functions
    Addclick() {
      this.btn_Heart.addEventListener("click", this.segment_Active);
    },
    Addmouseover() {
      this.btn_Heart.addEventListener("mouseover", this.segment_mouseover);
    },
    Addmouseout() {
      this.btn_Heart.addEventListener("mouseout", this.segment_mouseout);
    },
    Removemouseout() {
      this.btn_Heart.removeEventListener("mouseout", this.segment_mouseout);
    },
    Removemouseover() {
      this.btn_Heart.removeEventListener("mouseover", this.segment_mouseover);
    },

    // Define all segments
    segment_Idle() {
      this.anim_Heart.playSegments([[0, 239]], true);
      this.Addmouseover();
    },

    segment_mouseover() {
      this.anim_Heart.playSegments([[240, 269]], true);
      this.anim_Heart.addEventListener("loopComplete", this.segment_Hovering);
      this.Addmouseout();
    },
    segment_Hovering() {
      this.anim_Heart.playSegments([[269, 270]], true);
    },
    segment_mouseout() {
      this.anim_Heart.playSegments([[270, 299]], true);
      this.anim_Heart.addEventListener("loopComplete", this.segment_Idle);
    },

    segment_Active() {
      this.anim_Heart.playSegments([[300, 599]], true);
      this.anim_Heart.addEventListener("loopComplete", this.segment_Idle);
      this.Removemouseover();
      this.Removemouseout();
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