<script scoped>
import { gsap } from "gsap";
import LottieAnimation from "lottie-web-vue";
import Navigation from "@/components/Navigation.vue";
import Hero from "@/sections/Hero.vue";
import RevCenterAnimation from "@/sections/RevCenterAnimation.vue";
import RevUsecases from "@/sections/RevUsecases.vue";
import Starters from "@/sections/Starters.vue";
import Simple from "@/sections/SimpleForEveryone.vue";
import RevFurtherTogether from "@/sections/RevFurtherTogether.vue";
import MakeInteractive from "@/sections/MakeInteractive.vue";
import ExportEverywhere from "@/sections/ExportEverywhere.vue";
import SupportedDevice from "@/sections/SupportedDevice.vue";
import Testimonials from "@/sections/Testimonials.vue";
import MeetLottie from "@/sections/MeetLottie.vue";
import StartNow from "@/sections/RevStartNow.vue";
import Footer from "@/sections/Footer.vue";

export default {
  name: "Home",
  data() {
    return {
      visible: false,
      contentInside: false,
      cover: true,
    };
  },
  components: {
    LottieAnimation,
    Navigation,
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
      window.addEventListener(evt, this.changeColourNavbar, false)
    );
  },
  mounted() {
    this.animateHeroSection();
    this.changeStrokeLottieHero();
    this.usecaseIntersection();
    this.scaleUI();
  },
  methods: {
    animateHeroSection() {
      gsap.from(".animate-title", {
        y: 200,
        duration: 2,
      });
      gsap.from(".animate-title-2", {
        opacity: 0,
        duration: 1,
      });
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
    scaleUI() {
      const element = document.querySelector(".zoom");
      window.onscroll = function (scroll) {
        if (window.pageYOffset <= 1000) {
          scroll.preventDefault();

          let scrollTop = document.documentElement.scrollTop;

          let scaleAmt = 1.0 + scrollTop / (10 * 100);

          // Restrict scale
          scaleAmt = Math.min(Math.max(1, scaleAmt), 1.35);

          // Apply scale transform
          element.style.transformOrigin = `bottom`;
          element.style.transition = `transform 500ms ease`;
          element.style.transform = `scale(${scaleAmt})`;
        }
      };
    },
    usecaseIntersection() {
      // Usecase Intersection Observer
      const el = document.querySelector(".usecase-parent");
      const usecases = document.querySelectorAll(".usecase-animate");
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("Enter");
            gsap.from(usecases, {
              y: 200,
              opacity: 0,
              stagger: {
                from: "center",
                grid: "auto",
                ease: "power2.inOut",
                amount: 0.09,
              },
            });
            return;
          }
        },
        {
          threshold: 0,
        }
      );
      observer.observe(el);
    },
    changeStrokeLottieHero() {
      document.querySelectorAll(".stroke path").forEach((path) => {
        path.setAttribute("stroke", "#E1E4F0");
      });
    },
    changeColourNavbar() {
      const darkSection = document.querySelector("#sectionFurther");
      const titleHighlight = document.querySelector("#title-highlight");
      const nav = document.querySelector("#nav_bg");
      const colorLinks = document.querySelectorAll("[data-link]");
      const mobileIcon = document.querySelector(".nav__mobile");

      const bodyRect = document.body.getBoundingClientRect();
      const darkRect = darkSection.getBoundingClientRect();

      const sectionChangeTop = darkRect.top - bodyRect.top;
      const sectionChangeBottom = darkRect.bottom - bodyRect.top;

      if (
        sectionChangeTop - 80 >= window.scrollY ||
        window.scrollY >= sectionChangeBottom - 80
      ) {
        nav.style.background = "rgba(238, 239, 243, 0.2)";
        nav.style.boxShadow =
          "-11.8101px 11.8101px 59.0507px rgba(92, 97, 124, 0.02)";
        mobileIcon.style.color = "var(--dark)";
        colorLinks.forEach((link) => {
          link.style.color = "var(--dark)";
        });
        titleHighlight.style.letterSpacing = "var(--step-0)";
        titleHighlight.style.color = "white";

        return;
      }
      nav.style.background = "rgba(43 43 43 / 0.8)";
      nav.style.color = "var(--primary)";
      nav.style.boxShadow = "0px 16px 32px 8px rgb(27, 27, 27, 0.5)";
      mobileIcon.style.color = "var(--primary)";
      titleHighlight.style.letterSpacing = "0rem";
      titleHighlight.style.color = "#ffb92a";
      colorLinks.forEach((link) => {
        link.style.color = "var(--primary)";
      });
    },
  },
};
</script>

<template>
  <main class="home">
    <Navigation class="navigation" id="navigation" />
    <section class="section" v-show="!contentInside">
      <section class="section__light gap-light">
        <section class="section__hero">
          <Hero />
          <RevCenterAnimation />
        </section>
        <section class="section__usecases">
          <div class="usecases-home">
            <RevUsecases class="usecase-component" />
            <img src="@/assets/03_usecases/usecase-bg.svg" class="usecase-bg" />
          </div>
          <Starters />
        </section>
        <lottie-animation
          class="cursor_movement animate-lead"
          :animationData="require('@/assets/cursor-movement.json')"
          :loop="true"
        />
        <lottie-animation
          class="bg__pattern limter animate-lead"
          :animationData="require('@/assets/Pattern_6.json')"
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
        <img src="@/assets/dark-bg.svg" class="bg__dark" />
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
        <StartNow class="getstarted-component" />
        <img
          class="getstarted-bg"
          src="@/assets/10_getStarted/startnow-bg.svg"
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
    gap: 96px;
  }
  // Sections
  .section {
    display: flex;
    flex-direction: column;
    gap: 96px;
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
      gap: 40px;

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
          transform: scale(1.2);
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
      gap: var(--step-7);
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
        width: 100vw;
        height: 100%;
        z-index: 2;
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
      inset: 0;
      z-index: 1;
      width: 100%;
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
      width: 100%;
      position: absolute;
      inset: 0 0 auto;
      margin-top: -30.25rem;
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
    transform: scale(0.8);
    transform-origin: bottom;
  }
}
</style>
