<template>
  <div class="further-together limiter">
    <div class="section section-left">
      <div class="section__title">
        <h1>
          Go further,
          <h1 id="title-highlight">together</h1>
        </h1>
        <span>
          Collaborate on files together and break out of the After Effects silo.
          Keep furtherTogether, developers and product managers on the same
          page. No more emailing folders or sharing files on G-Drive.</span
        >
        <button class="full">
          Get Started
          <icon name="arrow" class="arrow" />
        </button>
      </div>
      <div class="sec__options">
        <details open data-lottie="collabLottie">
          <summary>
            Collaborate <br />
            real-time.
          </summary>
          <p>New to product animations or know your way around.</p>
        </details>
        <details data-lottie="teamLottie">
          <summary>Keep your team on <br />the same page</summary>
          <p>Share comments and get feedback on every element across time.</p>
        </details>
        <details data-lottie="sharedLottie">
          <summary>
            Have a shared<br />
            motion language.
          </summary>
          <p>
            Keep your lottie animations and shared components organised across
            projects
          </p>
        </details>
      </div>
    </div>
    <div class="section section-right right-panel">
      <div class="lottie-container">
        <lottie-animation
          v-show="this.collab"
          ref="furtherTogether"
          :auto-play="true"
          :animationData="require('@/assets/05_furtherTogether/Collab.json')"
          :loop="true"
        />
        <lottie-animation
          v-show="this.comment"
          ref="furtherTogether"
          :auto-play="true"
          :animationData="
            require('@/assets/05_furtherTogether/test-animation.json')
          "
          :loop="true"
        />
        <lottie-animation
          v-show="this.dash"
          ref="furtherTogether"
          :auto-play="true"
          :animationData="require('@/assets/05_furtherTogether/Collab.json')"
          :loop="true"
        />
      </div>
    </div>
    <intersection-observer
      id="pass-further"
      style="position: absolute; bottom: -20rem"
    />
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";
import LottieAnimation from "lottie-web-vue";
import { gsap } from "gsap";
import elementSelector from "@/mixins/elementSelector";
import IntersectionObserver from "@/components/IntersectionObserver";

export default {
  name: "FurtherTogether",
  data() {
    return {
      collabOpen: true,
      collab: true,
      comment: false,
      dash: false,
    };
  },
  mixins: [elementSelector],
  components: {
    icon,
    LottieAnimation,
    IntersectionObserver,
  },
  mounted() {
    this.centerIntersection();
    [...this.qsa("details")].forEach((targetDetail) => {
      targetDetail.addEventListener("click", (event) => {
        if (targetDetail.hasAttribute("open")) return event.preventDefault();
        [...this.qsa("details")].forEach((detail) => {
          if (detail !== targetDetail) return detail.removeAttribute("open");
        });
        const prevLottie = targetDetail.getAttribute("data-lottie");
        if (prevLottie.match("collabLottie")) {
          (this.collab = true),
            (this.comment = false),
            (this.dash = false),
            console.log("collab");
          gsap.from(".lottie-container", {
            x: 1550,
            duration: 0.5,
            ease: "expo.out",
          });
        }
        if (prevLottie.match("teamLottie")) {
          gsap.from(".lottie-container", {
            x: 1550,
            duration: 0.5,
            ease: "expo.out",
          });
          (this.collab = false),
            (this.comment = true),
            (this.dash = false),
            console.log("team");
        }
        if (prevLottie.match("sharedLottie")) {
          gsap.from(".lottie-container", {
            x: 1550,
            duration: 0.5,
            ease: "expo.out",
          });
          (this.collab = false),
            (this.comment = false),
            (this.dash = true),
            console.log("shared");
        }
      });
    });
  },
  methods: {
    centerIntersection() {
      const el = document.querySelector("#pass-further");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            // pause animation
            this.$refs.furtherTogether.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            this.$refs.furtherTogether.play();
          } else {
            // pause animation
            this.$refs.furtherTogether.pause();
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(el);
    },
  },
};
</script>

<style lang="scss" scoped>
.further-together {
  display: flex;
  gap: var(--step-5);
  z-index: 2;
  margin: auto;
  flex-direction: column-reverse;
  position: relative;

  .section {
    &-left {
      padding-inline: var(--step-4);
      display: flex;
      flex-direction: column;
      gap: var(--step-0);
      padding-bottom: var(--step-0);

      .section__title {
        color: var(--primary); // primary

        #title-highlight {
          transition: all 580ms ease;
          .spaced {
            letter-spacing: 0rem !important;
          }
        }
        span {
          line-height: var(--step-0);
        }
        button {
          gap: var(--step--4);
          align-items: center;
          height: max-content;
          color: var(--yellow); // yellow

          .arrow {
            display: flex;
            stroke: var(--yellow); // yellow
          }
        }
      }

      .sec__options {
        border-radius: var(--step-0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--step--2);

        details {
          transition: all 120ms ease-in-out;
          border-radius: var(--step--2);
          &:hover {
            box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
            -webkit-box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
            -moz-box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
          }
          &:active {
            transform: scale(0.96);
          }

          summary {
            color: rgba(255, 255, 255, 0.5);
            font-size: var(--step--3);
            line-height: var(--step--1);
            font-weight: var(--semi-bold);
            padding: var(--step--2);
            list-style: none;
            cursor: pointer;
            background: rgba(0, 0, 0, 0.25);
            border-radius: var(--step--2);
          }

          p {
            color: white; // white
            font-size: var(--step--4);
            line-height: var(--step--2);
          }
        }

        details[open] {
          box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
          -webkit-box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
          -moz-box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
          summary {
            color: white; // white
            background: rgba(0, 0, 0, 0.8);
            border-radius: var(--step--2) var(--step--2) 0 0;
          }

          p {
            background: rgba(0, 0, 0, 0.5);
            padding: var(--step-0);
            border-radius: 0 0 var(--step--2) var(--step--2);
          }
        }
      }
    }
  }
  .right-panel {
    align-self: flex-end;
    padding-inline: var(--step-4);
    .lottie-container {
      border: rgba(43, 43, 43, 0.5) solid 14px;
      background: rgba(43, 43, 43, 0.8);
      backdrop-filter: blur(16px);
      border-radius: var(--step-0);
      margin-right: 0px;
      box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
    }
  }
}
// @media (min-width: 980px) {
//   .further-together {
//     display: flex;
//     flex-direction: row;

//     .section {
//       &-left {
//         width: 80%;
//       }
//       .sec__options {
//         max-width: 80%;
//         min-width: 360px;
//         width: 360px;
//       }
//     }

//     &-right {
//       align-self: flex-end;
//       .lottie-container {
//         border: rgba(43, 43, 43, 0.5) solid 14px;
//         background: rgba(43, 43, 43, 0.8);
//         backdrop-filter: blur(16px);
//         border-radius: var(--step-0);
//         margin-right: -400px;
//         box-shadow: 8px 24px 32px rgba(31, 31, 31, 0.5);
//       }
//     }
//   }
// }
@media (min-width: 980px) {
  .further-together {
    display: flex;
    flex-direction: row;

    .section {
      &-left {
        width: 80%;
        padding-bottom: var(--step-0);
        .sec__options {
          max-width: 80%;
          min-width: 360px;
          width: 360px;
        }
      }
    }
    .right-panel {
      align-self: flex-end;
      padding-inline: 0px;

      .lottie-container {
        margin-right: -400px;
      }
    }
  }
}
</style>
