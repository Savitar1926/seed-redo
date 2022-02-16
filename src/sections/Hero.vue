<script>
import LottieAnimation from "lottie-web-vue";

export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
  },
  components: {
    LottieAnimation,
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  mounted() {
    this.checkScreen();
    let TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + " " + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;
      if (this.isDeleting) {
        delta /= 2;
      }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 200;
      }
      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      const elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
        if (this.txt == "life.") {
          console.log("Added");
          break;
        }
      }
    };
  },
};
</script>
<template>
  <main class="hero limiter position-lift" id="parent_hero">
    <div
      class="hero position-lift"
      style="padding-top: clamp(11.2rem, 4.08rem + 10.05vw, 12.1rem)"
    >
      <lottie-animation
        style="transform: scale(0.75); height: 100%; margin-bottom: -2rem"
        :animationData="require('@/assets/hero-text.json')"
        :loop="true"
      />
      <!-- <h1 class="animate-title animate-title-2">
        Create animations for your <br v-show="!mobile" />
        <a
          class="typewrite hero--highlight"
          data-period="1000"
          data-type='[ "websites", "apps", "products" ]'
        >
          <span class="wrap"></span>
        </a>
        <br v-show="mobile" />
        faster.
      </h1> -->
      <div class="hero__lead animate-lead">
        <p>
          Create and ship delightful product animations with the simplest motion design
          editor for lottie animations
        </p>
      </div>
      <div class="button">
        <button class="button__beta animate-lead">Join Beta</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--step-0);
  height: 100%;
  padding-inline: var(--step-4);
  padding-block: var(--step-0);
  justify-content: center;
  text-align: center;
  overflow-x: hidden;
  margin-inline: auto;

  @media (max-height: 593px) {
    margin-top: 10em;
  }
  .hero {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;

    h1 {
      font-size: var(--step-2);
      line-height: var(--step-4);
      width: 80%;
    }
    &--highlight {
      background: linear-gradient(150deg, var(--teal) 0%, rgba(98, 122, 246, 1) 100%);
      background-size: 200%;
      right: 0;
      left: 100%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    &__lead {
      width: clamp(18.75rem, 12.41rem + 31.71vw, 35rem);
      font-weight: var(--normal);
      font-size: var(--step--3);
      line-height: var(--step-0);
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    gap: var(--step-0);

    button {
      border-radius: var(--step--1);
      font-size: var(--step--3);
      line-height: var(--step-0);
      padding-block: var(--step--5);
      padding-inline: var(--step-1);
    }
    &__beta {
      background-image: linear-gradient(to left top, #627af6, #12f19e);
      color: #ffffff;
      border: 4px #49c9d7 solid;

      &:hover {
        -webkit-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
        -moz-box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
        box-shadow: 3px 1px 15px 0px rgb(48, 165, 173, 0.25);
      }
    }
  }
}
@media (min-width: 980px) {
  main {
    .button {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
