// import { createApp } from 'https://unpkg.com/petite-vue?module';

PetiteVue.createApp({
  images: [
    { image: '../images/slide1.png' },
    { image: '../images/slide2.png' },
    { image: '../images/slide3.png' },
  ],
  currentImageIndex: 0,

  
}).mount('#app');