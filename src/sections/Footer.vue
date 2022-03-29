<script>
import icon from "@/assets/Icons.vue";

export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {
    icon,
  },
  mounted() {},
};
</script>

<template>
  <div class="footer position-lift limiter">
    <div>
      <div>
        <router-link to="/"> <icon name="logo" class="logo" /></router-link>
        <router-link class="header-link" to="/" id="nav_link"
          >LottieLab</router-link
        >
      </div>
      <span style="color: #585858"
        >© 2022 LottieLab Ltd. <br />
        All rights reserved.</span
      >
    </div>
    <div class="links">
      <div>
        <router-link class="header-link" to="/" id="nav_link"
          >Usecases</router-link
        >
        <a href="/">Icon Animation</a>
        <a href="/">Website Hero</a>
        <a href="/">Onboarding</a>
        <a href="/">Progression</a>
        <a href="/">Agencies</a>
        <a href="/">Templates</a>
      </div>
      <div>
        <router-link class="header-link" to="/" id="nav_link"
          >Resources</router-link
        >
        <a href="/">Blog</a>
        <a href="/">Join our Community</a>
        <a href="/">Built with Lottielab</a>
        <a href="/">What is Lottie?</a>
      </div>
      <div>
        <router-link class="header-link" to="/" id="nav_link"
          >Company</router-link
        >
        <a href="/">About Us</a>
        <a href="/">Join Us</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Use</a>
        <a href="/">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  color: var(--primary);
  padding-inline: var(--step-4);
  padding-block: var(--step-6);
  display: flex;
  flex-direction: row;
  gap: var(--step-0);
  justify-content: space-between;
  margin: auto;

  .header-link {
    font-size: var(--step--1);
    font-weight: var(--semi-bold);
    color: var(--primary);
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: var(--step-4);
    text-align: start;

    div {
      display: flex;
      flex-direction: column;
      gap: var(--step--1);
      align-items: flex-start;
      a:not(:first-child) {
        color: white;
        font-size: var(--step--4);
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--step--2);
  }

  & > div > div {
    display: flex;
    align-items: center;
    // gap: var(--step-0);

    .logo {
      color: var(--dark);
      width: var(--step-2);
    }
  }
}
@media (min-width: 980px) {
  .footer {
    align-items: flex-start;
  }
}
</style>
