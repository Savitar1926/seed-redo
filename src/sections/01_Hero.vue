<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "Hero",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  mounted() {
    this.checkScreen();
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
  },
  components: {
    LottieAnimation,
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
<template>
  <main class="hero limiter position-lift">
    <div class="hero position-lift">
      <lottie-animation
        class="text-animation animate-lead"
        :animationData="require('@/assets/01_hero/hero-text.json')"
        :loop="true"
      />
      <div class="hero__lead animate-lead">
        <p>
          Bring your websites and apps to life with the <br />
          <strong> simplest editor for lottie animations </strong>
        </p>
      </div>
      <div class="button">
        <button class="button__early-access animate-lead">
          Get early access
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--step-0);
  height: 100%;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
  justify-content: center;
  text-align: center;
  overflow-y: hidden;
  margin-inline: auto;
  height: 95vh;
  margin-bottom: -80px;

  .hero {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;

    .text-animation {
      transform: scale(0.88);
      height: 100%;
      margin-bottom: -2rem;
    }

    h1 {
      font-size: var(--step-2);
      line-height: var(--step-4);
      width: 80%;
    }
    &--highlight {
      background: linear-gradient(
        150deg,
        var(--teal) 0%,
        rgba(98, 122, 246, 1) 100%
      );
      background-size: 200%;
      right: 0;
      left: 100%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    &__lead {
      width: clamp(18.75rem, 12.41rem + 31.71vw, 35rem);
      font-weight: var(--normal);
      font-size: clamp(0.5rem, calc(0.21rem + 1.46vw), 1.25rem);
      line-height: var(--step-0);
      color: #5c617c;
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    gap: var(--step-0);
    position: relative;
    padding: 4px;
    transition: all 200ms ease-out;
    border-radius: var(--step--1);
    width: fit-content;

    &:hover,
    &:focus-visible {
      transform: scale(0.96);
    }

    &:active {
      transform: scale(0.85);
    }

    button {
      border-radius: inherit;
      font-size: var(--step--3);
      line-height: var(--step-0);
      padding-block: var(--step--3);
      padding-inline: var(--step-1);
      transform: none !important;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--step--2);
      .arrow {
        display: flex;
        stroke: white;
      }
    }

    &:after {
      content: "";
      height: inherit;
      background-image: linear-gradient(
        79.84deg,
        rgb(122, 111, 251, 0.5) -1%,
        rgb(255, 84, 103, 0.5) 88%,
        rgb(253, 190, 4, 0.5) 100%
      );
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: calc(var(--step-0) - 2px);
      backdrop-filter: blur(16px);
    }
    &__early-access {
      background-image: linear-gradient(
        79.84deg,
        rgb(122, 111, 251, 1) -1%,
        rgb(255, 84, 103, 1) 88%,
        rgb(253, 190, 4, 1) 100%
      );
      color: #ffffff;
      backdrop-filter: blur(16px);

      &:hover {
        -webkit-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
        -moz-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
        box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
      }
    }
  }
}
</style>
