<script scoped>
// Plugins
import { gsap } from "gsap";
import LottieAnimation from "lottie-web-vue";
// Components
import Navigation from "@/components/Navigation.vue";
import IntersectionObserver from "@/components/IntersectionObserver";

// Sections
import Hero from "@/sections/01_Hero.vue";
import RevCenterAnimation from "@/sections/02_CenterAnimation.vue";
import RevUsecases from "@/sections/03_Usecases.vue";
import Starters from "@/sections/04_Starters.vue";
import Simple from "@/sections/05_SimpleForEveryone.vue";
import RevFurtherTogether from "@/sections/06_FurtherTogether.vue";
import MakeInteractive from "@/sections/07_MakeInteractive.vue";
import ExportEverywhere from "@/sections/08_ExportEverywhere.vue";
import SupportedDevice from "@/sections/09_SupportedDevice.vue";
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
    };
  },
  mixins: [checkScreen, elementSelector],
  components: {
    // Plugin
    LottieAnimation,
    // Components
    Navigation,
    IntersectionObserver,
    // Sections
    Hero,
    RevCenterAnimation,
    RevUsecases,
    Simple,
    Starters,
    RevFurtherTogether,
    MakeInteractive,
    ExportEverywhere,
    SupportedDevice,
    Testimonials,
    MeetLottie,
    StartNow,
    Footer,
  },
  created() {
    ["scroll", "resize"].forEach((evt) =>
      window.addEventListener(evt, this.scaleUINavbarBlur, false)
    );
  },
  mounted() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    this.animateHeroSection();
    this.changeStrokeLottieHero();
    this.scaleUINavbarBlur();
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
            this.$refs.pattern.pause();
            this.$refs.cursor.pause();
          }
          if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
            // play animation
            this.$refs.pattern.play();
            this.$refs.cursor.play();
          } else {
            // pause animation
            this.$refs.pattern.pause();
            this.$refs.cursor.pause();
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

    animateHeroSection() {
      gsap.from(".animate-lead", { y: 200, opacity: 0, duration: 1 }, "<+=80%");
      gsap.from(
        ".links",
        {
          duration: 0.2,
          scale: 0.5,
          opacity: 0,
          ease: "power1.inOut",
          stagger: {
            grid: "auto",
            from: "start",
            amount: 0.2,
          },
        },
        "<+=20%"
      );
      gsap.from(
        ".animate-nav",
        {
          opacity: 0,
          duration: 0.5,
        },
        "<+=20%"
      );
    },
    scaleUINavbarBlur() {
      const element = document.querySelector(".zoom");
      const heroelement = document.querySelector(".hero");
      const cursorelement = document.querySelector(".cursor_movement");
      const centerlottieelement = document.querySelector(".center-lottie");
      const bodyRect = document.body.getBoundingClientRect();
      const centerRect = centerlottieelement.getBoundingClientRect();
      const nav = document.querySelector("#nav_bg");
      const navChangeTop = centerRect.top - bodyRect.top;

      // On Scroll the Lottie Editor UI container scales up;
      // while in reverse the Editor UI lottie scales down revealing the Whoel UI

      window.onscroll = function (scroll) {
        this.windownWidth = window.innerWidth;

        const scrollTop = document.documentElement.scrollTop;

        //  Scroll Velocity Controllers
        let scaleAmt = 1.0 + scrollTop / (10 * 100);
        // let scaleDown = 1.0 - scrollTop / (10 * 290);
        let cursorDown = 1.0 - scrollTop / (10 * 30);
        let scaleLottie = 2.0 - scrollTop / (10 * 35);
        cursorDown = Math.min(Math.max(0.5, scaleLottie), 1);
        cursorelement.style.transform = `scale(${cursorDown}) `;

        // Conditions when passed the center lottie animation
        if (300 <= 700 > scrollTop || scrollTop > 300) {
          if (this.windownWidth >= 950) {
            this.mobile = true;
            if (scaleAmt < 1.5) {
              scroll.preventDefault();
              // Restrict scale
              scaleAmt = Math.min(Math.max(1, scaleAmt), 1.35);
              scaleLottie = Math.min(Math.max(0.85, scaleLottie), 2);
              // Apply scale transform
              element.style.transformOrigin = `bottom`;
              element.style.transition = `transform 500ms ease-in-out`;
              element.style.transform = `scale(${scaleAmt})`;
              centerlottieelement.style.transform = `scale(${scaleLottie})`;
              centerlottieelement.style.transition = `transform 500ms ease-in-out`;
              heroelement.style.transformOrigin = `bottom`;
              // heroelement.style.transform = `scale(${scaleDown}) translateY(${-scaleDown}px)`;
              heroelement.style.transition = `transform 500ms ease-in-out`;
            }
            // Navbar Blur
            if (navChangeTop - 180 <= window.scrollY) {
              nav.style.backdropFilter = "blur(16px)";
            } else {
              nav.style.backdropFilter = "blur(0px)";
            }
          }
        }

        if (this.windownWidth <= 950) {
          element.style.transform = `none`;
          centerlottieelement.style.transform = `scale(1)`;
          heroelement.style.transform = `none`;
        }
      };
      if (this.windownWidth <= 950) {
        centerlottieelement.style.transform = `scale(1)`;
        element.style.transform = `none`;
        centerlottieelement.style.transform = `scale(1)`;
        heroelement.style.transform = `none`;
      }
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
      <section class="section__light">
        <section class="section__hero">
          <!--  Play Hero animation -->
          <Hero />
          <RevCenterAnimation />
        </section>
        <section class="section__usecases">
          <div class="usecases-home">
            <RevUsecases class="usecase-component" />
          </div>
          <Starters />
          <!--  Pause Hero animation -->
          <intersection-observer id="pass-hero" />
        </section>
        <lottie-animation
          :auto-play="false"
          v-show="!mobile"
          ref="cursor"
          class="cursor_movement animate-lead"
          :animationData="require('@/assets/cursor-movement.json')"
          :loop="true"
        />
        <lottie-animation
          :auto-play="false"
          ref="pattern"
          class="bg__pattern limter animate-lead"
          :animationData="require('@/assets/Pattern_6_b.json')"
          :loop="true"
        />
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

  .gap-light {
    gap: var(--step-5);
  }
  // Sections
  .section {
    display: flex;
    flex-direction: column;
    gap: var(--step-5);
    background: var(--primary);

    &__light {
      display: flex;
      flex-direction: column;
      background: var(--primary);
    }

    &__hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--step-0);
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
          z-index: 2;
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
      gap: var(--step-5);
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
        transform: scale(1.5);
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
    z-index: 2;
    transform-origin: bottom;
  }
}
</style>
