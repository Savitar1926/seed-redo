<script>
export default {
  name: "StartUsing",
  data() {
    return {};
  },
  components: {},
  mounted() {},
};
</script>

<template>
  <div class="start-using position-lift">
    <div class="section__title">
      <h1>
        Start using Lottielab <br />
        right away
      </h1>
      <span>
        Collaborate on files together and break out of the After Effects silo. Keep
        designers, developers, and product managers on the same page. No more emailing
        fodlers or sharing files on Google Drive.
      </span>
      <button>Get Started</button>
    </div>
    <div class="image">
      <img src="@/assets/Editor (1).png" alt="" class="start-using-img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start-using {
  color: var(--primary);
  // transform: scale(0.88);
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
  margin: 0 auto;
  display: flex;
  gap: 8rem;
  // height: 100vh;
  flex-direction: column;
  text-align: center;

  .section__title {
    align-items: center;
    span {
      width: 80%;
    }
    button {
      color: var(--dark-blue);
    }
  }

  .image {
    width: 100%;

    .start-using-img {
      width: 100%;
      margin-bottom: -4rem;
      @media (min-width: 980px) {
        margin-bottom: -16rem;
      }
    }
  }
}
</style>
