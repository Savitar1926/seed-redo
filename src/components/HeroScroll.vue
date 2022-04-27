<template>
  <div id="HERO_PRODUCT_placement">
    <div id="lottie_HERO_PRODUCT" class="forceGPU"></div>
  </div>
</template>

<script>
import hero from "../assets/01_hero/Hero_Product.json";
import * as lottie from "lottie-web";
export default {
  name: "heroicon",
  data: () => ({
    speed: 1,
    elt: {},
    autoplay: true,
    anim_HERO_PRODUCT: null,
    cont_HERO_PRODUCT: null,
  }),
  mounted() {
    this.elt = this.$el.children[0];
    this.anim_HERO_PRODUCT = this.buildAnimation();
    window.addEventListener("scroll", () => {
      let scrollvalue = (90 * window.scrollY) / document.body.clientHeight;
      let goToValue = (scrollvalue / 10) * 90;
      goToValue = Math.min(Math.max(0, goToValue), 121);
      this.anim_HERO_PRODUCT.goToAndStop(goToValue, true);

      //   if (window.scrollY < 804 && window.scrollY > 750) {
      //     this.anim_HERO_PRODUCT.goToAndStop(goToValue);
      //     console.log("here");
      //   }
      //   //   console.log(`got: ${goToValue}`);
      //   //   console.log(`frame: ${this.anim_HERO_PRODUCT.currentRawFrame}`);
      //   if (window.scrollY > 804) {
      //     this.anim_HERO_PRODUCT.playSegments([[90, 121]], true);
      //   }
    });
  },
  methods: {
    buildAnimation() {
      const self = this;
      const anim_HERO_PRODUCT = {
        wrapper: self.elt,
        animType: "svg",
        loop: true,
        autoplay: false,
      };
      anim_HERO_PRODUCT.animationData = hero;
      return lottie.loadAnimation(anim_HERO_PRODUCT);
    },
  },
};
</script>

<style scoped>
body {
  background: #f0f2f8;
}

#HERO_PRODUCT_placement {
  position: relative;
  width: 100%;
  max-width: 2190px;
  margin: 0px auto;
  border-radius: 3vw;
  z-index: 999;
}

#lottie_HERO_PRODUCT {
  display: block;
}

#lottie_HERO_PRODUCT svg {
  border-radius: 3vw;
}

/* IF PLACING LOTTIE IN PARALLAX OR USING CSS TRANSFORMS */

.forceGPU {
  -webkit-transform: translateZ(0) !important;
  -moz-transform: translateZ(0) !important;
  -ms-transform: translateZ(0) !important;
  -o-transform: translateZ(0) !important;
  transform: translateZ(0) !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}

.forceGPU svg {
  -webkit-transform: translateZ(0) !important;
  -moz-transform: translateZ(0) !important;
  -ms-transform: translateZ(0) !important;
  -o-transform: translateZ(0) !important;
  transform: translateZ(0) !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}
</style>