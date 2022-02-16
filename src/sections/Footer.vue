<script>
// import LottieAnimation from "lottie-web-vue";
import icon from "@/assets/Icons.vue";

export default {
  name: "StartUsing",
  data() {
    return {};
  },
  components: {
    // LottieAnimation,
    icon,
  },
  mounted() {},
};
</script>

<template>
  <div class="footer position-lift">
    <div>
      <router-link to="/"> <icon name="logo" class="logo" /></router-link>
      <router-link to="/" id="nav_link">LottieLab</router-link>
    </div>
    <span>© 2022 LottieLab Ltd. All rights reserved.</span>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  color: var(--primary);
  // transform: scale(0.88);
  padding-inline: var(--step-4);
  padding-block: var(--step-6);
  display: flex;
  flex-direction: column;
  gap: var(--step-0);
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: var(--step-0);
    a {
      font-size: var(--step-0);
      font-weight: var(--semi-bold);
      color: var(--primary);
    }

    .logo {
      color: var(--dark);
      width: var(--step-3);
    }
  }
}
@media (min-width: 980px) {
  .footer {
    align-items: flex-start;
  }
}
</style>
