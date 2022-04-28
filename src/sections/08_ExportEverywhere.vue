<script>
import icon from "@/assets/Icons.vue";
import checkScreen from "@/mixins/checkScreen";
import elementSelector from "@/mixins/elementSelector";
import LottieAnimation from "lottie-web-vue";

export default {
  name: "ExportEverywhere",
  data() {
    return {
      color: "#ffff",
    };
  },
  mixins: [checkScreen, elementSelector],
  components: {
    icon,
    LottieAnimation,
  },
  mounted() {
    this.colorPanel();
  },
  methods: {
    change(color) {
      this.color = color;
      this.qsa("#color").forEach((path) => {
        path.setAttribute("fill", this.color);
      });
    },

    colorPanel() {
      [...this.qsa("ul li")].splice(13, 23).forEach((color) => color.remove());
      this.qsa(".one-color-value").forEach((color) => color.remove());
      this.qsa(".one-color-toggle").forEach((toggle) => toggle.remove());
      this.qsa(".one-color-present").forEach((present) => present.remove());
      this.qsa(".one-color-stash").forEach(
        (color) => (color.style.justifyContent = "space-evenly")
      );
      this.qsa(".one-color-slider").forEach((slider) => {
        slider.style.gap = "var(--step--1)";
        slider.style.width = "100%";
      });
      this.qsa(".one-colors").forEach((container) => {
        container.style.width = "240px";
        container.style.overflow = "hidden";
      });
    },
    updateAll() {
      const element = this.qs(".placeholder-devices");

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      this.qsa("#color_2").forEach((path) => {
        path.setAttribute("fill", this.color);
      });
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
        <!-- <img class="placeholder-rocket" src="@/assets/rocket.svg" /> -->
        <lottie-animation
          :animationData="
            require('@/assets/07_exportEverywhere/Export-Everywhere.json')
          "
          :loop="true"
        />
        <div class="export__actions">
          <span>Try changing the colours</span>
          <div>
            <div class="card card--shadow-dark color-panel">
              <color-panel v-model="color" @change="change"></color-panel>
            </div>
            <button @click="updateAll()" class="update-button">
              <icon class="update-icon" name="update" />
              Update Colours
            </button>
          </div>
        </div>
      </div>
      <lottie-animation
        class="placeholder-devices"
        :animationData="require('@/assets/07_exportEverywhere/Devices_2.json')"
        :loop="true"
      />
      <!-- <img
        loading="lazy"
        class="placeholder-devices"
        src="@/assets/07_exportEverywhere/Devices.svg"
      /> -->
    </div>
    <!-- <div class="carousel-mobile" v-show="mobile">
      <carousel
        :per-page="1"
        :mouse-drag="true"
        paginationActiveColor="rgb(238, 49, 131)"
        :touchDrag="true"
        :auto-play="true"
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
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.export-everywhere {
  display: flex;
  flex-direction: column;
  gap: var(--step-2);
  color: var(--primary);
  text-align: flex-start;
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
    align-items: flex-start;
    gap: var(--step-0);

    span {
      line-height: var(--step-0);
      width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .export-section {
    display: flex;
    flex-direction: column;
    gap: var(--step--2);
    align-items: center;
    .main-animation {
      width: 80%;
      .placeholder-rocket {
        height: fit-content;
      }
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

      .placeholder-devices {
        inset: 0;
        z-index: -2;
      }
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
          80deg,
          rgb(122, 111, 251, 0.5) -1%,
          rgb(255, 84, 103, 0.5) 88%,
          rgb(253, 190, 4, 0.5) 100%
        );
        padding: 4px !important;
        border-radius: 20px !important;
      }
      .one-colorpanel {
        border-radius: var(--step--3);
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
          80deg,
          #7a6ffb -1%,
          #ff5467 88%,
          #fdbe04 132%
        );
        padding-block: var(--step--5);
        color: var(--primary);
        justify-content: center;
        align-items: center;
        gap: var(--step--1);

        .update-icon {
          width: 15px !important;
          display: flex;
          align-self: center;

          svg {
            width: 15px !important;
          }
        }
      }
    }
  }
}

@media (min-width: 980px) {
  .export-everywhere {
    text-align: center;
    .section__title {
      align-items: center;

      span {
        width: 80%;
      }
    }
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
