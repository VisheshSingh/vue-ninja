const app = Vue.createApp({
  data() {
    return {
      showData: true,
      title: 'Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
    };
  },
  methods: {
    toggleShow() {
      this.showData = !this.showData;
    },
  },
});

app.mount('#app');
