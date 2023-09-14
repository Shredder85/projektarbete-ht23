import {createApp} from 'https://unpkg.com/petite-vue?module';

const startpageApp = createApp({
   images: [
      {
         src: 'images/it-systems (1).png',
         headline: 'SYSTEM',
         content: 'Vi skapar informationssystem som gör skillnad på alla nivåer',
      },
      {
         src: 'images/devops.png',
         headline: 'DEVOPS',
         content: 'Vi omvandlar tekniska utmaningar till framgångssagor varje dag',
      },
      {
         src: 'images/elearning.png',
         headline: 'SECURITY',
         content: 'Säkerhet är vår passion, och vi skyddar din digitala värld',
      },
      {
         src: 'images/software.png',
         headline: 'DATA MINING',
         content: 'Data är vår råvara, och insikterna vi genererar förändrar spelplanen',
      },
   ],
});

startpageApp.mount('#content_start');
