import {createApp} from 'https://unpkg.com/petite-vue?module';

const employeeApp = createApp({
   employees: [
      {
         name: 'Erik Riklund',
         role: 'Chief Technology Officer',
         email: 'erik.riklund@eace.se',
         image: 'images/Erik.png',
         pageId: 'page_employee_1'
      },
      {
         name: 'Charles Åkerstedt',
         role: 'Data Mining Engineer',
         email: 'charles.akerstedt@eace.se',
         image: 'images/Charles.png',
         pageId: 'page_employee_2'
      },
      {
         name: 'Emma Andersson',
         role: 'Fullstack Developer',
         email: 'emma.andersson@eace.se',
         image: 'images/Emma.png',
         pageId: 'page_employee_3'
      },
      {
         name: 'Axel Söderlund',
         role: 'Cyber Security Architect',
         email: 'axel.soderlund@eace.se',
         image: 'images/Axel.png',
         pageId: 'page_employee_4'
      }
   ],
});

employeeApp.mount('#content_employees');
