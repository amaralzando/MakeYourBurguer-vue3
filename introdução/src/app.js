const App = {
  data() {
    return {
      name: "",
      age: 30,
      input_name: ""
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.name = this.input_name;
    }
  },
}

Vue.createApp(App).mount("#app");