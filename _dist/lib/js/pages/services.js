import {createApp} from 'https://unpkg.com/petite-vue?module';

const servicesApp = createApp({
   products: [
      {
         name: 'System',
         icon: 'images/it-systems (1).png',
         description:
            'Design och hantering av hård- och mjukvarusystem för effektiv datahantering.',
         price: '1337$',
      },
      {
         name: 'Devops',
         icon: 'images/devops.png',
         description:
            'Automatisering av mjukvaruutveckling och driftsprocesser för snabbare och kontinuerlig mjukvaruleverans.',
         price: '1337$',
      },
      {
         name: 'Security',
         icon: 'images/elearning.png',
         description:
            'Skydd av digitala tillgångar och data mot cyberhot och incidenthantering.',
         price: '1337$',
      },
      {
         name: 'Software',
         icon: 'images/software.png',
         description:
            'Utveckling och underhåll av skräddarsydda programvarulösningar för specifika företagsbehov.',
         price: '1337$',
      },
   ],

   cart: [],

   addToCart(name) {
      for (let service of this.products) {
         if (service.name == name) {
            this.cart.push(service);
         }
      }
   },

   emptyCart() {
      this.cart = [];
   },
});

servicesApp.mount('#content_services');
