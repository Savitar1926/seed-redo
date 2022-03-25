<script>
export default {
  name: "CenterAnimation",
  components: {},
};
</script>
<template>
  <div class="zoom container-center-animation animate-lead limiter" style="">
    <div class="center-animation card card--light card--shadow"></div>
  </div>
</template>

<style lang="scss" scoped>
.container-center-animation {
  z-index: 2;
  align-self: center;
  height: 608px;
  width: 100%;
  border-radius: 16px;
  padding-inline: var(--step-4);
}
</style>
