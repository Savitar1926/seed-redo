<template>
  <div class="meet-lottie position-lift limiter">
    <div class="container">
      <div class="col__one">
        <div class="section__title">
          <h1>The Lottie format</h1>
          <h2 style="color: #007a88">The new standard for motion design</h2>
          <span>
            Lottie is an open-source animation file format that is lighweight,
            high-quality, dynamic and modiefied in real time. Lottie is now used
            to engage consumers and increase conversions by top 500 apps on the
            App Store.</span
          >
          <button class="full">
            Learn more
            <icon name="arrow" class="arrow" />
          </button>
        </div>
      </div>
      <div class="col__two">
        <div class="card card--light card--shadow usecase--ease">
          <div class="sample_container">
            <lottie-animation
              :animationData="require('@/assets/Pattern_6.json')"
              :loop="true"
            />
            <div>
              <h3>351 kB</h3>
              <span>GIF</span>
            </div>
          </div>
        </div>
        <div class="card card--light card--shadow usecase--ease">
          <div class="sample_container">
            <lottie-animation
              :animationData="require('@/assets/Pattern_6.json')"
              :loop="true"
            />
            <h3 style="color: #00bcae">61 kB</h3>
            <span style="color: #00bcae">Lottie</span>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        v-show="!mobile"
        src="@/assets/09_meetLottie/meetlottie-image.svg"
        style="
          position: absolute;
          top: 0;
          right: 0;
          z-index: -1;
          margin-top: -2rem;
          margin-right: -2rem;
          width: 600px;
          height: auto;
        "
      />
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";
import icon from "@/assets/Icons.vue";

export default {
  data() {
    return {
      mobile: null,
      windownWidth: null,
    };
  },
  components: {
    LottieAnimation,
    icon,
  },
  mounted() {
    this.checkScreen;
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
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

<style lang="scss" scoped>
.meet-lottie {
  color: var(--primary);
  margin: auto;
  overflow: hidden;
  padding: var(--step-4);
  // height: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 32px 32px;
    grid-auto-flow: row;
    justify-items: stretch;
    grid-template-areas:
      "col__one"
      "col__two";
  }

  .col__one {
    grid-area: col__one;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--step--1);
    .section__title {
      h1 {
        color: #00bcae;
      }
      h2 {
        width: 90%;
        color: var(--dark-sub);
        font-weight: var(--medium);
      }
      span {
        color: var(--dark);
        width: 80%;
        line-height: var(--step-0);
      }
      button {
        gap: var(--step--4);
        align-items: center;
        height: max-content;
        color: #00bcae;

        .arrow {
          display: flex;
          stroke: #00bcae;
        }
      }
    }
  }

  .col__two {
    grid-area: col__two;
    display: flex;
    gap: var(--step-0);
    height: fit-content;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: var(--step-0);
      }
      span {
        font-weight: var(--medium);
        font-size: var(--step-0);
      }
    }
  }
}
@media (min-width: 980px) {
  .meet-lottie {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      gap: 32px 32px;
      grid-auto-flow: row;
      justify-items: stretch;
      grid-template-areas: "col__one col__two";
      height: 100%;
    }

    .col__two {
      grid-area: col__two;
      display: flex;
      align-items: center;
    }
  }
}
</style>
