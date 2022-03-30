<template>
  <div class="starters limiter">
    <div class="container position-lift">
      <div class="anim anim__first card card--light card--shadow">
        <h2>
          Start with <br />
          Templates
        </h2>
        <div class="chips">
          <span>Onboarding</span>
          <span>Icons</span>
          <span>Progression</span>
          <span>Dynamic Backgrounds</span>
          <span class="more">and a lot more</span>
        </div>
      </div>
      <div class="anim anim__sec card card--light card--shadow">
        <h2>
          Import your <br />
          favourite assets
        </h2>
        <div class="chips">
          <span>Lotties</span>
          <span>After Effects</span>
          <span>SVGs</span>
          <span>Figma Integration</span>
          <span class="more">and a lot more</span>
        </div>
      </div>
      <div class="anim anim__third card card--light card--shadow">
        <h2>
          Design from <br />
          scratch
        </h2>
        <div class="chips">
          <span>Create Shapes</span>
          <span>Raster Assets</span>
          <span class="more">and a lot more</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Starters",
};
</script>

<style lang="scss" scoped>
.starters {
  width: 100%;
  margin-inline: auto;
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.35fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: var(--step-0);
  grid-auto-flow: row;
  justify-items: stretch;
  grid-template-areas:
    "anim__first"
    "anim__sec"
    "anim__third";
  // transform: scale(0.88);
  padding-inline: var(--step-4);
  // padding-block: var(--step-4);
}
.anim {
  height: max-content;
}

.anim__first {
  grid-area: anim__first;
}

.anim__sec {
  grid-area: anim__sec;
}

.anim__third {
  grid-area: anim__third;
}

.anim {
  justify-content: center;
  h2 {
    font-size: var(--step-0);
  }
  .chips {
    display: flex;
    gap: var(--step--3);
    flex-wrap: wrap;

    span {
      background: rgba(124, 113, 253, 0.1);
      font-size: var(--step--4);
      line-height: var(--step--2);
      padding: var(--step--5) var(--step--4);
      border-radius: var(--step--5);
      font-weight: var(--normal);
      color: #7c71fd;
      width: max-content;
    }

    .more {
      color: var(--dark-sub);
      background: none;
    }
  }
  span {
    font-size: var(--step--1);
    color: var(--purple);
    font-weight: var(--semi-bold);
  }
}

@media (min-width: 980px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "anim__first anim__sec anim__third";
  }

  .anim {
    height: 100%;

    .chips {
      span {
        width: max-content;
      }
    }
  }
}
</style>
