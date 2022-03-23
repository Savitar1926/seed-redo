<template>
  <div class="main_testimonials position-lift limiter">
    <div class="container">
      <div class="col__one">
        <h1>Supercharge your animation workflow</h1>
        <div class="button">
          <button class="button__beta animate-lead">
            Get early access
            <icon name="arrow" class="arrow" />
          </button>
        </div>
      </div>
      <div class="col__two">
        <img
          src="@/assets/startnow-image.svg"
          style="position: absolute; bottom: 0; right: 0; z-index: 1"
        />
      </div>
      <img
        src="@/assets/startnow-bg.svg"
        style="
          transform: scale(2);
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100%;
          z-index: -2;
        "
      />
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
.main_testimonials {
  color: var(--dark);
  padding-block: var(--step-6);
  padding-inline: var(--step-4);
  // margin: 0 auto;
  background: var(--primary);
  overflow: hidden;

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
    height: 100%;
  }

  .col__one {
    grid-area: col__one;
    display: flex;
    flex-direction: column;
    gap: var(--step-0);
    h1 {
      font-size: var(--step-2);
      color: white;
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
          79.84deg,
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
      }
      &__beta {
        background: rgba(255, 255, 255, 0.25);
        color: #ffffff;

        &:hover {
          -webkit-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
          -moz-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
          box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
        }
      }
    }
  }

  .col__two {
    grid-area: col__two;
  }
}
@media (min-width: 980px) {
  .main_testimonials {
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
    }
  }
}
</style>
