<template>
  <div class="main_testimonials position-lift limiter">
    <div class="container">
      <div class="col__one">
        <h1>Placeholder</h1>
      </div>
      <div class="col__two">
        <div class="card card--shadow">
          <div class="profile__container">
            <div class="profile">
              <div class="profile__image"><div /></div>
              <div class="profile__info">
                <h2>Florian Bölter</h2>
                <span>SVP of Design</span>
              </div>
            </div>
            <div class="testimonials">
              <span
                >Having used LottieLab for the past few weeks, I’ve been taken
                aback by its potential, particularly when it comes to mixing up
                design workflows. Being able to simply, easily and cost
                efficiently create production-ready animation asset is a real
                game-changer. From everything I've seen so far, I really believe
                LottieLab has the potential to become the next must-learn tool
                for product and UI designers.</span
              >
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/quote-bg.svg"
        style="
          transform: scale(1.1);
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        "
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main_testimonials {
  color: var(--dark);
  padding: var(--step-4);
  background: var(--primary);
  overflow: hidden;
  margin: 0 auto;

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
    align-items: center;
    h1 {
      font-size: var(--step-2);
      color: #7c71fd;
      width: 70%;
    }
  }

  .col__two {
    grid-area: col__two;

    .card {
      height: max-content !important;
      backdrop-filter: blur(16px);
    }

    .profile__container {
      padding-block: var(--step-0);
      display: flex;
      flex-direction: column;
      gap: var(--step--2);

      .profile {
        display: flex;
        flex-direction: column;
        gap: var(--step--2);
        &__image {
          background: #7c71fd;
          height: 6.5rem;
          width: 6.5rem;
          border-radius: 5rem;
        }

        &__info {
          h2 {
            color: #7c71fd;
            font-size: var(--step--1);
            font-weight: var(--semi-bold);
          }
          span {
            color: #7c71fd;
            font-size: var(--step--1);
          }
        }
      }
      .testimonials {
        font-size: var(--step--3);
        line-height: var(--step-0);
      }
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
