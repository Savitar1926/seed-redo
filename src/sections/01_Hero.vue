<script>
import LottieAnimation from "lottie-web-vue";
import IntersectionObserver from "@/components/IntersectionObserver";

import checkScreen from "@/mixins/checkScreen";

export default {
  name: "Hero",
  data() {
    return {
      passIntersectingText: false,
    };
  },
  mixins: [checkScreen],
  components: {
    LottieAnimation,
    IntersectionObserver,
  },
  mounted() {
    // this.heroTextIntersection();
  },
  methods: {
    // heroTextIntersection() {
    //   const el = document.querySelector("#pass-heroText");
    //   const observer = new window.IntersectionObserver(
    //     ([entry]) => {
    //       entry.boundingClientRect.top;
    //       if (entry.isIntersecting) {
    //         this.$refs.textAnimation.play();
    //       }
    //       if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
    //         // pause animation
    //         this.$refs.textAnimation.pause();
    //       }
    //       if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
    //         // play animation
    //         this.$refs.textAnimation.play();
    //       } else {
    //         // pause animation
    //         this.$refs.textAnimation.pause();
    //       }
    //     },
    //     {
    //       root: null,
    //       threshold: 0,
    //     }
    //   );
    //   observer.observe(el);
    // },
  },
};
</script>
<template>
  <main class="hero limiter position-lift">
    <div class="hero position-lift">
      <lottie-animation
        ref="textAnimation"
        v-show="!mobile"
        aria-label="Create and ship animations for your products faster."
        class="text-animation animate-lead"
        :animationData="require('@/assets/01_hero/Hero_Text.json')"
        :loop="true"
        :auto-play="true"
      />
      <h1 class="animate-lead" v-show="mobile">
        Create and ship animations for your products faster.
      </h1>
      <div class="hero__lead animate-lead">
        <p>
          Bring your websites and apps to life with the <br />
          <strong> simplest editor for lottie animations </strong>
        </p>
      </div>
      <div class="button-container">
        <div class="button">
          <button
            onclick="window.open('https://lottielab.io/users/sign_up').focus()"
            class="button__early-access animate-lead"
          >
            Get early access
          </button>
        </div>
        <span class="private-beta"> 🔒 In private beta</span>
      </div>
    </div>
    <intersection-observer
      style="position: absolute; bottom: -0.5rem"
      id="pass-heroText"
    />
  </main>
</template>

<style lang="scss" scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--step-0);
  height: 100%;
  // padding-inline: var(--step-0);
  padding-block: var(--step-0);
  justify-content: center;
  text-align: center;
  overflow-y: hidden;
  margin-inline: auto;
  height: 85vh;
  margin-bottom: calc(-1.5 * var(--step-4));

  .hero {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--step-1);
    width: 100%;

    .text-animation {
      height: 100%;
      max-width: 970px;
    }

    h1 {
      font-size: calc(var(--step-0) + 0.5rem);
    }
    &__lead {
      width: clamp(18.75rem, 12.41rem + 31.71vw, 35rem);
      font-weight: var(--normal);
      font-size: var(--step--3);
      line-height: var(--step-0);
      color: #5c617c; // grey
    }
  }
  .private-beta {
    background-color: #e9ebf4;
    padding: 0.5rem;
    padding-inline: 1rem;
    width: fit-content;
    color: #b1b3be;
    text-transform: uppercase;
    font-size: calc(var(--step--5) - 1.56px);
    border-radius: var(--step--4);
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: var(--step--3);
    align-items: center;
    justify-content: center;
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
        80deg,
        rgb(122, 111, 251, 0.8) -1%,
        rgb(255, 84, 103, 0.8) 88%,
        rgb(253, 190, 4, 0.8) 100%
      );
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: calc(var(--step-0) - 2px);
      backdrop-filter: blur(16px);

      :hover {
        filter: blur(16px);
      }
    }
    &__early-access {
      // purple
      // pink
      // yellow
      background: linear-gradient(
        80deg,
        var(--purple) -1%,
        var(--pink) 88%,
        var(--yellow) 100%
      );
      background-size: 110% 110%;

      color: #ffffff; // white

      backdrop-filter: blur(16px);
      &:hover {
        box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
        -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
        -moz-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
      }
    }
  }
}

@media (min-width: 980px) {
  main {
    height: 95vh;
  }
}
@media (max-width: 600px) {
  main {
    margin-bottom: calc(-1.5 * var(--step-7));
  }
}
@media (max-height: 545px) {
  main {
    margin-top: var(--step-1);
  }
}
</style>
