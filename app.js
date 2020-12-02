const app = Vue.createApp({
  data() {
    return {
      showData: true,
      books: [
        { title: 'The Final Empire', author: 'Brandon Sanderson' },
        { title: 'The Way of Kings', author: 'Patrick Rofus' },
        { title: 'Harry Potter', author: 'J.K Rowling' },
      ],
    };
  },
  methods: {},
});

app.mount('#app');
