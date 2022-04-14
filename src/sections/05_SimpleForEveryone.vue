<template>
  <div class="simple-for-everyone position-lift limiter-width">
    <section class="wrapper">
      <div class="title" id="about">
        <div class="container">
          <div class="first__col__title">
            <div class="section__title">
              <h1>
                Simple for <br />
                everyone
              </h1>
              <span>
                New to product animations or know your <br />
                way around - no worries.</span
              >
              <button class="full">
                Get Started
                <icon name="arrow" class="arrow" />
              </button>
            </div>
          </div>
          <div class="section__cards">
            <div class="card card--light card--shadow box box__ditch">
              <h2>
                Ditch the <br />
                learning curve
              </h2>
              <span
                >We keep it simple, so you’re free to create powerful results -
                no After Effects qualifications needed.</span
              >
            </div>
            <div class="card card--light card--shadow box box__fun">
              <h2>
                Have fun in <br />
                the browser
              </h2>
              <span
                >With an entirely web-based editor and workflow, access your
                work from any device and forget downloading large apps and
                files.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="scroll">
        <div class="roles">
          <div class="container">
            <div class="role__designer card card--shadow">
              <div class="role__container">
                <div class="profile__container">
                  <lottie-animation
                    :animationData="
                      require('@/assets/04_simple/santaclause-profile.json')
                    "
                    :loop="true"
                    class="profile__animation"
                    :auto-play="false"
                    ref="designers"
                  />
                </div>
                <div class="profile__details">
                  <h2 style="color: #7c71fd">Designers</h2>
                  <span>
                    Edit illustrations and micro-interactions without needing to
                    disturb a designer.</span
                  >
                </div>
              </div>
            </div>
            <div class="role__developer card card--shadow">
              <div class="role__container">
                <div class="profile__container">
                  <lottie-animation
                    :animationData="
                      require('@/assets/04_simple/santaclause-profile.json')
                    "
                    :loop="true"
                    class="profile__animation"
                    :auto-play="false"
                    ref="developers"
                  />
                </div>
                <div class="profile__details">
                  <h2 style="color: #f14378">Developers</h2>
                  <span>
                    Edit illustrations and micro-interactions without needing to
                    disturb a designer.</span
                  >
                </div>
              </div>
            </div>
            <div class="role__project-manager card card--shadow">
              <div class="role__container">
                <div class="profile__container">
                  <lottie-animation
                    :animationData="
                      require('@/assets/04_simple/santaclause-profile.json')
                    "
                    :loop="true"
                    class="profile__animation"
                    :auto-play="false"
                    ref="animators"
                  />
                </div>
                <div class="profile__details">
                  <h2 style="color: #ffba2b">Animators</h2>
                  <span>
                    Edit illustrations and micro-interactions without needing to
                    disturb a designer.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <intersection-observer
          id="pass-simple"
          style="position: absolute; bottom: -20rem"
        />
      </div>
    </section>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";
import LottieAnimation from "lottie-web-vue";
import IntersectionObserver from "@/components/IntersectionObserver";

export default {
  name: "SimpleForEveryone",
  data() {
    return {};
  },
  components: {
    icon,
    LottieAnimation,
    IntersectionObserver,
  },
  mounted() {
    this.centerIntersection();
  },
  methods: {
    centerIntersection() {
      const el = document.querySelector("#pass-simple");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
            // pause animation
            this.$refs.designers.pause();
            this.$refs.developers.pause();
            this.$refs.animators.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            this.$refs.designers.play();
            this.$refs.developers.play();
            this.$refs.animators.play();
          } else {
            // pause animation
            this.$refs.designers.pause();
            this.$refs.developers.pause();
            this.$refs.animators.pause();
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(el);
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-for-everyone {
  margin: 0 auto;
  padding: 0;

  .wrapper {
    display: flex;
    flex-direction: column;
    padding-inline: var(--step-4);
    padding-block: var(--step--3);
    margin: auto;
    gap: var(--step-1);
    .title {
      display: flex;
      justify-content: center;
      align-items: center;

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: var(--step-0);
        grid-auto-flow: row;
        justify-items: stretch;
        grid-template-areas:
          "first__col__title"
          "section__cards";
        margin-inline: auto;
        justify-content: center;
        height: 100%;
        align-items: end;
      }

      .section__cards {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: var(--step-0);
        grid-auto-flow: row;
        grid-template-areas:
          "card__ditch"
          "card__fun";
        grid-area: section__cards;
      }
      .box {
        display: flex;
        justify-content: center;
        h2 {
          font-size: var(--step--1);
        }
        span {
          font-size: var(--step--4);
          line-height: var(--step--1);
        }
        &__ditch {
          grid-area: card__ditch;
        }
        &__fun {
          grid-area: card__fun;
        }
      }

      .first__col__description {
        grid-area: first__col__description;
      }

      .first__col__title {
        grid-area: first__col__title;

        .section__title {
          span {
            line-height: var(--step-0);
          }
          button {
            gap: var(--step--4);
            align-items: center;
            height: max-content;
            color: var(--purple); // purple

            .arrow {
              display: flex;
              stroke: var(--purple);
            }
          }
        }
      }
    }

    .scroll {
      display: flex;
      flex-direction: column;
      gap: var(--step-0);
      justify-content: center;

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: var(--step-0);
        grid-auto-flow: row;
        justify-items: stretch;
        grid-template-areas:
          "role__designer"
          "role__developer"
          "role__project-manager";
        margin-inline: auto;
        justify-content: center;
      }

      .role__project-manager {
        grid-area: role__project-manager;
        .profile__container {
          background: #f7f8fa; // role container
          border: #e1e4f0 solid 4px;
        }
      }

      .role__developer {
        grid-area: role__developer;
        .profile__container {
          background: #f7f8fa; // role container
          border: #e1e4f0 solid 4px;
        }
      }

      .role__designer {
        grid-area: role__designer;
        .profile__container {
          background: #f7f8fa; // role container
          border: #e1e4f0 solid 4px;
        }
      }
      .role__container {
        display: flex;
        gap: var(--step-0);
        align-items: center;
        height: 100%;

        .profile__container {
          width: var(--step-7);
          height: fit-content;
          display: flex;
          flex-wrap: wrap;
          border-radius: var(--step-0);
          .profile__animation {
            margin: 0;
            padding: 0;
            aspect-ratio: 1 / 1;
          }
        }
        .profile__details {
          width: 80%;
          height: 100%;
          justify-content: space-evenly;
          display: flex;
          flex-direction: column;

          h2 {
            font-size: var(--step--1);
          }
          span {
            font-size: var(--step--4);
            line-height: var(--step--1);
          }
        }
      }
    }
  }
}

@media (min-width: 980px) {
  .simple-for-everyone {
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;

    .wrapper {
      display: flex;
      flex-direction: row;
      margin: auto;
      gap: var(--step-7);

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        position: sticky;
        position: -webkit-sticky;
        top: 0;

        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: min-content;
          grid-auto-columns: 1fr;
          grid-auto-rows: 1fr;
          grid-auto-flow: row;
          justify-items: stretch;
          grid-template-areas:
            "first__col__title"
            "section__cards";
          width: 100%;
          margin: 0;
        }

        .section__cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 0px var(--step-0);
          grid-auto-flow: row;
          grid-template-areas:
            "card__ditch card__fun"
            "card__ditch card__fun"
            "card__ditch card__fun";
          grid-area: section__cards;
        }
      }

      .scroll {
        width: 40%;

        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          grid-auto-columns: 1fr;
          grid-auto-rows: 1fr;
          grid-auto-flow: row;
          justify-items: stretch;
          grid-template-areas:
            "role__designer"
            "role__developer"
            "role__project-manager";
        }
      }
    }
  }
}
</style>
