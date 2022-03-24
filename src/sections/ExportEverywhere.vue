<script>
// import LottieAnimation from "lottie-web-vue";
import icon from "@/assets/Icons.vue";

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
  components: {
    // LottieAnimation,
    icon,
  },
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
    const remove = newArray.splice("08");
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
      slider.style.gap = "24px";
      slider.style.width = "100%";
    });
    colorPresent.forEach((present) => {
      present.remove();
    });
    colorContainer.forEach((container) => {
      container.style.borderRadius = "var(--step--2) var(--step--2) 0 0";
      container.style.width = "240px";
      container.style.height = "146px";
      container.style.overflow = "hidden";
    });
  },
  methods: {
    change(color) {
      const windowShadow = document.querySelectorAll(
        ".wing-central-bottom-bg path"
      );
      const second = document.querySelectorAll(
        ".testAnim .wing-central-bottom-bg path"
      );
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
        With our Live link feature, make dynamic changes to your animation
        assets on the fly and have it updated across every instance of it
        throughout your products... no developer hand-off needed.</span
      >
    </div>
    <div class="export-section">
      <div class="main-animation">
        <!-- <lottie-animation
          :animationData="require('@/assets/Still Rocket Orange.json')"
          :loop="true"
        /> -->
        <img src="@/assets/rocket.svg" style="height: fit-content" />
        <div class="export__actions">
          <span>Try changing the colours</span>
          <div>
            <div
              class="card card--shadow-dark color-panel"
              style="padding: 8px; border-radius: 34px"
            >
              <color-panel v-model="color" @change="change"></color-panel>
            </div>
            <button class="update-button">
              <icon name="update" style="display: flex; align-self: center" />
              Update Colours
            </button>
          </div>
        </div>
      </div>
      <!-- <lottie-animation
        v-show="!mobile"
        :animationData="require('@/assets/devicesSupported.json')"
        :loop="true"
        class="testAnim"
      /> -->
      <img
        v-show="!mobile"
        src="@/assets/Devices.svg"
        style="inset: 0; z-index: -2"
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
      width: 80%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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

      .color-panel {
        background-image: linear-gradient(
          79.84deg,
          rgb(122, 111, 251, 0.5) -1%,
          rgb(255, 84, 103, 0.5) 88%,
          rgb(253, 190, 4, 0.5) 100%
        );
      }
      .one-colorpanel {
        border-radius: var(--step-0);
        background: #222222;
        backdrop-filter: blur(16px);
        width: 100%;
      }
      .one-color-control .one-opacity {
        height: 12px;
        width: 101% !important;
        border-radius: 3px;
        box-shadow: 0 0 1px 0 rgb(0 0 0 / 20%);
        position: relative;
        z-index: 0;
      }

      .update-button {
        display: flex;
        font-size: var(--step--3);
        line-height: var(--step-1);
        border-radius: var(--step--2);
        background: none;
        width: 100%;
        background: linear-gradient(
          79.84deg,
          #7a6ffb -1.31%,
          #ff5467 85.47%,
          #fdbe04 131.99%
        );
        padding-block: var(--step--5);
        color: var(--primary);
        justify-content: center;
        align-items: center;
        gap: var(--step--1);
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
