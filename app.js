const app = Vue.createApp({
  data() {
    return {
      showData: true,
      title: 'Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    onMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
