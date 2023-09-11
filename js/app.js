let App = new Vue({
  el: "#app",
  data() {
    return {
      darkMode: false,
      time: 5,
      counter: 0,
    };
  },
  methods: {
    lightTheme() {
      this.$refs.lightIcon.classList.add("hide-box");
      this.$refs.darkIcon.classList.remove("hide-box");
      this.darkMode = !this.darkMode;
    },
    darkTheme() {
      this.$refs.lightIcon.classList.remove("hide-box");
      this.$refs.darkIcon.classList.add("hide-box");
      this.darkMode = !this.darkMode;
    },
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        document.querySelector(":root").classList.add("dark");
      } else {
        document.querySelector(":root").classList.remove("dark");
      }
    },
  },
});
