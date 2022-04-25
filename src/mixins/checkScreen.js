export default {
    data() {
    return {
      mobile: null,
      windownWidth: null,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen()
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  destroyed() {
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth
      if (this.windownWidth <= 950) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    }
  },
}
