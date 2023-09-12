PetiteVue.createApp({
   page: 1,
   pages: [
      1,2,3,4,5
   ],

   increment() {
      this.page++;
   },
   
   decrement() {
      this.page--;
   }
}).mount('#app');
