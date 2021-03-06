const app = Vue.createApp({
  data() {
    return {
      showAllBooks: true,
      showFavBooks: false,
      url: 'http://www.thenetninja.co.uk',
      books: [
        {
          title: 'The Name of wind',
          author: 'Patrick Rofus',
          img: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'The Way of Kings',
          author: 'B. Sanders',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'The Final Empire',
          author: 'Brandon Sanderson',
          img: 'assets/3.jpg',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    showAll() {
      this.showAllBooks = true;
      this.showFavBooks = false;
    },
    showFav() {
      this.showAllBooks = false;
      this.showFavBooks = true;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
