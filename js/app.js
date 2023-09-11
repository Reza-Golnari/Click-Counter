let App = new Vue({
  el: "#app",
  data() {
    return {
      darkMood: false,
      time: 5,
      counter: 0,
    };
  },
  methods: {
    lightTheme() {
      this.$refs.lightIcon.classList.add("hide-box");
      this.$refs.darkIcon.classList.remove("hide-box");
      this.darkMood = !this.darkMood;
    },
    darkTheme() {
      this.$refs.lightIcon.classList.remove("hide-box");
      this.$refs.darkIcon.classList.add("hide-box");
      this.darkMood = !this.darkMood;
    },
  },
  watch: {
    darkMood() {
      if (this.darkMood) {
        document.querySelector(":root").classList.add("dark");
      } else {
        document.querySelector(":root").classList.remove("dark");
      }
    },
  },
});
