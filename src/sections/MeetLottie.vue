<template>
  <div class="meet-lottie position-lift limiter">
    <div class="container">
      <div class="col__one">
        <div class="section__title">
          <h1>Meet Lottie</h1>
          <h2>The new standard for motion design</h2>
          <span>
            Lottie is an open-source animation file format that is lighweight,
            high-quality, dynamic and modiefied in real time. Lottie is now used to engage
            consumers and increase conversions by top 500 apps on the App Store.</span
          >
          <button class="full">Learn more</button>
        </div>
      </div>
      <div class="col__two">
        <div class="usecase__first card card--light usecase--ease">
          <div class="sample_container">
            <!-- <lottie-animation
              :animationData="require('@/assets/Pattern_6down.json')"
              :loop="true"
              class="profile__animation"
            /> -->
            <div>
              <h3>351 kB</h3>
              <span>GIF</span>
            </div>
          </div>
        </div>
        <div class="usecase__first card card--light usecase--ease">
          <div class="sample_container">
            <!-- <lottie-animation
              :animationData="require('@/assets/Pattern_6down.json')"
              :loop="true"
              class="profile__animation"
            /> -->
            <h3 style="color: var(--teal)">61 kB</h3>
            <span style="color: var(--teal)">Lottie</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LottieAnimation from "lottie-web-vue";

export default {
  data() {
    return {};
  },
  components: {
    // LottieAnimation,
  },
};
</script>

<style lang="scss" scoped>
.meet-lottie {
  color: var(--primary);
  margin: auto;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
  // height: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
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
        color: var(--teal);
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
        color: var(--teal);
      }
    }
  }

  .col__two {
    grid-area: col__two;
    display: flex;
    gap: 32;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: var(--step-2);
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
