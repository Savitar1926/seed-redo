<script>
import icon from "@/assets/Icons.vue";

export default {
  name: "NavBar",
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  components: {
    icon,
  },
  mounted() {
    this.checkScreen();
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
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
};
</script>

<template>
  <header>
    <nav id="nav_bg" class="nav animate-nav">
      <div class="nav__section limiter">
        <div class="nav__home">
          <router-link to="/" class="links">
            <icon name="logo" class="logo"
          /></router-link>
          <router-link
            to="/"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
            >About</router-link
          >
          <router-link
            to="/"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
            >Blogs</router-link
          >
          <router-link
            to="/"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
            >Community</router-link
          >
        </div>
        <ul v-show="!mobile" class="nav__routes" data-link>
          <router-link to="/" data-link id="nav_link" class="links links-spaced"
            >Sign In</router-link
          >
          <router-link
            to="/"
            data-link
            id="nav_link"
            class="sign-up links links-spaced"
            >Sign Up for Free</router-link
          >
        </ul>
        <button v-show="mobile">
          <icon name="menu" class="nav__mobile" id="nav_icon" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  --navigation: clamp(4.49rem, 1.08rem + 7.05vw, 6.1rem);
  -webkit-backdrop-filter: blur(16px);
  align-content: center;
  backdrop-filter: blur(16px);
  display: flex;
  justify-content: center;
  height: var(--navigation);
  transition: all 150ms linear;
  width: 100vw;
  background: rgb(238 239 243 / 0.5);
  box-shadow: 3px 1px 15px 0px rgba(217, 217, 217, 0.49);

  .highlight {
    background: linear-gradient(
      150deg,
      rgba(18, 241, 158, 1) 0%,
      rgba(98, 122, 246, 1) 100%
    );
    background-size: 200%;
    right: 0;
    left: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: var(--step-1);
    width: 100%;
  }
  &__home {
    width: max-content;
    display: flex;
    align-items: center;
    width: max-content;
    display: flex;
    justify-content: end;
    gap: var(--step--3);

    a {
      &:not(:first-child):before,
      &:not(:first-child):after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        width: 0;
      }
      &:before {
        transition: width 0s ease, background 0.4s ease;
        left: 0;
        right: 0;
        bottom: 6px;
      }
      &:after {
        right: 2.2%;
        bottom: 6px;
        background: var(--teal);
        transition: width 0.4s ease;
      }

      &:hover {
        &:before {
          width: 97.8%;
          background: var(--teal);
          transition: width 0.4s ease;
        }
        &:after {
          width: 97.8%;
          background: 0 0;
          transition: all 0s ease;
        }
      }
    }

    .logo {
      color: var(--dark);
      width: var(--step-3);
    }
  }

  &__routes {
    width: max-content;
    display: flex;
    justify-content: end;
    gap: var(--step-0);

    a:last-child {
      background: var(--dark);
      color: var(--primary) !important;

      &:hover {
        background: var(--dark) !important;
        color: var(--teal) !important;
      }
    }

    a {
      &:not(:last-child):before,
      &:not(:last-child):after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        width: 0;
      }
      &:before {
        transition: width 0s ease, background 0.4s ease;
        left: 0;
        right: 0;
        bottom: 6px;
      }
      &:after {
        right: 2.2%;
        bottom: 6px;
        background: var(--teal);
        transition: width 0.4s ease;
      }

      &:hover {
        &:before {
          width: 97.8%;
          background: var(--teal);
          transition: width 0.4s ease;
        }
        &:after {
          width: 97.8%;
          background: 0 0;
          transition: all 0s ease;
        }
      }
    }
  }

  &__mobile {
    width: var(--step-0);
  }

  a {
    font-size: var(--step--3);
    font-weight: var(--medium);
    padding-inline: var(--step-0);
    padding-block: var(--step--4);
    transition: all 200ms ease-out;
    border-radius: var(--step--2);
    display: inline-block;
    position: relative;
    color: var(--dark);

    @media (max-width: 500px) {
      &:first-child {
        padding-inline: 0rem;
      }
    }
  }
}
</style>
>
