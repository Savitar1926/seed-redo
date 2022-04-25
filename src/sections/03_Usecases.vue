<template>
  <div class="usecase-parent limiter-width">
    <div class="section section_left">
      <div class="container">
        <div class="col-1-left">
          <div class="section-title section__title usecase-animate">
            <h1>Animations for all scenarios</h1>
            <button class="full">
              Start with Templates
              <icon name="arrow" class="arrow" />
            </button>
          </div>
          <div
            class="
              usecase-hero usecase-animate
              card card--shadow
              button-relative
            "
          >
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title"> Hero Animation </span>
                <span class="usecase-wrap usecase-filesize"> 33 KB </span>
              </div>
            </div>
            <div
              class="usecase-lottie"
              style="overflow: hidden; position: relative"
            >
              <div style="width: 100%; height: 100%">
                <lottie-animation
                  ref="hero"
                  style="height: 100%"
                  :animationData="require('@/assets/New Lottie.json')"
                  :loop="true"
                  :auto-play="false"
                />
              </div>
            </div>

            <button
              onclick="window.open('https://lottielab.io/users/sign_up').focus();"
            >
              Open in Editor
            </button>
            <!-- Usecase Content  -->
          </div>
        </div>
      </div>
    </div>
    <div class="section section_right">
      <div class="container">
        <div class="col-1">
          <div
            v-show="!mobile"
            class="
              usecase-phone usecase-animate
              card card--shadow
              button-relative
            "
          >
            <button
              onclick="window.open('https://lottielab.io/users/sign_up').focus();"
            >
              Open in Editor
            </button>
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  Onboarding Animation
                </span>
                <span class="usecase-wrap usecase-filesize"> 14 KB </span>
              </div>
            </div>
            <!-- <div
              class="usecase-lottie"
              style="overflow: hidden; position: relative"
            >
              <div style="width: 100%; height: 100%">
                <lottie-animation
                  ref="onboarding"
                  style="height: 100%"
                  :animationData="require('@/assets/Phone.json')"
                  :loop="true"
                  :auto-play="false"
                />
              </div>
            </div>  -->
            <!-- Usecase Content  -->
          </div>
        </div>
        <div class="col-2">
          <div class="container-cases">
            <div
              class="
                usecase-loading_1
                usecase-animate
                card card--shadow
                button-relative
              "
            >
              <!-- Usecase Content  -->
              <div class="usecase-header">
                <icon name="edit" class="arrow" />
                <div class="usecase-title-container">
                  <span class="usecase-wrap usecase-title">
                    Loading Animation
                  </span>
                  <span class="usecase-wrap usecase-filesize"> 32 KB </span>
                </div>
              </div>
              <div
                class="usecase-lottie"
                style="
                  overflow: hidden;
                  position: relative;
                  height: fit-content;
                "
              >
                <div style="width: 100%">
                  <lottie-animation
                    ref="loadingOne"
                    style="width: 100%"
                    :animationData="require('@/assets/Loading.json')"
                    :loop="true"
                    :auto-play="false"
                  />
                </div>
              </div>
              <!-- Usecase Content  -->

              <button
                onclick="window.open('https://lottielab.io/users/sign_up').focus();"
              >
                Open in Editor
              </button>
            </div>
            <div
              v-show="!mobile"
              class="
                usecase-loading_2
                usecase-animate
                card card--shadow
                button-relative
              "
            >
              <!-- Usecase Content  -->
              <div class="usecase-header">
                <icon name="edit" class="arrow" />
                <div class="usecase-title-container">
                  <span class="usecase-wrap usecase-title">
                    Loading Animation
                  </span>
                  <span class="usecase-wrap usecase-filesize"> 48 KB </span>
                </div>
              </div>
              <div
                class="usecase-lottie"
                style="overflow: hidden; position: relative"
              >
                <div style="width: 100%; height: 100%">
                  <lottie-animation
                    ref="loadingTwo"
                    style="height: 100%"
                    :animationData="require('@/assets/Loading_2.json')"
                    :loop="true"
                    :auto-play="false"
                  />
                </div>
              </div>
              <!-- Usecase Content  -->

              <button
                onclick="window.open('https://lottielab.io/users/sign_up').focus();"
              >
                Open in Editor
              </button>
            </div>
          </div>
          <div
            class="
              usecase-headphones usecase-animate
              card card--shadow
              button-relative
            "
          >
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  Product Animation
                </span>
                <span class="usecase-wrap usecase-filesize"> 64 KB </span>
              </div>
            </div>
            <div
              class="usecase-lottie"
              style="overflow: hidden; position: relative"
            >
              <div style="width: 100%; height: 100%">
                <lottie-animation
                  ref="product"
                  style="height: 100%"
                  :animationData="require('@/assets/Product.json')"
                  :loop="true"
                  :auto-play="false"
                />
              </div>
            </div>
            <!-- Usecase Content  -->
            <button
              onclick="window.open('https://lottielab.io/users/sign_up').focus();"
            >
              Open in Editor
            </button>
          </div>
          <div
            v-show="!mobile"
            class="
              usecase-notification usecase-animate
              card card--shadow
              button-relative
            "
          >
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  Notification Animation
                </span>
                <span class="usecase-wrap usecase-filesize"> 24 KB </span>
              </div>
            </div>
            <div
              class="usecase-lottie"
              style="overflow: hidden; position: relative"
            >
              <div style="width: 100%; height: 100%">
                <lottie-animation
                  ref="notification"
                  style="height: 100%"
                  :animationData="require('@/assets/Notifications.json')"
                  :loop="true"
                  :auto-play="false"
                />
              </div>
            </div>
            <!-- Usecase Content  -->
            <button
              onclick="window.open('https://lottielab.io/users/sign_up').focus();"
            >
              Open in Editor
            </button>
          </div>
        </div>
      </div>
      <intersection-observer
        style="position: aboslute; bottom: -50rem"
        id="pass-usecases"
      />
    </div>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";
import LottieAnimation from "lottie-web-vue";
import IntersectionObserver from "@/components/IntersectionObserver";
import checkScreen from "@/mixins/checkScreen";

export default {
  name: "Usecases",
  data() {
    return {
      passIntersectingUsecases: false,
    };
  },
  mixins: [checkScreen],
  components: {
    LottieAnimation,
    IntersectionObserver,
    icon,
  },
  mounted() {
    this.usecaseIntersection();
  },
  methods: {
    usecaseIntersection() {
      const el = document.querySelector("#pass-usecases");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            // pause animation
            this.$refs.hero.pause();
            // this.$refs.onboarding.pause();
            this.$refs.loadingOne.pause();
            this.$refs.loadingTwo.pause();
            this.$refs.product.pause();
            this.$refs.notification.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            this.$refs.hero.play();
            // this.$refs.onboarding.play();
            this.$refs.loadingOne.play();
            this.$refs.loadingTwo.play();
            this.$refs.product.play();
            this.$refs.notification.play();
          } else {
            // pause animation
            this.$refs.hero.pause();
            // this.$refs.onboarding.pause();
            this.$refs.loadingOne.pause();
            this.$refs.loadingTwo.pause();
            this.$refs.product.pause();
            this.$refs.notification.pause();
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
.usecase-parent {
  height: 100%;
  gap: var(--step-0);
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding-inline: var(--step-4);

  .button-relative {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: solid 1px #e9ebf4;
    z-index: 901;

    button {
      background: rgba(238, 239, 243, 0.2);
      box-shadow: -12px 12px 59.0507px rgba(92, 97, 124, 0.02);
      backdrop-filter: blur(16px);
      padding-block: var(--step--4);
      padding-inline: var(--step--2);
      position: absolute;
      bottom: 10px;
      width: fit-content;
      margin: calc(var(--step--4) * 1);
      border-radius: var(--step--4);
      transform: translateY(calc(var(--step-0) * 4)) scale(1);
      border: solid 1px var(--purple);
      color: var(--purple);
    }

    &:hover {
      border: solid 1px var(--purple);
      button {
        transform: translateY(calc(var(--step-2)) scale(1));
        &:hover,
        &:focus-visible {
          transform: scale(0.95);
        }
      }
    }
  }
  .card {
    background: rgba(240, 242, 248, 0.9); // card transparent
    backdrop-filter: blur(16px);
    padding: 16px !important;
    height: fit-content !important;
  }
  .usecase-header {
    display: flex;
    gap: var(--step--2);
    align-items: center;
    .usecase-title {
      color: var(--purple); // purple
      font-weight: var(--semi-bold);
    }
    .usecase-filesize {
      color: var(--purple); // purple
      font-size: var(--step--5);
    }
    .usecase-title-container {
      display: flex;
      flex-direction: column;

      .usecase-wrap {
        text-overflow: ellipsis;
        width: inherit;
      }
    }
  }
  .usecase-lottie {
    height: 100%;
    width: 100%;
    border-radius: var(--step-0);
    background: white; // white
  }

  .section {
    &_left {
      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--step-0);
        grid-auto-flow: row;
        grid-template-areas: "col-1-left";
        height: 100%;
      }

      .col-1-left {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--step-0);
        grid-auto-flow: row;
        grid-template-areas:
          "section-title"
          "usecase-hero";
        align-content: end;
        grid-area: col-1-left;

        .section-title {
          grid-area: section-title;
          button {
            gap: var(--step--4);
            align-items: center;
            height: max-content;
            color: var(--purple); // purple

            .arrow {
              display: flex;
              stroke: var(--purple); // purple
            }
          }
        }

        .usecase-hero {
          grid-area: usecase-hero;
        }
      }
    }
    &_right {
      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-columns: 1fr;
        gap: var(--step-0) var(--step-0);
        grid-auto-flow: row;
        height: 100%;
      }

      .col-1 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 0px var(--step-0);
        grid-auto-flow: row;
        grid-template-areas: "usecase-phone";
        align-content: end;
      }

      .usecase-phone {
        grid-area: usecase-phone;
        backdrop-filter: blur(0px) !important;
        background: none !important;
      }

      .col-2 {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--step-0) var(--step-0);
        grid-auto-flow: row;
        grid-template-areas:
          "usecase-headphones"
          "usecase-loading_1";
        // "usecase-loading_2";
        // "usecase-notification";
      }

      .usecase-loading_1 {
        grid-area: usecase-loading_1;
        margin-bottom: var(--step-0);
      }

      .usecase-loading_2 {
        grid-area: usecase-loading_2;
      }

      .usecase-headphones {
        grid-area: usecase-headphones;
      }

      .usecase-notification {
        grid-area: usecase-notification;
      }
    }
  }
}

@media (min-width: 980px) {
  .usecase-parent {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: var(--step-0);
    margin-inline: auto;
    padding-inline: 0rem;

    .card {
      background: rgba(240, 242, 248, 0.9); // card transparent
      backdrop-filter: blur(16px);
      padding: 16px !important;
      height: 100% !important;
    }

    .section {
      &_left {
        width: 50%;
        padding-left: var(--step-4);

        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 710px;
          gap: 0px 0px;
          grid-auto-flow: row;
          grid-template-areas:
            "."
            "col-1-left";
          height: 100%;
        }

        .col-1-left {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 544px;
          gap: var(--step-0) var(--step-0);
          grid-auto-flow: row;
          grid-template-areas:
            "section-title"
            "usecase-hero";
          align-content: end;
          grid-area: col-1-left;

          .section-title {
            grid-area: section-title;
            button {
              gap: var(--step--4);
              align-items: center;
              height: max-content;
              color: var(--purple); // purple

              .arrow {
                display: flex;
                stroke: var(--purple); // purple
              }
            }
          }
        }
      }
      &_right {
        width: 50%;

        .container {
          display: grid;
          grid-template-columns: 288px 1.2fr;
          grid-auto-columns: 1fr;
          grid-auto-rows: 1fr;
          gap: var(--step-0) var(--step-0);
          grid-auto-flow: row;
          height: 100%;
        }

        .col-1 {
          display: grid;
          grid-template-columns: 288px;
          grid-template-rows: 1fr 710px;
          gap: 0px var(--step-0);
          grid-auto-flow: row;
          grid-template-areas:
            "."
            "usecase-phone";
          grid-area: 1 / 1 / 2 / 2;
          align-content: end;
        }

        .col-2 {
          display: grid;
          grid-template-columns: 323px 1fr;
          grid-template-rows: 330px 295px 252px;
          gap: var(--step-0) var(--step-0);
          grid-auto-flow: row;
          grid-template-areas:
            "usecase-headphones ."
            "container-cases ."
            "usecase-notification .";
        }

        .container-cases {
          display: grid;
          grid-template-columns: 232px 296px;
          grid-template-rows: auto;
          gap: 0px var(--step-0);
          grid-auto-flow: row;
          grid-template-areas: "usecase-loading_1 usecase-loading_2";
          grid-area: container-cases;

          .card:first-child {
            background: rgba(240, 242, 248, 0.9); // card transparent
            backdrop-filter: blur(16px);
            padding: 16px !important;
            height: fit-content !important;
          }
        }

        .usecase-loading_1 {
          grid-area: usecase-loading_1;
          margin-bottom: 0rem;
        }
      }
    }
  }
}
</style>