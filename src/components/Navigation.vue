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
  align-content: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  border-radius: var(--step--5);
  padding: var(--step--4);

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
    margin-inline: var(--step-1);
    width: 100%;
    background: rgba(238, 239, 243, 0.2);
    box-shadow: -12px 12px 59.0507px rgba(92, 97, 124, 0.02);
    padding-inline: var(--step--3);
    border-radius: var(--step--5);
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
      &:hover {
        opacity: 0.1;
        background: rgb(225, 228, 240, 0.5);
      }
    }
    a:first-child {
      &:hover {
        opacity: 0.1;
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
      }
    }
  }

  &__routes {
    width: max-content;
    display: flex;
    justify-content: end;
    gap: var(--step-0);
    transition: color 50ms ease;

    a {
      &:hover {
        opacity: 0.1;
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

    @media (max-width: 500px) {
      &:first-child {
        padding-inline: 0rem;
      }
    }
  }
}
</style>
>
