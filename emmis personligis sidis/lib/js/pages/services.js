import {createApp} from 'https://unpkg.com/petite-vue?module';

const servicesApp = createApp({
   products: [
      {
         name: 'System',
         icon: 'images/it-systems (1).png',
         description:
            'Design och hantering av hård- och mjukvarusystem för effektiv datahantering.',
         price: 'Från 10 000 SEK',
      },
      {
         name: 'Devops',
         icon: 'images/devops.png',
         description:
            'Automatisering av mjukvaruutveckling och driftsprocesser för snabbare och kontinuerlig mjukvaruleverans.',
         price: 'Från 15 000 SEK',
      },
      {
         name: 'Security',
         icon: 'images/elearning.png',
         description:
            'Skydd av digitala tillgångar och data mot cyberhot och incidenthantering.',
         price: 'Från 20 000 SEK',
      },
      {
         name: 'Software',
         icon: 'images/software.png',
         description:
            'Utveckling och underhåll av skräddarsydda programvarulösningar för specifika företagsbehov.',
         price: 'Från 30 000 SEK',
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
