<template>
  <div class="starters limiter">
    <div class="container position-lift">
      <div class="anim anim__first card card--dark card--shadow-dark">
        <h2 style="color: #7c71fd">iOS</h2>
        <span>Compatible with iPhone, iPad, Apple Watch</span>
      </div>
      <div class="anim anim__sec card card--dark card--shadow-dark">
        <h2 style="color: #ee3183">Android</h2>
        <span>Operates in Phone, Tablet, Smartwatch</span>
      </div>
      <div class="anim anim__third card card--dark card--shadow-dark">
        <h2 style="color: #ffb92a">Web</h2>
        <span>Runs everywhere in the web</span>
        <div class="suported-lottie">
          <img src="@/assets/react-icon.svg" alt="" />
          <img src="@/assets/vue-icon.svg" alt="" />
          <img src="@/assets/angular-icon.svg" alt="" />
          <img src="@/assets/webflow-icon.svg" alt="" />
          <img src="@/assets/elementor-icon.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.starters {
  width: 100%;
  margin-inline: auto;
  color: var(--primary);
}

.card {
  height: 250px !important;
  &--dark {
    border: none !important;
    backdrop-filter: blur(16px);
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 32px 32px;
  grid-auto-flow: row;
  justify-items: stretch;
  grid-template-areas:
    "anim__first"
    "anim__sec"
    "anim__third";
  padding-inline: var(--step-4);
}
.anim {
  height: 250px;
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
.suported-lottie {
  display: flex;
  gap: var(--step--2);
  flex-wrap: wrap;
}
.anim {
  justify-content: center;
  h2 {
    font-size: var(--step-0);
  }

  span {
    line-height: var(--step-0);
    color: var(--primary);
    font-size: var(--step--4);
  }
}

@media (min-width: 980px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "anim__first anim__sec anim__third";
  }
}
</style>
