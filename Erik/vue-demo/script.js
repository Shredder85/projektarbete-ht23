import {createApp} from 'https://unpkg.com/petite-vue?module';

const app = createApp({
   products: [
      {id: 1, name: 'King Edward', type: 'Mjölig'},
      {id: 2, name: 'Melody', type: 'Fast'},
   ],

   cart: [],

   addToCart(id) {
      for(let potato of this.products) {
         if(potato.id == id) {
            this.cart.push(potato);
         }
      }

      console.log('kundvagn', this.cart);
   }
});

app.mount('#shopping');