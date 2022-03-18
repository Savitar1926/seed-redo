<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-display: swap;
}

// Variables

:root {
  --step--5: clamp(0.6rem, 0.58rem + 0.1vw, 0.66rem);
  --step--4: clamp(0.72rem, 0.69rem + 0.19vw, 0.82rem);
  --step--3: clamp(0.87rem, 0.81rem + 0.3vw, 1.02rem);
  --step--2: clamp(1.04rem, 0.95rem + 0.46vw, 1.28rem);
  --step--1: clamp(1.25rem, 1.11rem + 0.68vw, 1.6rem);
  --step-0: clamp(1.5rem, 1.3rem + 0.98vw, 2rem);
  --step-1: clamp(1.8rem, 1.53rem + 1.37vw, 2.5rem);
  --step-2: clamp(2.16rem, 1.78rem + 1.88vw, 3.13rem);
  --step-3: clamp(2.59rem, 2.08rem + 2.56vw, 3.91rem);
  --step-4: clamp(3.11rem, 2.42rem + 3.46vw, 4.88rem);
  --step-5: clamp(3.73rem, 2.81rem + 4.63vw, 6.1rem);
  --step-6: clamp(4.48rem, 3.25rem + 6.15vw, 7.63rem);
  --step-7: clamp(5.38rem, 3.75rem + 8.12vw, 9.54rem);

  // Font
  --architects_daughter: "Architects Daughter", cursive;

  // Colours
  --primary: #f0f2f8;
  --dark: #2b2b2b;
  --dark-sub: #9195ad;
  --dark-blue: #00d3ec;
  --blue: #607ef4;
  --teal: #20ddae;
  --purple: #a160f1;
  --blue-hover: #f3f5fd;
  --details: #9b9b9b;

  // Stroke Colour
  --light-stroke: #e1e4f0;

  // Font Weights
  --normal: 400;
  --medium: 500;
  --semi-bold: 600;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);
  min-height: 100vh;
  transition: all 200ms ease-out;

  .section__title {
    display: flex;
    flex-direction: column;
    gap: var(--step-0);
    h1 {
      font-size: var(--step-2);
      line-height: var(--step-3);
    }

    span {
      font-size: var(--step--3);
    }
    button {
      display: flex;
      font-weight: var(--semi-bold);
      font-size: var(--step-0);
      line-height: var(--step-0);
      border: none;
      background: none;
      text-align: start;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--step--4);
    height: 100%;
    width: 100%;
    border-radius: var(--step-0);
    padding: var(--step-0);
    transition: all 200ms ease-out;

    &--shadow {
      box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
      -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
      -moz-box-shadow: 34px 16px 32px rgba(207, 208, 235, 0.32);
    }

    &--shadow-dark {
      box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
      -webkit-box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
      -moz-box-shadow: 0px 16px 32px 8px rgba(43, 43, 43, 0.5);
    }

    &--light {
      background: white;
    }
    &--dark {
      border: rgba(43, 43, 43, 0.5) solid 14px;
      background: rgba(43, 43, 43, 0.8);
    }
    &__header {
      display: flex;
      gap: var(--step-1);
      color: var(--dark-sub);
    }

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: var(--step--3);
      line-height: var(--step-0);
      font-weight: var(--semi-bold);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__sub {
      font-size: var(--step--3);
      line-height: var(--step-0);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

a {
  text-decoration: none;
}
button {
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  background: none;
  border: none;
  transition: all 200ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(0.95);
  }

  &:active {
    transform: scale(0.9);
  }
}

.full {
  width: max-content;
  height: max-content;
}

.position-lift {
  position: relative;
  z-index: 2;
}

@media (min-width: 1200px) {
  .limiter {
    max-width: 1440px;
    max-height: 890px;
  }
  .limiter-width {
    max-width: 1440px;
  }
}
</style>
