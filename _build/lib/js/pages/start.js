import {createApp} from 'https://unpkg.com/petite-vue?module';

const startpageApp = createApp({
   images: [
      {
         src: 'images/it-systems (1).png',
         headline: 'SYSTEM',
         content: 'Vi är bäst på IT-system!',
      },
      {
         src: 'images/devops.png',
         headline: 'DEVOPS',
         content: 'Vi är bäst på devops!',
      },
      {
         src: 'images/elearning.png',
         headline: 'SECURITY',
         content: 'Vi är bäst på cyber security!',
      },
      {
         src: 'images/software.png',
         headline: 'SOFTWARE',
         content: 'Vi är bäst på software!',
      },
   ],
});

startpageApp.mount('#content_start');
