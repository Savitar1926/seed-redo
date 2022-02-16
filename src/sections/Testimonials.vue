<template>
  <div class="main_testimonials position-lift limiter">
    <div class="container">
      <div class="col__one">
        <h1>Take a look at what our experts have to say</h1>
      </div>
      <div class="col__two">
        <div class="card card--dark">
          <div class="profile__container">
            <div class="profile">
              <div class="profile__image">
                <div
                  style="
                    background: var(--teal);
                    height: 4.5rem;
                    width: 4.5rem;
                    border-radius: 1.5rem;
                  "
                />
              </div>
              <div class="profile__info">
                <h2>John Doe</h2>
                <span>SVP of Design</span>
              </div>
            </div>
            <div class="testimonials">
              <span
                >Lottielab allow us to make animations a stronger part of our design
                process by enabling us to manage all assets alongside our UI Designs on
                Figma.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main_testimonials {
  color: var(--primary);
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
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
    h1 {
      font-size: var(--step-2);
      color: var(--teal);
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
      padding-block: var(--step-2);

      .profile {
        display: flex;
        flex-direction: column;
        gap: var(--step-0);
        margin-bottom: 3rem;
        &__image {
          > div {
            transform: rotate(45deg);
          }
        }

        &__info {
          h2 {
            color: var(--teal);
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
