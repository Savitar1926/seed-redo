<script scoped>
import { gsap } from "gsap";
import LottieAnimation from "lottie-web-vue";
import Navigation from "@/components/Navigation.vue";
import Hero from "@/sections/Hero.vue";
// import CenterAnimation from "@/sections/CenterAnimation.vue";
// import Usecases from "@/sections/Usecases.vue";
import RevUsecases from "@/sections/RevUsecases.vue";
import Starters from "@/sections/Starters.vue";
import Simple from "@/sections/SimpleForEveryone.vue";
import RevFurtherTogether from "@/sections/RevFurtherTogether.vue";
import MakeInteractive from "@/sections/MakeInteractive.vue";
// import RevMakeInteractive from "@/sections/RevMakeInteractive.vue";
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
    // CenterAnimation,
    // Usecases,
    RevUsecases,
    Simple,
    Starters,
    RevFurtherTogether,
    MakeInteractive,
    // RevMakeInteractive,
    ExportEverywhere,
    SupportedDevice,
    Testimonials,
    MeetLottie,
    StartNow,
    Footer,
  },
  created() {
    ["scroll", "resize"].forEach((evt) =>
      window.addEventListener(evt, this.changeColour, false)
    );
  },
  mounted() {
    document.querySelectorAll(".stroke path").forEach((path) => {
      path.setAttribute("stroke", "#E1E4F0");
    });
  },
  methods: {
    loopComplete() {
      gsap.to(".on-mounted", {
        y: -1500,
        duration: 2,
        ease: "expo.out",
      });
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
      setTimeout(() => {
        this.cover = false;
      }, 2500);
      this.contentInside = true;
    },
    changeColour() {
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
    <!-- <div v-if="cover" class="on-mounted">
      <lottie-animation
        v-if="cover"
        :animationData="require('@/assets/Logo (1) 2.json')"
        :loop="1"
        @loopComplete="loopComplete"
      />
    </div> -->
    <Navigation class="navigation" id="navigation" />
    <section class="section" v-show="!contentInside">
      <section class="section__light">
        <section class="section__hero" style="display">
          <Hero />
          <div
            class="container-center-animation"
            style="
              z-index: 2;
              align-self: center;
              height: 608px;
              width: 100%;
              border-radius: 16px;
              padding-inline: var(--step-4);
            "
          >
            <div
              class="center-animation card card--light card--shadow"
              style="
                z-index: 2;
                align-self: center;
                height: 608px;
                width: 100%;
                border-radius: 16px;
                padding-inline: var(--step-4);
              "
            >
              hello World
            </div>
          </div>
        </section>
        <section class="section__usecases">
          <div style="position: relative">
            <RevUsecases style="z-index: 2; position: relative" />
            <img
              src="@/assets/usecase-bg.svg"
              alt=""
              style="
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                width: 100%;
              "
            />
          </div>
          <Starters />
        </section>
        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/cursor-movement.json')"
          :loop="true"
          class="cursor_movement animate-lead"
        />
        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/Pattern_6.json')"
          :loop="true"
          class="bg__pattern limter animate-lead"
        />
      </section>
      <section class="section__simple" id="sectionSimple">
        <Simple />
      </section>
      <section
        class="section__further"
        id="sectionFurther"
        style="position: relative"
      >
        <RevFurtherTogether />
        <MakeInteractive class="section__make-interactive" />
        <!-- <RevMakeInteractive class="section__make-interactive" /> -->
        <div>
          <ExportEverywhere />
          <SupportedDevice />
        </div>
        <!-- <Testimonials /> -->
        <img src="@/assets/Stars.svg" class="bg__stars" alt="" />
        <img src="@/assets/Background.svg" class="bg__gradient" />
        <img
          src="@/assets/dark-bg.svg"
          style="transform: scale(1)"
          class="bg__gradient"
        />
      </section>
    </section>
    <section id="sectionWhite">
      <div style="background: var(--primary)">
        <Testimonials />
      </div>
      <div style="background: white">
        <MeetLottie />
      </div>
      <div style="position: relative; overflow: hidden">
        <StartNow style="position: relative; z-index: 3" />
        <img
          src="@/assets/startnow-bg.svg"
          style="
            position: absolute;
            inset: 0;
            width: 100vw;
            height: 100%;
            z-index: 2;
          "
        />
      </div>
    </section>
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
  .on-mounted {
    height: 101vh;
    width: 100%;
    background: var(--dark);
    z-index: 10000;
    position: absolute;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .section {
    display: flex;
    flex-direction: column;
    gap: 96px;
    background: var(--primary);

    &__light {
      display: flex;
      flex-direction: column;
      gap: 96px;
      background: var(--primary);
    }

    &__hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--step-0);
    }
    &__center {
      height: min-content;
      background: var(--primary);
      display: flex;
      justify-content: center;

      .center-animation {
        margin-top: 10rem;
        width: 100%;
        z-index: 1;
        padding-inline: var(--step-4);
      }
    }
    &__usecases {
      background: var(--primary);
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;
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

    &__meet-lottie {
      background: var(--primary);
      z-index: 0;
    }

    &__footer {
      z-index: 2;
      background: var(--dark);
    }
  }

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

  .darkSection {
    width: max-content;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    margin-top: -10em;
    pointer-events: none;
    transform: scale(1.25);
  }

  @media (min-width: 980px) {
    .section {
      &__center {
        margin-bottom: -5rem;
      }
    }

    .darkSection {
      transform: scale(8);
    }
  }
}
</style>
