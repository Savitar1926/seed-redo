<script>
export default {
  name: "CenterAnimation",
  components: {},
};
</script>
<template>
  <div class="zoom container-center-animation animate-lead limiter" style="">
    <div class="center-animation">
      <div class="center-lottie">
        <img
          src="https://i.pinimg.com/originals/44/d3/cb/44d3cb171c571b949242bb57603bc88f.png"
          alt=""
        />
      </div>
    </div>
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

  .center-animation {
    background-color: white;
    height: 100%;
    width: 100%;
    border-radius: var(--step-0);
    color: white;
    overflow: hidden;
    box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
    -webkit-box-shadow: 4px 16px 32px rgba(207, 208, 235, 0.32);
    -moz-box-shadow: 34px 16px 32px rgba(207, 208, 235, 0.32);
    border: solid white 8px;
    > .center-lottie {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--step-0);
      transform: scale(2);
      aspect-ratio: 16 / 9;

      > img {
        width: 1080px;
        height: 1920px;
        object-fit: contain;
      }
    }
  }
}
</style>
