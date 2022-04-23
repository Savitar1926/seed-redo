<template>
  <div id="HERO_PRODUCT_placement">
    <div id="lottie_HERO_PRODUCT" class="forceGPU"></div>
  </div>
</template>

<script>
import loading from "../assets/01_hero/Hero_Product.json";
import * as lottie from "lottie-web";
export default {
  name: "loadingicon",
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
      let value = (100 * window.scrollY) / document.body.clientHeight;
      console.log(value);
      this.anim_HERO_PRODUCT.goToAndStop((value / 12) * 4000);

      if (window.scrollY == 0) {
        this.anim_HERO_PRODUCT.goToAndStop(0);
      }
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
      anim_HERO_PRODUCT.animationData = loading;
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
  max-width: 1440px;
  margin: 0px auto;
  border-radius: 3vw;
}

#lottie_HERO_PRODUCT {
  display: block;
}

#lottie_HERO_PRODUCT svg {
  border-radius: 3vw;
}

#lottie_HERO_PATTERN {
  display: block;
  width: 100%;
  height: 100%;
  top: -50vh;
  position: absolute;
  z-index: -1;
}

#scroll_container {
  width: 100vw;
  height: 250vh;
  position: absolute;
  max-width: unset;
  max-height: unset;
  margin: unset;
  padding: unset;
  top: 0;
  left: 0;
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