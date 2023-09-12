import { createApp } from 'https://unpkg.com/petite-vue?module';

const app = createApp({
  images: [
    { image: '/images/slide1.png' },
    { image: '/images/slide2.png' },
    { image: '/images/slide3.png' },
  ],
  currentImageIndex: 0,
});

app.mount('#app');