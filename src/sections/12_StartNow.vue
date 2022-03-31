<template>
  <div class="main_startnow position-lift limiter">
    <div class="container">
      <div class="col__one">
        <h1>Supercharge your animation workflow</h1>
        <div class="button">
          <button class="button__early-access animate-lead">
            Get early access
            <icon name="arrow" class="arrow" />
          </button>
        </div>
      </div>
      <div class="col__two">
        <img
          class="starnow-image"
          src="@/assets/10_getStarted/startnow-image.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";

export default {
  name: "StartNow",
  components: {
    icon,
  },
};
</script>

<style lang="scss" scoped>
.main_startnow {
  color: var(--dark);
  padding-block: var(--step-6);
  padding-inline: var(--step-4);
  margin-inline: auto;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: var(--step-0);
    grid-auto-flow: row;
    justify-items: stretch;
    grid-template-areas:
      "col__one"
      "col__two";
    height: 100%;
  }

  .col__one {
    grid-area: col__one;
    display: flex;
    flex-direction: column;
    gap: var(--step-0);
    h1 {
      font-size: var(--step-2);
      color: white; // white
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
          rgb(122, 111, 251, 0.5) -1%,
          rgb(255, 84, 103, 0.5) 88%,
          rgb(253, 190, 4, 0.5) 100%
        );
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: calc(var(--step-0) - 2px);
        backdrop-filter: blur(16px);
      }
      &__early-access {
        // purple
        // pink
        // yellow
        background-image: linear-gradient(
          80deg,
          var(--purple) -1%,
          var(--pink) 88%,
          var(--yellow) 100%
        );
        color: #ffffff;
        backdrop-filter: blur(16px);

        &:hover {
          box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
          -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
          -moz-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
        }
      }
    }
  }

  .col__two {
    grid-area: col__two;
    position: relative;

    .starnow-image {
      position: absolute;
      left: 0;
      z-index: 1;
    }
  }
}
@media (min-width: 980px) {
  .main_startnow {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      grid-auto-rows: 1fr;
      gap: var(--step-0);
      grid-auto-flow: row;
      justify-items: stretch;
      grid-template-areas: "col__one col__two";
      height: 100%;
    }

    .col__two {
      grid-area: col__two;
    }
  }
}
</style>
