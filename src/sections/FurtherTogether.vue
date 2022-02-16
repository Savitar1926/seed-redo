<template>
  <div class="further-together limiter-width position-lift">
    <section class="title">
      <div class="section__title">
        <h1>
          Go further, <br />
          <h1 style="color: var(--teal)" id="title-highlight">together</h1>
        </h1>
        <span>
          Collaborate on files together and break out of the After Effects silo. Keep
          designers, developers and product managers on the same page. No more emailing
          folders or sharing files on G-Drive.</span
        >
        <button class="full">
          Get Started
          <icon name="arrow" class="arrow" />
        </button>
      </div>
    </section>
    <section class="split__section">
      <div class="container">
        <div
          class="col__one"
          style="
            background: rgba(43, 43, 43, 0.8);
            aspect-ratio: 16/9;
            align-self: center;
            border-radius: var(--step--2);
            border: rgba(43, 43, 43, 0.5) solid 10px;
            transform: scale(1.5);
            transform-origin: right;
          "
        >
          <div>
            <lottie-animation
              :animationData="require('@/assets/test-animation.json')"
              :loop="true"
              ref="anim"
            />
          </div>
        </div>
        <div class="col__two">
          <div class="sec__options card card--dark">
            <details open data-lottie="collabLottie">
              <summary>
                Collaborate <br />
                real-time.
              </summary>
              <p>New to product animations or know your way around.</p>
            </details>
            <hr />
            <details data-lottie="teamLottie">
              <summary>Keep your team on <br />the same page</summary>
              <p>New to product animations or know your way around.</p>
            </details>
            <hr />
            <details data-lottie="sharedLottie">
              <summary>
                Have a shared<br />
                motion language.
              </summary>
              <p>New to product animations or know your way around.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";
import LottieAnimation from "lottie-web-vue";

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
        if (prevLottie.match("collabLottie")) console.log("collab");
        if (prevLottie.match("teamLottie")) console.log("team");
        if (prevLottie.match("sharedLottie")) console.log("shared");
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.further-together {
  margin-inline: auto;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
  display: flex;
  flex-direction: column;
  gap: var(--step-3);

  .title {
    .section__title {
      color: var(--primary);

      #title-highlight {
        transition: all 300ms ease-in-out;
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
        color: var(--teal);

        .arrow {
          display: flex;
          stroke: var(--teal);
        }
      }
    }
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: var(--step-7);
    grid-auto-flow: row;
    justify-items: stretch;
    grid-template-areas:
      "col__one"
      "col__two";
    padding-block: var(--step-5);
  }

  .col__one {
    grid-area: col__one;
    display: flex;
    align-items: center;

    > div {
      height: max-content;

      .profile__animation {
        border: rgba(43, 43, 43, 0.5) solid 14px;
        background: rgba(43, 43, 43, 0.8);
        border-radius: var(--step-0);
      }
    }
  }

  .col__two {
    grid-area: col__two;
    width: 100%;
    margin-top: var(--step-0);

    .sec__options {
      border-radius: var(--step-0);
      padding: var(--step--3);
      display: flex;
      justify-content: center;

      hr {
        border: 1pt solid rgba(43, 43, 43, 0.2);
      }
      details {
        width: 100%;
        transition: all 200ms ease-out;

        summary {
          color: white;
          font-size: var(--step--3);
          line-height: var(--step--1);
          font-weight: var(--semi-bold);
          padding: var(--step--2);
          border-radius: var(--step--2);
          list-style: none;
          cursor: pointer;
          transition: all 75ms ease-out;

          &:hover {
            box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
            -webkit-box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
            -moz-box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
          }
          &:active {
            transform: scale(0.96);
          }
        }

        p {
          color: white;
          font-size: var(--step--4);
          line-height: var(--step--2);
          padding-left: var(--step--2);
        }
      }
    }
  }
}

details[open] {
  summary {
    color: var(--teal) !important;
    background: rgba(43, 43, 43, 0.8);
    border-radius: var(--step-0);
    margin-block: var(--step--3);
  }
}
@media (min-width: 1180px) {
  .further-together {
    .container {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      grid-template-areas: "col__one col__two";
    }

    .col__two {
      grid-area: col__two;
      width: 100%;
      padding-right: 10rem;
      .sec__options {
        width: 50%;
      }
    }
  }
}
</style>
