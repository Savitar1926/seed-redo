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
          Keep designers, developers and product managers on the same page. No
          more emailing folders or sharing files on G-Drive.</span
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
          <p>New to product animations or know your way around.</p>
        </details>
        <details data-lottie="sharedLottie">
          <summary>
            Have a shared<br />
            motion language.
          </summary>
          <p>New to product animations or know your way around.</p>
        </details>
      </div>
    </div>
    <div class="section section-right">
      <div class="lottie-container">
        <lottie-animation
          :animationData="require('@/assets/test-animation.json')"
          :loop="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";
import LottieAnimation from "lottie-web-vue";
import { gsap } from "gsap";

export default {
  name: "FurtherTogether",
  data() {
    return {
      collabOpen: true,
    };
  },
  components: {
    icon,
    LottieAnimation,
  },
  mounted() {
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", (event) => {
        if (targetDetail.hasAttribute("open")) return event.preventDefault();
        details.forEach((detail) => {
          if (detail !== targetDetail) return detail.removeAttribute("open");
        });
        const prevLottie = targetDetail.getAttribute("data-lottie");
        if (prevLottie.match("collabLottie")) {
          gsap.from(".lottie-container", {
            x: 1500,
            duration: 0.5,
            ease: "expo.out",
          });
          console.log("collab");
        }
        if (prevLottie.match("teamLottie")) {
          gsap.from(".lottie-container", {
            x: 1500,
            duration: 0.5,
            ease: "expo.out",
          });
          console.log("team");
        }
        if (prevLottie.match("sharedLottie")) {
          gsap.from(".lottie-container", {
            x: 1500,
            duration: 0.5,
            ease: "expo.out",
          });
          console.log("shared");
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.further-together {
  display: flex;
  gap: 80px;
  z-index: 2;
  margin: auto;

  .section {
    &-left {
      width: 65%;
      padding-left: var(--step-4);
      display: flex;
      flex-direction: column;
      gap: 32px;

      .section__title {
        color: var(--primary);

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
          color: #ffb92a;

          .arrow {
            display: flex;
            stroke: #ffb92a;
          }
        }
      }

      .sec__options {
        border-radius: var(--step-0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 80%;
        min-width: 360px;
        width: 360px;
        gap: 16px;

        details {
          transition: all 120ms ease-in-out;
          border-radius: var(--step--2);
          &:hover {
            box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
            -webkit-box-shadow: 8.28684px 24.8605px 33.1474px
              rgba(31, 31, 31, 0.5);
            -moz-box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
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
            color: white;
            font-size: var(--step--4);
            line-height: var(--step--2);
          }
        }

        details[open] {
          box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
          -webkit-box-shadow: 8.28684px 24.8605px 33.1474px
            rgba(31, 31, 31, 0.5);
          -moz-box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
          summary {
            color: white;
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

    &-right {
      padding-top: 130px;
      .lottie-container {
        border: rgba(43, 43, 43, 0.5) solid 14px;
        background: rgba(43, 43, 43, 0.8);
        backdrop-filter: blur(16px);
        border-radius: var(--step-0);
        margin-right: -400px;
        box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
      }
    }
  }
}
</style>
