let App = new Vue({
  el: "#app",
  data() {
    return {
      darkMode: false,
      time: 5,
      counter: 0,
      record: 0,
      interVal: null,
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
    clickHandler() {
      this.start();
      this.counter++;
    },
    start() {
      this.$refs.clickBtn.textContent = "Click";
      if (!this.interVal) {
        this.interVal = setInterval(() => {
          if (this.time) {
            this.time--;
          } else {
            this.end();
          }
        }, 1000);
      }
    },
    end() {
      this.$refs.clickBtn.textContent = "Click To Start";
      clearInterval(this.interVal);
      this.$refs.clickBtn.classList.add("disable");
      this.$refs.resultBox.classList.add("show");
      setTimeout(() => {
        this.$refs.clickBtn.classList.remove("disable");
        this.$refs.resultBox.classList.remove("show");
      }, 2000);
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
