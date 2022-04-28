<template>
  <div class="parent">
    <div id="HERO_PATTERN_rotate" class="limiter">
      <div class="diamond_1"></div>
      <div class="diamond_2"></div>
      <div class="diamond_3"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.parent {
  overflow-x: hidden;
  position: relative;
  height: 300vh;
  width: 100vw;
}

@media (max-width: 390px) {
  .parent {
    transform-origin: top;
    transform: scale(1.95);
  }
}
#HERO_PATTERN_rotate {
  width: 50%;
  position: absolute;
  transform: rotate(45deg) translateX(125%);
  margin-top: -50%;
}

.diamond_1 {
  position: absolute;
  width: 100vw;
  height: 100vw;
  border-radius: 22.35vw;
  border: clamp(0.06rem, calc(0.01rem + 0.24vw), 0.19rem) solid #e1e4f0;
  margin: 0px auto;
  -webkit-animation: anim_pattern_diamond_1 4s ease infinite;
  -moz-animation: anim_pattern_diamond_1 4s ease infinite;
  -o-animation: anim_pattern_diamond_1 4s ease infinite;
  animation: anim_pattern_diamond_1 4s ease infinite;
}

.diamond_2 {
  position: absolute;
  width: 62.5vw;
  height: 62.5vw;
  border-radius: 14.15vw;
  border: clamp(0.06rem, calc(0.01rem + 0.24vw), 0.19rem) solid #e1e4f0;
  left: 20vw;
  top: 20vw;
  -webkit-animation: anim_pattern_diamond_2 4s ease 350ms infinite;
  -moz-animation: anim_pattern_diamond_2 4s ease 350ms infinite;
  -o-animation: anim_pattern_diamond_2 4s ease 350ms infinite;
  animation: anim_pattern_diamond_2 4s ease 350ms infinite;
}

.diamond_3 {
  position: absolute;
  width: 24.86vw;
  height: 24.86vw;
  border-radius: 5.68vw;
  border: clamp(0.06rem, calc(0.01rem + 0.24vw), 0.19rem) solid #e1e4f0;
  left: 40vw;
  top: 40vw;
  -webkit-animation: anim_pattern_diamond_3 4s ease 600ms infinite;
  -moz-animation: anim_pattern_diamond_3 4s ease 600ms infinite;
  -o-animation: anim_pattern_diamond_3 4s ease 600ms infinite;
  animation: anim_pattern_diamond_3 4s ease 600ms infinite;
}

@-webkit-keyframes anim_pattern_diamond_1 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-webkit-keyframes anim_pattern_diamond_2 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-webkit-keyframes anim_pattern_diamond_3 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@-moz-keyframes anim_pattern_diamond_1 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-moz-keyframes anim_pattern_diamond_2 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-moz-keyframes anim_pattern_diamond_3 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@-o-keyframes anim_pattern_diamond_1 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-o-keyframes anim_pattern_diamond_2 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@-o-keyframes anim_pattern_diamond_3 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@keyframes anim_pattern_diamond_1 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@keyframes anim_pattern_diamond_2 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
@keyframes anim_pattern_diamond_3 {
  0% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -o-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  50% {
    -webkit-transform: scale(0.95, 0.95);
    -moz-transform: scale(0.95, 0.95);
    -o-transform: scale(0.95, 0.95);
    transform: scale(0.95, 0.95);
  }

  75% {
    -webkit-transform: scale(1.02, 1.02);
    -moz-transform: scale(1.02, 1.02);
    -o-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
  }

  100% {
    -webkit-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
</style>