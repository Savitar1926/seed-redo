<template>
  <div class="main_interactive">
    <div class="title_content">
      <div class="title_container">
        <h1>
          Make it <br />
          interactive.
        </h1>
        <span class="details">
          Collaborate on files together and break out of the After Effects silo. Keep<br />
          designers, developers and product managers on the same page. No more
          <br />
          emailing folders or sharing files on G-Drive.</span
        >
        <button>Coming Soon</button>
      </div>

      <div class="container">
        <div class="des_1 box_layout">
          <h2>State-based animations</h2>
          <span class="details"
            >New to product animations or know your way around - no worries -</span
          >
        </div>
        <div class="des_1 box_layout">
          <h2>Runtime adjustable</h2>
          <span class="details">
            New to product animations or know your way around - no worries -
          </span>
        </div>
      </div>
    </div>
    <div class="animation_sample">
      <div class="container_1">
        <div class="case_2">
          <lottie-interactive
            path="https://assets7.lottiefiles.com/packages/lf20_yk9x7fal.json"
            autoplay
            class="sample"
            loop
          />
        </div>
      </div>
      <div class="container_2">
        <div class="case_1">
          <lottie-interactive
            path="https://assets7.lottiefiles.com/packages/lf20_yk9x7fal.json"
            autoplay
            class="sample"
            loop
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForEveryone",
  components: {},
};
</script>

<style lang="scss" scoped>
.main_interactive {
  padding: var(--96);
  position: inherit;
  z-index: 3;
  display: flex;
  gap: var(--step-0);

  .title_content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--step-0);
    color: var(--primary);

    .title_container {
      display: flex;
      flex-direction: column;
      gap: var(--step-0);
    }

    .details {
      font-size: var(--16);
      line-height: var(--step-1);
    }

    h1 {
      font-size: var(--64);
      line-height: var(--72);
      margin: 0;
    }
    button {
      display: flex;
      font-weight: var(--semi-bold);
      font-size: var(--step-0);
      line-height: var(--40);
      color: var(--teal);
      border: none;
      background: none;
      text-align: start;
    }

    .container {
      display: flex;
      gap: var(--step-0);
    }
    .des_1 {
      padding: var(--96);

      h2 {
        margin: 0;
        font-size: var(--40);
        line-height: var(--48);
      }
    }
    .box_layout {
      padding: var(--40);
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: var(--step-0);
      justify-content: center;
      background: rgba(43, 43, 43, 0.5);
      border-radius: var(--step-0);
      box-shadow: 8px 24px 32px rgba(35, 36, 41, 0.32);
      -webkit-box-shadow: 8px 24px 32px rgba(35, 36, 41, 0.32);
      -moz-box-shadow: 8px 24px 32px rgba(35, 36, 41, 0.32);
    }
  }
  .animation_sample {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 32px 32px;
    grid-auto-flow: row dense;
    grid-template-areas: "container_1 container_2";
  }

  .container_1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "case_2 case_2 case_2"
      "case_2 case_2 case_2"
      ". . .";
    grid-area: container_1;
  }

  .case_2 {
    grid-area: case_2;
    background: #ffffff;
    border-radius: var(--step-0);
  }

  .container_2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      "case_1 case_1 case_1"
      "case_1 case_1 case_1";
    grid-area: container_2;
  }

  .case_1 {
    grid-area: case_1;
    background: #ffffff;
    border-radius: var(--step-0);
  }
}
</style>
