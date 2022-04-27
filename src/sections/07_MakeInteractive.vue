<template>
  <div class="limiter" style="padding-inline: var(--step-4); margin: auto">
    <div class="panel">
      <div class="container position-lift">
        <div class="col__one">
          <div class="section__title">
            <div class="section__title">
              <h1>
                Make it <br />
                interactive
              </h1>
              <span>
                This is one of our favourite ongoing experiments - bringing the
                power of interactive lottie animations into the hands of
                designers, no coding experience necessary.
              </span>
              <h2>Coming soon</h2>
            </div>
          </div>
          <div class="card__one card__interactive">
            <div class="card box box__ditch">
              <h2>Trigger playback from a frame</h2>
              <span
                >Trigger animation playback from a specific frame based on user
                event
              </span>
            </div>
          </div>
          <div class="card__two card__interactive">
            <div class="card box box__ditch">
              <h2>Or Connect multiple lotties.</h2>
              <span
                >We keep it simple, so you’re free to create powerful results -
                no After Effects qualifications needed.</span
              >
            </div>
          </div>
        </div>
        <div class="col__two">
          <div class="usecase__one">
            <div class="usecase__first card card--shadow-dark usecase--ease">
              <div class="card__header">
                <div class="card__info">
                  <span class="card__title">Heart Button</span>
                  <span
                    class="card__sub"
                    style="
                      color: #5a5a5f;
                      font-size: var(--step--4);
                      background: #3c3a3a;
                      border-radius: var(--step--5);
                      padding-inline: var(--step--5);
                      width: fit-content;
                    "
                    >On click</span
                  >
                </div>
              </div>
              <div class="sample_container">
                <Interactive style="transform: scale(1.5)" />
              </div>
            </div>
          </div>
          <div class="usecase__two">
            <!-- <Interactive style="transform: scale(1.3)" /> -->
            <div class="usecase__first card-day usecase--ease">
              <div class="card__header">
                <div class="card__info">
                  <span class="card__title">Day and Night</span>
                  <span
                    class="card__sub"
                    style="
                      color: #5a5a5f;
                      font-size: var(--step--4);
                      background: #3c3a3a;
                      border-radius: var(--step--5);
                      padding-inline: var(--step--5);
                      width: fit-content;
                    "
                    >On mouse move</span
                  >
                </div>
              </div>
              <div class="sample_container">
                <Interactive2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { LottieInteractive } from "lottie-interactive";
import Interactive from "@/components/Interact.vue";
import Interactive2 from "@/components/Interact_2.vue";
export default {
  name: "SimpleForEveryone",
  data: () => ({
    speed: 1,
    elt: {},
    autoplay: true,
    animData: null,
  }),
  mounted() {},
  components: {
    Interactive,
    Interactive2,
    // LottieInteractive,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  background: linear-gradient(
      60deg,
      rgba(254, 184, 42, 0.5) -58%,
      rgba(238, 49, 131, 0.5) 72%,
      rgba(124, 113, 253, 0) 104%
    ),
    linear-gradient(
      242deg,
      rgba(254, 184, 42, 0) -8%,
      rgba(238, 49, 131, 0.5) 36%,
      rgba(124, 113, 253, 0) 68%
    );
  backdrop-filter: blur(16px);
  border-radius: var(--step-1);
  z-index: 2;
  position: relative;
  margin-inline: auto;
  background-size: 150% 110%;
  -webkit-animation: pulseGradient 6s ease infinite;
  -moz-animation: pulseGradient 6s ease infinite;
  animation: pulseGradient 6s ease infinite;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: var(--step-0) var(--step-0);
  grid-auto-flow: row;
  justify-items: stretch;
  grid-template-areas:
    "col__one"
    "col__two";
  padding: var(--step-0);
  height: max-content;
  color: var(--primary);
  border-radius: inherit;

  .card {
    justify-content: center;
    &__header {
      color: var(--primary) !important;
    }

    &--dark {
      backdrop-filter: blur(16px) !important;
    }
  }

  .card-day {
    backdrop-filter: blur(16px);
    background: rgba(43, 43, 43);
    display: flex;
    flex-direction: column;
    gap: var(--step--4);
    width: 100%;
    border-radius: var(--step-0);
    transition: all 200ms ease-out;
    box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
    -webkit-box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
    -moz-box-shadow: 8.28684px 24.8605px 33.1474px rgba(31, 31, 31, 0.5);
    overflow: hidden;

    .card__header {
      padding-inline: var(--step-0);
      padding-top: var(--step-0);
    }

    img {
      border-radius: 0 0 var(--step-0) var(--step-0);
      transform: scale(1.05);
    }
  }

  .col__one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    gap: var(--step-0) var(--step-0);
    grid-auto-flow: row;
    grid-template-areas:
      "section__title section__title"
      "card__one card__one"
      "card__two card__two";
    grid-area: col__one;
    height: 100%;
    align-items: start;

    .card {
      height: max-content !important;
      transition: all 75ms ease;
    }

    .section__title {
      grid-area: section__title;

      span {
        line-height: var(--step-0);
        -webkit-line-clamp: 3;
      }
    }

    .card__one {
      grid-area: card__one;
    }

    .card__two {
      grid-area: card__two;
    }

    .card__interactive {
      .box__ditch {
        background: rgba(0, 0, 0, 0.5);
      }
      h2 {
        font-size: var(--step--2);
      }
      span {
        font-size: var(--step--4);
        line-height: var(--step--1);
      }
    }
  }
}

.col__two {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: var(--step-0);
  grid-auto-flow: row;
  grid-template-areas:
    "usecase__one"
    "usecase__two";
  grid-area: col__two;

  .card {
    height: max-content !important;
    transition: all 75ms ease;
    background: rgba(43, 43, 43) !important;
    backdrop-filter: blur(8px);

    .sample_container {
      .interactive-lottie {
        cursor: pointer;
        width: 100%;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: rgba(43 43 43 / 0.8);
        color: white; // white
        padding-inline: var(--step-1);
        padding-block: var(--step--3);
        border-radius: var(--step-0);
        font-size: var(--step--3);
        font-weight: var(--semi-bold);
        line-height: var(--step-0);
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
      }
    }
    &:focus-visible,
    &:hover {
      .card__header {
        color: white !important;
      }

      .sample__action {
        button {
          transform: translateY(0);
        }
      }
    }
  }
}

@media (min-width: 980px) {
  .usecase__one {
    align-items: flex-start;
    margin-top: -75px;
  }

  .usecase__two {
    grid-area: usecase__two;
    margin-bottom: -75px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: var(--step-0) var(--step-0);
    grid-auto-flow: row;
    justify-items: stretch;
    grid-template-areas: "col__one col__two";
    color: var(--primary);

    .card {
      justify-content: center;
      &__header {
        color: var(--primary) !important;
      }

      &--dark {
        border: none !important;
      }
    }

    .col__one {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr fit-content(100%);
      gap: var(--step-0) var(--step-0);
      grid-auto-flow: row;
      grid-template-areas:
        "section__title section__title"
        "card__one card__two";
      grid-area: col__one;

      .section__title {
        grid-area: section__title;
        span {
          line-height: var(--step-0);
        }
        button {
          color: white;
        }
      }

      .card__one {
        grid-area: card__one;
      }

      .card__two {
        grid-area: card__two;
      }
    }
  }

  .col__two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: var(--step-0);
    grid-auto-flow: row;
    grid-template-areas: "usecase__one usecase__two";
    grid-area: col__two;

    .card {
      height: max-content !important;
      transition: all 75ms ease;

      .sample_container {
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: fit-content;
          background-color: rgba(43 43 43 / 0.8);
          color: white;
          padding-inline: var(--step-1);
          padding-block: var(--step--3);
          border-radius: var(--step-0);
          font-size: var(--step--3);
          font-weight: var(--semi-bold);
          line-height: var(--step-0);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
        }
      }
      &:focus-visible,
      &:hover {
        .card__header {
          color: white !important;
        }

        .sample__action {
          button {
            transform: translateY(0);
          }
        }
      }
    }
  }
  .usecase__one {
    display: flex;
    align-items: flex-start;
    grid-area: usecase__one;
  }

  .usecase__two {
    display: flex;
    align-items: flex-end;
    grid-area: usecase__two;
  }
}

@media (min-width: 1080px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: var(--step-0) var(--step-0);
    grid-auto-flow: row;
    justify-items: stretch;
    grid-template-areas: "col__one col__two";
    color: var(--primary);

    .card {
      justify-content: center;
      &__header {
        color: var(--primary) !important;
      }

      &--dark {
        border: none !important;
      }
    }

    .col__one {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr fit-content(100%);
      gap: var(--step-0) var(--step-0);
      grid-auto-flow: row;
      grid-template-areas:
        "section__title section__title"
        "card__one card__two";
      grid-area: col__one;

      .section__title {
        grid-area: section__title;
        span {
          line-height: var(--step-0);
        }
        button {
          color: white;
        }
      }

      .card__one {
        grid-area: card__one;
      }

      .card__two {
        grid-area: card__two;
      }
    }
  }
}
</style>
