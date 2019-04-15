export default {
  install (Vue, options) {
    Vue.component('v-styler', {
      render: function (createElement) {
        return createElement('style', this.$slots.default)
      }
    })
  }
}
