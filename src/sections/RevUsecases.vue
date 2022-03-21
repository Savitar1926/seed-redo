<template>
  <div class="usecase-parent limiter-width">
    <div class="section section_left">
      <div class="container">
        <div class="col-1-left">
          <div class="section-title section__title">
            <h1>Animations for all scenarios</h1>
            <button class="full">
              Get Started with Templates
              <icon name="arrow" class="arrow" />
            </button>
          </div>
          <div class="usecase-hero card card--shadow">
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  HellHellHellHellHellHellHellHellHello
                </span>
                <span class="usecase-wrap usecase-filesize">
                  HellHellHellHellHellHellHellHellHello
                </span>
              </div>
            </div>
            <div class="usecase-lottie"></div>
            <!-- Usecase Content  -->
          </div>
        </div>
      </div>
    </div>
    <div class="section section_right">
      <div class="container">
        <div class="col-1">
          <div class="usecase-phone card card--shadow">
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  HellHellHellHellHellHellHellHellHello
                </span>
                <span class="usecase-wrap usecase-filesize">
                  HellHellHellHellHellHellHellHellHello
                </span>
              </div>
            </div>
            <div class="usecase-lottie"></div>
            <!-- Usecase Content  -->
          </div>
        </div>
        <div class="col-2">
          <div class="container-cases">
            <div class="usecase-loading_1 card card--shadow">
              <!-- Usecase Content  -->
              <div class="usecase-header">
                <icon name="edit" class="arrow" />
                <div class="usecase-title-container">
                  <span class="usecase-wrap usecase-title">
                    HellHellHellHellHellHellHellHellHello
                  </span>
                  <span class="usecase-wrap usecase-filesize">
                    HellHellHellHellHellHellHellHellHello
                  </span>
                </div>
              </div>
              <div class="usecase-lottie"></div>
              <!-- Usecase Content  -->
            </div>
            <div class="usecase-loading_2 card card--shadow">
              <!-- Usecase Content  -->
              <div class="usecase-header">
                <icon name="edit" class="arrow" />
                <div class="usecase-title-container">
                  <span class="usecase-wrap usecase-title">
                    HellHellHellHellHellHellHellHellHello
                  </span>
                  <span class="usecase-wrap usecase-filesize">
                    HellHellHellHellHellHellHellHellHello
                  </span>
                </div>
              </div>
              <div class="usecase-lottie"></div>
              <!-- Usecase Content  -->
            </div>
          </div>
          <div class="usecase-headphones card card--shadow">
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  HellHellHellHellHellHellHellHellHello
                </span>
                <span class="usecase-wrap usecase-filesize">
                  HellHellHellHellHellHellHellHellHello
                </span>
              </div>
            </div>
            <div class="usecase-lottie"></div>
            <!-- Usecase Content  -->
          </div>
          <div class="usecase-notification card card--shadow">
            <!-- Usecase Content  -->
            <div class="usecase-header">
              <icon name="edit" class="arrow" />
              <div class="usecase-title-container">
                <span class="usecase-wrap usecase-title">
                  HellHellHellHellHellHellHellHellHello
                </span>
                <span class="usecase-wrap usecase-filesize">
                  HellHellHellHellHellHellHellHellHello
                </span>
              </div>
            </div>
            <div class="usecase-lottie"></div>
            <!-- Usecase Content  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/assets/Icons.vue";

export default {
  components: {
    icon,
  },
};
</script>

<style lang="scss" scoped>
.usecase-parent {
  height: 100%;
  display: flex;
  gap: 32px;
  margin-inline: auto;

  .card {
    background: rgba(240, 242, 248, 0.9);
    backdrop-filter: blur(16px);
  }
  .usecase-header {
    display: flex;
    gap: 16px;
    align-items: center;
    .usecase-title {
      color: red;
      font-weight: var(--semi-bold);
    }
    .usecase-filesize {
      color: red;
      font-size: var(--step--5);
    }
    .usecase-title-container {
      display: flex;
      flex-direction: column;

      .usecase-wrap {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
      }
    }
  }
  .usecase-lottie {
    height: 100%;
    width: 100%;
    background: red;
    border-radius: var(--step-0);
  }

  .section {
    &_left {
      width: 50%;
      padding-left: var(--step-4);

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 710px;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          "."
          "col-1-left";
        height: 100%;
      }

      .col-1-left {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 544px;
        gap: 32px 32px;
        grid-auto-flow: row;
        grid-template-areas:
          "section-title"
          "usecase-hero";
        align-content: end;
        grid-area: col-1-left;

        .section-title {
          grid-area: section-title;
          button {
            gap: var(--step--4);
            align-items: center;
            height: max-content;
            color: var(--blue);

            .arrow {
              display: flex;
              stroke: var(--blue);
            }
          }
        }

        .usecase-hero {
          grid-area: usecase-hero;
        }
      }
    }
    &_right {
      width: 50%;

      .container {
        display: grid;
        grid-template-columns: 288px 1.2fr;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: 32px 32px;
        grid-auto-flow: row;
        height: 100%;
      }

      .col-1 {
        display: grid;
        grid-template-columns: 288px;
        grid-template-rows: 1fr 710px;
        gap: 0px 32px;
        grid-auto-flow: row;
        grid-template-areas:
          "."
          "usecase-phone";
        grid-area: 1 / 1 / 2 / 2;
        align-content: end;
      }

      .usecase-phone {
        grid-area: usecase-phone;
      }

      .col-2 {
        display: grid;
        grid-template-columns: 323px 1fr;
        grid-template-rows: 330px 295px 252px;
        gap: 32px 32px;
        grid-auto-flow: row;
        grid-template-areas:
          "usecase-headphones ."
          "container-cases ."
          "usecase-notification .";
        grid-area: 1 / 2 / 2 / 3;
      }

      .container-cases {
        display: grid;
        grid-template-columns: 295px 296px;
        grid-template-rows: 1fr;
        gap: 0px 32px;
        grid-auto-flow: row;
        grid-template-areas: "usecase-loading_1 usecase-loading_2";
        grid-area: container-cases;
      }

      .usecase-loading_1 {
        grid-area: usecase-loading_1;
      }

      .usecase-loading_2 {
        grid-area: usecase-loading_2;
      }

      .usecase-headphones {
        grid-area: usecase-headphones;
      }

      .usecase-notification {
        grid-area: usecase-notification;
      }
    }
  }
}
</style>