export default {
  methods: {
    qs(selector, parent = document) {
      return parent.querySelector(selector)
    },
    qsa(selector, parent = document) {
      return parent.querySelectorAll(selector)
    },
  },
}
