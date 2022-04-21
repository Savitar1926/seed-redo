<template>
  <div class="main_testimonials position-lift limiter">
    <div class="container">
      <div class="col__one">
        <h1>Integrate your <br />existing workflow.</h1>
        <span>
          <strong>Coming soon.</strong>
          Collaborate on files together and break out of the After Effects silo.
          Keep designers, developers and product managers on the same page. No
          more emailing folders or sharing files on G-Drive.</span
        >
      </div>
      <div class="col__two">
        <img
          src="https://lottielab.io/assets/integrations-fde77e9128447f61e720d2ca630ac4ae530c86ebe56e6cbf092420a335d3a200.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
};
</script>

<style lang="scss" scoped>
.main_testimonials {
  color: var(--dark);
  padding-inline: var(--step-4);
  padding-block: var(--step-6);
  background: linear-gradient(
      180deg,
      rgba(43, 43, 43, 0) 0%,
      rgba(238, 49, 131, 0.7) 77.9%,
      #f87e51 100%
    ),
    #2b2b2b;
  overflow: hidden;
  margin: 0 auto;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
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
    justify-content: center;
    h1 {
      font-size: var(--step-2);
      color: var(--primary); // purple
    }
    span {
      color: var(--primary);
      font-size: var(--step--3);
    }
  }

  .col__two {
    grid-area: col__two;
    display: flex;
    justify-content: center;

    img {
      height: 416px;
    }
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
