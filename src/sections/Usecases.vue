<template>
  <div class="usecase limiter position-lift">
    <div class="usecase__title">
      <div class="section__title">
        <h1>Animations for all scenarios</h1>
        <button class="full">
          Get Started
          <icon name="arrow" class="arrow" />
        </button>
      </div>
    </div>
    <div class="usecase__first card card--light usecase--ease">
      <div class="card__header">
        <div class="card__info">
          <span class="card__title">E-Commerce Animation</span>
          <span class="card__sub">14 kB</span>
        </div>
      </div>
      <div class="sample_container">
        <div class="sample__action">
          <button>Hello</button>
        </div>

        <lottie-vue-player
          :src="`https://assets4.lottiefiles.com/packages/lf20_jneva4pr.json`"
        />
      </div>
    </div>
    <div class="usecase_second card card--light usecase--ease">
      <div class="card__header">
        <div class="card__info">
          <span class="card__title">E-Commerce Animation</span>
          <span class="card__sub">14 kB</span>
        </div>
      </div>
      <div class="sample_container">
        <div class="sample__action">
          <button>Hello</button>
        </div>

        <lottie-vue-player
          :src="`https://assets4.lottiefiles.com/packages/lf20_jneva4pr.json`"
        />
      </div>
    </div>
    <div class="usecase__third card card--light usecase--ease">
      <div class="card__header">
        <div class="card__info">
          <span class="card__title">E-Commerce Animation</span>
          <span class="card__sub">14 kB</span>
        </div>
      </div>

      <div class="sample_container">
        <div class="sample__action">
          <button>Hello</button>
        </div>

        <lottie-vue-player
          :src="`https://assets4.lottiefiles.com/packages/lf20_jneva4pr.json`"
        />
      </div>
    </div>
    <div class="usecase__fourth card card--light usecase--ease">
      <div class="card__header">
        <div class="card__info">
          <span class="card__title">E-Commerce Animation</span>
          <span class="card__sub">14 kB</span>
        </div>
      </div>
      <div class="sample_container">
        <div class="sample__action">
          <button>Hello</button>
        </div>

        <lottie-vue-player
          :src="`https://assets4.lottiefiles.com/packages/lf20_jneva4pr.json`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";

export default {
  components: {
    icon,
  },
};
</script>

<style lang="scss" scoped>
.usecase {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: var(--step-0);
  grid-auto-flow: row dense;
  grid-template-areas:
    "usecase__title"
    "usecase__first "
    "usecase_second "
    "usecase__third"
    "usecase__fourth";
  margin-inline: auto;
  height: 100%;
  // transform: scale(0.88);
  // transform-origin: top;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);

  transition: all 75ms ease-out;
}

.usecase__title {
  grid-area: usecase__title;

  .section__title {
    button {
      gap: var(--step--4);
      align-items: center;
      height: max-content;
      color: var(--blue);

      .arrow {
        display: flex;
        stroke: var(--blue);
      }
    }
  }
}

.usecase__first {
  grid-area: usecase__first;
  position: relative;
  // cursor: url("https://assets.digitalocean.com/labs/doicons/general-purpose-droplet.svg?cb=1"),
  //   url("https://assets.digitalocean.com/labs/doicons/general-purpose-droplet.svg?cb=1"),
  //   move;
}

.usecase_second {
  grid-area: usecase_second;
}
.usecase__third {
  grid-area: usecase__third;
}

.usecase__fourth {
  grid-area: usecase__fourth;
}

.usecase--ease {
  box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
  -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
  -moz-box-shadow: 34px 16px 32px rgba(207, 208, 235, 0.32);
  transition: all 75ms ease-out;
}

.sample_container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: var(--step-0);
  overflow: hidden;
  transition: all 200ms ease;

  .sample__action {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 1.4rem;
    border-radius: inherit;
    z-index: 3;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: fit-content;
      background-color: rgba(238, 239, 243, 0.5);
      color: var(--blue);
      padding-inline: var(--step-1);
      padding-block: var(--step--3);
      border-radius: inherit;
      font-size: var(--step--3);
      font-weight: var(--semi-bold);
      line-height: var(--step-0);
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
    }
  }
  .sample {
    z-index: 2;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .usecase {
    grid-template-rows: 0.2fr 0.8fr 1fr 2fr;
    grid-template-areas:
      "usecase__title usecase__title usecase__title"
      "usecase_second usecase__first  usecase__first "
      "usecase_second usecase__first  usecase__first "
      "usecase_second usecase__third usecase__fourth";
    height: 890px;
  }

  .sample_container {
    .sample {
      width: 20%;
    }
    .sample__action {
      button {
        width: 30%;
        transform: translateY(120rem);
        transform-origin: left;
        -webkit-backdrop-filter: blur(16px);
        backdrop-filter: blur(16px);
        border: transparent 0pt solid;

        &:focus-visible,
        &:hover {
          width: 100%;
          border: var(--primary) 2pt solid;
          background: var(--blue);
          color: var(--primary);
        }
      }
    }
  }
  .card {
    gap: 0 !important;
    &:focus-visible,
    &:hover {
      // transform: scale(1.05);
      .card__header {
        color: var(--blue) !important;
      }

      .sample__action {
        button {
          transform: translateY(0);
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .usecase {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "usecase__title usecase_second usecase__third"
      "usecase__first usecase_second usecase__third"
      "usecase__first usecase_second usecase__fourth"
      "usecase__first usecase_second usecase__fourth";
    height: max(890px, 100vh);

    .sample_container {
      .sample {
        width: 45%;
      }
    }
  }
}
</style>
