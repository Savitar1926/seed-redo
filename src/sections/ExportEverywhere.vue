<script>
import LottieAnimation from "lottie-web-vue";
export default {
  name: "ExportEverywhere",
  data() {
    return {
      color: "#ffff",
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  components: { LottieAnimation },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
  },
  mounted() {
    this.checkScreen();
    const colorValue = document.querySelectorAll(".one-color-value");
    const colorContainer = document.querySelectorAll(".one-colors");
    const colorPresent = document.querySelectorAll(".one-color-present");
    const colorSlider = document.querySelectorAll(".one-color-slider");
    const colorSwatches = document.querySelectorAll(".one-color-stash");
    const colorToggle = document.querySelectorAll(".one-color-toggle");
    const colorList = document.querySelectorAll("ul li");
    let newArray = [];
    colorList.forEach((color) => {
      newArray.push(color);
    });

    const remove = newArray.splice(
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33
    );
    remove.forEach((color) => {
      color.remove();
    });
    colorValue.forEach((color) => {
      color.remove();
    });
    colorToggle.forEach((toggle) => {
      toggle.remove();
    });
    colorSwatches.forEach((color) => {
      color.style.justifyContent = "space-evenly";
    });
    colorSlider.forEach((slider) => {
      slider.style.gap = "8px";
      slider.style.width = "100%";
    });
    colorPresent.forEach((present) => {
      present.remove();
    });
    colorContainer.forEach((container) => {
      container.style.borderRadius = " var(--step--5) var(--step--5) 0 0 ";
      container.style.width = "100%";
      container.style.height = "12rem";
      container.style.overflow = "hidden)";
    });
  },
  methods: {
    change(color) {
      const windowShadow = document.querySelectorAll(".wing-central-bottom-bg path");
      const second = document.querySelectorAll(".testAnim .wing-central-bottom-bg path");
      this.color = color;
      console.log(second);
      windowShadow.forEach((path) => {
        path.setAttribute("fill", this.color);
      });
    },
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<template>
  <div class="export-everywhere position-lift">
    <div class="section__title">
      <h1>Export everywhere</h1>
      <span>
        Make dynamic changes to your animation assets on the fly and have it updated
        across every version of the asset throughout your product stack with our live-link
        feature.</span
      >
    </div>
    <div class="export-section">
      <div class="main-animation">
        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/Still Rocket Orange.json')"
          :loop="true"
        />
        <div class="export__actions">
          <span>Try changing the colours</span>
          <div>
            <color-panel v-model="color" @change="change"></color-panel>
            <button class="update-button">Update Colours</button>
          </div>
        </div>
      </div>
      <lottie-animation
        v-show="!mobile"
        ref="anim"
        :animationData="require('@/assets/devicesSupported.json')"
        :loop="true"
        class="testAnim"
      />
    </div>
    <div class="carousel-mobile" v-show="mobile">
      Check other devices >
      <carousel
        :per-page="1"
        :mouse-drag="true"
        paginationActiveColor="#20ddae"
        :touchDrag="true"
        :autoplay="true"
        :loop="true"
      >
        <slide class="slide">
          <h1>Web</h1>
        </slide>
        <slide class="slide">
          <h1>Android</h1>
        </slide>
        <slide class="slide">
          <h1>Watch</h1>
        </slide>
        <slide class="slide">
          <h1>Watch</h1>
        </slide>
        <slide class="slide">
          <h1>iOS</h1>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.export-everywhere {
  display: flex;
  flex-direction: column;
  gap: var(--step-2);
  color: var(--primary);
  text-align: center;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .section__title {
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--step-0);

    span {
      line-height: var(--step-0);
      width: clamp(80%, 50vw, 50%);
    }

    button {
      color: var(--teal);
    }
  }
  .export-section {
    display: flex;
    flex-direction: column;
    gap: var(--step-4);
    align-items: center;
    .main-animation {
      width: 80%;
      .sample {
        transform: scale(1.045);
      }
    }

    .export__actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--step-2);
      span {
        font-size: var(--step--1);
        font-family: var(--architects_daughter);
      }
      & > div {
        display: flex;
        flex-direction: column;
        gap: var(--step--2);
        justify-content: center;
        align-items: center;
      }
      .one-colorpanel {
        border-radius: var(--step-0);
        background: rgb(20, 38, 42, 0.5);
        border: rgb(20, 38, 42, 0.8) solid 14px;
        backdrop-filter: blur(16px);
      }
      .update-button {
        display: flex;
        font-size: var(--step--3);
        line-height: var(--step-1);
        border-radius: var(--step--2);
        background: none;
        width: 100%;
        background: var(--teal);
        padding-block: var(--step--5);
        color: rgb(20, 38, 42);
        justify-content: center;
      }
    }
  }
}

@media (min-width: 980px) {
  .export-everywhere {
    .export-section {
      .main-animation {
        display: flex;
        justify-content: center;

        .sample {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
