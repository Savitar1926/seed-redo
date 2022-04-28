<script scoped>
// Plugins
// import { gsap } from "gsap";
import LottieAnimation from "lottie-web-vue";
// Components
import Navigation from "@/components/Navigation.vue";
import IntersectionObserver from "@/components/IntersectionObserver";
import HeroScroll from "@/components/HeroScroll.vue";
import Pattern2 from "@/components/Pattern.vue";

// Sections
import Hero from "@/sections/01_Hero.vue";
// import RevCenterAnimation from "@/sections/02_CenterAnimation.vue";
import RevUsecases from "@/sections/03_Usecases.vue";
import Starters from "@/sections/04_Starters.vue";
import Simple from "@/sections/05_SimpleForEveryone.vue";
import RevFurtherTogether from "@/sections/06_FurtherTogether.vue";
import MakeInteractive from "@/sections/07_MakeInteractive.vue";
import ExportEverywhere from "@/sections/08_ExportEverywhere.vue";
import SupportedDevice from "@/sections/09_SupportedDevice.vue";
import Integrate from "@/sections/13_Integrate.vue";
import Testimonials from "@/sections/10_Testimonials.vue";
import MeetLottie from "@/sections/11_MeetLottie.vue";
import StartNow from "@/sections/12_StartNow.vue";
import Footer from "@/sections/Footer.vue";

//Mixins
import checkScreen from "@/mixins/checkScreen";
import elementSelector from "@/mixins/elementSelector";

export default {
  name: "Home",
  data() {
    return {
      windownWidth: null,
      // Intersection Hero
      passIntersectingHero: false,
      downScreen: false,
    };
  },
  mixins: [checkScreen, elementSelector],
  components: {
    HeroScroll,
    // Plugin
    LottieAnimation,
    Pattern2,
    // Components
    Navigation,
    IntersectionObserver,
    // Sections
    Hero,
    // RevCenterAnimation,
    RevUsecases,
    Simple,
    Starters,
    RevFurtherTogether,
    MakeInteractive,
    ExportEverywhere,
    SupportedDevice,
    Integrate,
    Testimonials,
    MeetLottie,
    StartNow,
    Footer,
  },
  created() {
    ["scroll", "resize"].forEach((evt) =>
      window.addEventListener(evt, this.lottieScroll)
    );
    ["scroll", "resize"].forEach((evt) =>
      window.addEventListener(evt, () => {
        const elemRect = document
          .querySelector("#usecasephone")
          .getBoundingClientRect();
        let offset = elemRect.top - document.body.getBoundingClientRect().top;
        console.log(`hello ${offset}`);
      })
    );
  },
  mounted() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.lottieScroll();
    this.changeStrokeLottieHero();
    this.heroIntersection();
    this.getStartedIntersection();
  },
  methods: {
    // new Intersection
    heroIntersection() {
      const el = document.querySelector("#pass-hero");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          if (entry.isIntersecting) {
            // pause animation
            // this.$refs.cursor.pause();
            this.$refs.pattern.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            // this.$refs.cursor.play();
            this.$refs.pattern.play();
          } else {
            // pause animation
            // this.$refs.cursor.pause();
            this.$refs.pattern.pause();
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(el);
    },
    getStartedIntersection() {
      const el = document.querySelector("#pass-startnow");

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          entry.boundingClientRect.top;
          // play animation
          if (entry.isIntersecting) this.$refs.getstarted.play();
          // pause animation
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            this.$refs.getstarted.pause();
          } else {
            // play animation
            this.$refs.getstarted.play();
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(el);
    },

    lottieScroll() {
      // const element = document.querySelector(".zoom");
      const heroelement = document.querySelector(".hero");
      // const cursorelement = document.querySelector(".cursor_movement");
      const heroscroll = document.querySelector("#HERO_PRODUCT_placement");
      const elemRect = document
        .querySelector("#usecasephone")
        .getBoundingClientRect();

      // const element = document.querySelector(".usecase-phone");
      // const bodyRect_usecase = document.body.getBoundingClientRect();
      // console.log(element);
      // console.log(bodyRect_usecase);
      // const elemRect = document
      //   .querySelector("#usecasephone")
      //   .getBoundingClientRect();
      // console.log(`hello ${elemRect}`);
      // let offset = elemRect.top - bodyRect_usecase.top;

      // console.log(`Element is ${offset} vertical pixels from body`);

      // On Scroll the Lottie Editor UI container scales up;
      // while in reverse the Editor UI lottie scales down revealing the Whoel UI

      window.onscroll = function (scroll) {
        this.windownWidth = window.innerWidth;
        let offset = elemRect.top - document.body.getBoundingClientRect().top;

        const scrollTop = document.documentElement.scrollTop;
        //  Scroll Velocity Controllers
        let scaleAmt = 1.0 + scrollTop / (10 * 280);
        // let scaleLottie = 2.0 - scrollTop / (10 * 35);
        let scaleDown = 1.0 - scrollTop / (10 * 70);
        let transUp = 1.0 - scrollTop / (10 * 50);
        // let cursorDown = 1.0 - scrollTop / (10 * 130);
        // cursorDown = Math.min(Math.max(0.6, cursorDown), 1);
        // transUp = Math.min(Math.max(0, transUp), offset);
        // cursorelement.style.transform = `scale(${cursorDown}) `;
        // cursorelement.style.transition = `transform 900ms linear`;
        scroll.preventDefault();

        // Center lottie scroll to place
        let translateLottie = scrollTop - 600 / 1.5;
        translateLottie = Math.min(Math.max(0, translateLottie), offset / 1.75);
        console.log(translateLottie);

        if (scrollTop > 950) {
          heroscroll.style.transform = `translateY(${translateLottie}px) translateX(160px) `;
          heroscroll.style.transition = "transform 350ms linear";
          heroscroll.style.zIndex = "888";
        }
        if (950 > scrollTop) heroscroll.style.transform = "translateX(0px)";
        if (500 > scrollTop) heroscroll.style.transform = "translateY(0px)";

        if (400 > scrollTop) {
          heroelement.style.transformOrigin = `top`;
          heroelement.style.transform = `scale(${scaleDown})  translateY(${-transUp}px)`;
          heroelement.style.transition = `transform 100ms linear`;
        }
        // Conditions when passed the center lottie animation
        if (this.windownWidth >= 950) {
          this.mobile = true;
          if (scaleAmt < 1.5) {
            scaleAmt = Math.min(Math.max(1, scaleAmt), 1.35);
          }
        }
        if (this.windownWidth <= 950) heroelement.style.transform = `none`;
      };
    },

    // Change path stroke when mounted
    changeStrokeLottieHero() {
      document.querySelectorAll(".stroke path").forEach((path) => {
        path.setAttribute("stroke", "#E1E4F0");
      });
    },
  },
};
</script>

<template>
  <main class="home">
    <!-- <Navigation class="navigation" /> -->
    <Navigation class="navigation" />

    <section class="section">
      <!-- <About /> -->
      <section class="section__light gap-light">
        <section class="section__hero">
          <!--  Play Hero animation -->
          <Hero />
          <div style="z-index: 10">
            <HeroScroll
              v-show="!mobile"
              class="hero-scroll"
              style="
                z-index: 10;
                border-radius: var(--step-0);
                overflow: hidden;
                pointer-events: none;
              "
            />
            <lottie-animation
              :auto-play="true"
              v-show="mobile"
              ref="getstarted"
              class="getstarted-bg"
              :animationData="require('@/assets/01_hero/Hero_Product.json')"
              :loop="true"
            />
          </div>
          <!-- <RevCenterAnimation /> -->
        </section>
        <section class="section__usecases">
          <div class="usecases-home">
            <RevUsecases class="usecase-component" />
          </div>
          <Starters />
          <!--  Pause Hero animation -->
          <intersection-observer id="pass-hero" />
        </section>

        <!-- Cursor Animation -->
        <!-- <lottie-animation
          :auto-play="false"
          v-show="!mobile"
          ref="cursor"
          class="cursor_movement animate-lead"
          :animationData="require('@/assets/cursor-movement.json')"
          :loop="true"
        /> -->
        <Pattern2 class="bg__pattern" />
      </section>
      <section class="section__simple">
        <Simple />
      </section>

      <!-- Further Togther, Make Interactive, Export Everywhere, Supported Devices -->

      <section class="section__further" id="sectionFurther">
        <RevFurtherTogether />
        <MakeInteractive class="section__make-interactive" />
        <div class="section__export-everywhere">
          <ExportEverywhere />
          <SupportedDevice />
        </div>
        <img src="@/assets/07_exportEverywhere/Stars.svg" class="bg__stars" />
        <img src="@/assets/Background.svg" class="bg__gradient" />
      </section>
    </section>
    <div id="sectionIntegrate">
      <Integrate />
    </div>

    <!--  Testiomonials, What's Lottie, Get Started -->

    <section class="section__light">
      <div class="section__testimonials">
        <Testimonials />
      </div>
      <div class="section__meet-lottie">
        <MeetLottie />
      </div>
      <div class="section__get-started">
        <intersection-observer id="pass-startnow" />

        <StartNow class="getstarted-component" />
        <img
          v-show="mobile"
          loading="lazy"
          class="getstarted-bg"
          src="@/assets/10_getStarted/startnow-bg.svg"
        />
        <lottie-animation
          :auto-play="false"
          v-show="!mobile"
          ref="getstarted"
          class="getstarted-bg"
          :animationData="require('@/assets/12_startNow/Stroke_Scaled.json')"
          :loop="true"
        />
      </div>
    </section>

    <!-- Foooter -->
    <section class="section__footer">
      <Footer />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  overflow-x: hidden;
  .navigation {
    display: grid;
    position: fixed;
    z-index: 9999;
  }
  @media (max-width: 980px) {
    .gap-light {
      gap: var(--step-5);
    }
  }
  // Sections
  .section {
    display: flex;
    flex-direction: column;
    gap: var(--step-5);
    background: var(--primary);
    position: relative;
    overflow-x: hidden;

    &__light {
      display: flex;
      flex-direction: column;
      background: var(--primary);
    }

    &__hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--step-4);
    }
    &__usecases {
      background: var(--primary);
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: var(--step-1);

      .usecases-home {
        position: relative;

        .usecase-component {
          position: relative;
          // z-index: 900;
        }
        .usecase-bg {
          position: absolute;
          bottom: 0;
          z-index: 1;
          width: 110%;
          opacity: 1;

          @media (min-width: 1840px) {
            opacity: 0;
          }
        }
      }
    }

    &__simple {
      background: var(--primary);
    }

    &__further {
      background: var(--dark);
      display: flex;
      flex-direction: column;
      height: max-content;
      gap: calc(var(--step-5) + 5rem);
      overflow: hidden;
      padding-top: var(--step-5);
      padding-bottom: var(--step-4);
      position: relative;
    }

    &__testimonials {
      background: var(--primary);
    }
    &__meet-lottie {
      background: white;
    }
    &__get-started {
      position: relative;
      overflow: hidden;

      .getstarted-component {
        position: relative;
        z-index: 3;
      }
      .getstarted-bg {
        position: absolute;
        inset: 0;
        height: 100%;
        z-index: 2;
        transform: scale(2.5);
      }
    }

    &__footer {
      z-index: 2;
      background: var(--dark);
    }
  }

  // Backgrounds SVGs, Images

  .bg {
    &__stars {
      position: absolute;
      bottom: 36%;
      transform: scale(1.4);
      z-index: 1;
      mix-blend-mode: overlay;
    }

    &__mountains {
      position: absolute;
      bottom: -2%;
      transform: scale(1.2);
      transform-origin: left;
      z-index: 1;
      width: 100%;
    }
    &__gradient {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      // transform: scale(1.5);
    }
    &__dark {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      margin-inline: auto;
      margin-top: -5rem;
    }
    // Lottie Pattern
    &__pattern {
      width: max-content;
      width: 100vw;
      position: absolute;
      top: 0;
      right: 0;
      // margin-top: -30.25rem;
      z-index: 0;
      pointer-events: none;
    }
  }

  // Lottie Cursor Movement
  .cursor_movement {
    padding: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 999;
    transform-origin: bottom;
  }

  @media (max-width: 550px) {
    .bg__pattern {
      transform-origin: top;
      transform: scale(1.5);
    }
  }
}
</style>
