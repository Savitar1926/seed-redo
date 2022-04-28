<script>
import icon from "@/assets/Icons.vue";
import checkScreen from "@/mixins/checkScreen";

export default {
  name: "NavBar",
  data() {
    return {
      mobileNav: null,
    };
  },
  mixins: [checkScreen],
  components: {
    icon,
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<template>
  <header>
    <nav class="nav animate-nav">
      <div id="nav_bg" class="nav__section limiter">
        <div class="nav__home">
          <router-link to="/" class="links logo-container" data-link>
            <icon name="logo" class="logo" />
            Lottielab
          </router-link>
          <router-link
            to="/join-us"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
            >Join Us</router-link
          >
          <router-link
            to="/blogs"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
          >
            Blog
          </router-link>
          <router-link
            to="/community"
            class="links links-spaced"
            v-show="!mobile"
            data-link
            id="nav_link"
            >Community</router-link
          >
        </div>
        <ul v-show="!mobile" class="nav__routes" data-link>
          <router-link
            to="/sign-in"
            data-link
            id="nav_link"
            class="links links-spaced"
            >Sign In</router-link
          >
          <router-link
            to="/sign-up"
            data-link
            id="nav_link"
            class="sign-up links links-spaced"
            >Sign Up for Free</router-link
          >
        </ul>
        <button @click="toggleMobileNav" v-show="mobile">
          <icon name="menu" class="nav__mobile" id="nav_icon" />
        </button>
        <transition name="mobile-nav">
          <ul class="mobile-nav" v-show="mobileNav">
            <router-link to="/join-us" class="link">Join Us</router-link>
            <router-link to="/blogs" class="link"> Blog </router-link>
            <router-link to="/community" class="link">Community</router-link>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  --navigation: clamp(4.49rem, 1.08rem + 7.05vw, 6.1rem);
  align-content: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  // border-radius: var(--step--5);
  // padding: var(--step--4);
  background: rgba(238, 239, 243, 0.2);
  box-shadow: -12px 12px 59.0507px rgba(92, 97, 124, 0.02);
  backdrop-filter: blur(16px);

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

  #nav__bg {
    border-radius: var(--step--5);
  }

  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    padding-inline: var(--step-3);
    // border-radius: var(--step--5);
  }
  &__home {
    width: max-content;
    display: flex;
    align-items: center;
    width: max-content;
    display: flex;
    justify-content: flex-end;
    gap: var(--step--3);

    a {
      &:hover {
        background: rgb(225, 228, 240, 0.5);
      }
    }
    a:first-child {
      &:hover {
        background: none;
      }
    }

    .logo-container {
      display: flex;
      gap: var(--step--4);
      align-items: center;
      font-weight: var(--semi-bold);
      .logo {
        color: var(--dark);
        transform: scale(0.8);
        width: 37px !important;

        svg {
          width: 37px !important;
        }
      }
    }
  }

  &__routes {
    width: max-content;
    display: flex;
    justify-content: flex-end;
    gap: var(--step-0);
    transition: color 50ms ease;

    a {
      &:hover {
        background: rgb(225, 228, 240, 0.5);
      }
    }

    a:last-child {
      background: var(--dark);
      color: var(--primary) !important;

      &:hover {
        color: #ffb92a !important;
      }
    }
  }

  &__mobile {
    width: var(--step-0);
  }
  .logo-container {
    padding-inline: 0rem;
  }
  a {
    font-size: 14px;
    font-weight: var(--medium);
    padding-inline: var(--step-0);
    padding-block: var(--step--4);
    transition: all 200ms ease-out;
    border-radius: var(--step--4);
    display: inline-block;
    position: relative;
    color: var(--dark);
  }
  .mobile-nav {
    padding-block: var(--step-0);
    width: 100%;
    max-width: calc(250px - var(--step-0));
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background: #2b2b2b;
    padding-inline: var(--step--3);
    top: 0;
    left: 0;

    a {
      color: white;
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 300ms ease-in-out;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
>
