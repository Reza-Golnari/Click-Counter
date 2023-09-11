let App = new Vue({
  el: "#app",
  data() {
    return {
      darkMode: false,
      time: 5,
      mainTime: 0,
      counter: 0,
      record: 0,
      interVal: null,
      balance: 0,
    };
  },
  methods: {
    lightTheme() {
      this.$refs.lightIcon.classList.add("hide-box");
      this.$refs.darkIcon.classList.remove("hide-box");
      this.darkMode = true;
      document.querySelector(":root").classList.remove("dark");
      localStorage.setItem("theme", this.darkMode);
    },
    darkTheme() {
      this.$refs.lightIcon.classList.remove("hide-box");
      this.$refs.darkIcon.classList.add("hide-box");
      this.darkMode = false;
      document.querySelector(":root").classList.add("dark");
      localStorage.setItem("theme", this.darkMode);
    },
    clickHandler() {
      this.start();
      this.counter++;
    },
    start() {
      this.$refs.clickBtn.textContent = "Click";
      if (!this.interVal) {
        this.mainTime = this.time;
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
      this.balance = (+this.counter / +this.mainTime).toFixed(2);
      clearInterval(this.interVal);
      this.$refs.clickBtn.classList.add("disable");
      this.$refs.resultBox.classList.add("show");
      this.$refs.counterBox.classList.add("blur");
      setTimeout(() => {
        this.$refs.clickBtn.classList.remove("disable");
        this.$refs.resultBox.classList.remove("show");
        this.$refs.counterBox.classList.remove("blur");
        this.counter = 0;
        this.time = 5;
        this.interVal = null;
      }, 5000);
    },
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
      } else {
      }
    },
  },
  mounted() {
    if (localStorage.getItem("theme")) {
      this.darkMode = localStorage.getItem("theme");
      console.log(this.darkMode);
      if (this.darkMode == "false") {
        this.darkTheme();
      } else {
        this.lightTheme();
      }
    }
    if (localStorage.getItem("record")) {
      this.record = localStorage.getItem("record");
    }
  },
});
