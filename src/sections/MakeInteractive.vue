<template>
  <div class="panel limiter">
    <div class="container position-lift">
      <div class="col__one">
        <div class="section__title">
          <div class="section__title">
            <h1>Make it interactive</h1>
            <span>
              <strong>Coming soon.</strong>
              Collaborate on files together and break out of the After Effects
              silo. Keep designers, developers and product managers on the same
              page. No more emailing folders or sharing files on G-Drive.</span
            >
            <h2>Coming soon</h2>
          </div>
        </div>
        <div class="card__one card__interactive">
          <div
            class="card box box__ditch"
            style="background: rgba(0, 0, 0, 0.2)"
          >
            <h2>State based animations</h2>
            <span
              >We keep it simple, so you’re free to create powerful results - no
              After Effects qualifications needed.</span
            >
          </div>
        </div>
        <div class="card__two card__interactive">
          <div
            class="card box box__ditch"
            style="background: rgba(0, 0, 0, 0.2)"
          >
            <h2>State based animations</h2>
            <span
              >We keep it simple, so you’re free to create powerful results - no
              After Effects qualifications needed.</span
            >
          </div>
        </div>
      </div>
      <div class="col__two">
        <div class="usecase__one">
          <div class="usecase__first card card--shadow-dark usecase--ease">
            <div class="card__header">
              <div class="card__info">
                <span class="card__title">E-Commerce Animation</span>
                <span class="card__sub">Edited 6 hours ago</span>
              </div>
            </div>
            <div class="sample_container">
              <lottie-interactive
                path="https://assets4.lottiefiles.com/packages/lf20_wesmb2eu.json"
                interaction="click"
                style="cursor: pointer; width: 100%"
              ></lottie-interactive>
            </div>
          </div>
        </div>
        <div class="usecase__two">
          <div class="usecase__first card card--shadow-dark usecase--ease">
            <div class="card__header">
              <div class="card__info">
                <span class="card__title">E-Commerce Animation</span>
                <span class="card__sub">Edited 6 hours ago</span>
              </div>
            </div>
            <div class="sample_container">
              <lottie-interactive
                path="https://assets4.lottiefiles.com/packages/lf20_wesmb2eu.json"
                interaction="switch"
                style="cursor: pointer; width: 100%"
              ></lottie-interactive>
            </div>
          </div>
        </div>
      </div>
      <div class="container-coming-soon">
        <div class="coming-soon">Coming Soon</div>
      </div>
    </div>
  </div>
</template>

<script>
import { LottieInteractive } from "lottie-interactive";
export default {
  name: "SimpleForEveryone",
  data() {
    return {
      controller: null,
      tween: null,
      scene: null,
    };
  },
  components: {
    LottieInteractive,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  background: linear-gradient(
      61.31deg,
      rgba(254, 184, 42, 0.5) -58.21%,
      rgba(238, 49, 131, 0.5) 72.74%,
      rgba(124, 113, 253, 0) 105.16%
    ),
    linear-gradient(
      243.29deg,
      rgba(254, 184, 42, 0) -7.96%,
      rgba(238, 49, 131, 0.5) 35.93%,
      rgba(124, 113, 253, 0) 68.85%
    );
  // border: 16px solid rgba(43, 43, 43, 0.8);
  backdrop-filter: blur(16px);
  border-radius: 40px;
  z-index: 2;
  position: relative;
  margin-inline: auto;
  .container-coming-soon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    .coming-soon {
      font-size: 300px;
      position: absolute;
      z-index: -1;
      color: rgba(255, 255, 255, 0.05);
      font-weight: bold;
      margin-left: -64px;
      line-height: 0.8;
      bottom: 0;
      margin-bottom: 2rem;
    }
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 32px 32px;
  grid-auto-flow: row;
  justify-items: stretch;
  grid-template-areas:
    "col__one"
    "col__two";
  padding: var(--step-0);
  height: max-content;
  color: var(--primary);
  border-radius: inherit;
  // border: 8px solid rgba(43, 43, 43, 0.8);

  .card {
    justify-content: center;
    &__header {
      color: var(--primary) !important;
    }

    &--dark {
      // border: none !important;
      backdrop-filter: blur(16px) !important;
    }
  }

  .col__one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    gap: 32px 32px;
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
      h2 {
        font-size: var(--step--1);
      }
      span {
        font-size: var(--step--4);
        line-height: var(--step-0);
      }
    }
  }
}

.col__two {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 32px;
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
  align-items: flex-start;
  margin-top: -75px;
}

.usecase__two {
  grid-area: usecase__two;
  margin-bottom: -75px;
}

@media (min-width: 980px) {
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
      gap: 32px 32px;
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
    gap: 32px;
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
    gap: 32px 32px;
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
      gap: 32px 32px;
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
