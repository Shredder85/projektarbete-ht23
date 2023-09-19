import {createApp} from 'https://unpkg.com/petite-vue?module';

const profileEmployee1 = createApp({
   skills: [
      {name: 'Ledarskap', percentage: 85},
      {name: 'Pappa-humor', percentage: 99},
      {name: 'Taktkänsla', percentage: 52},
      {name: 'Ödmjukhet', percentage: 5},
      {name: 'Programmering', percentage: 90},
   ],

   projects: null,

   loadProjects() {
      fetch('./projects/erik.json')
         .then(result => result.json())
         .then(data => this.projects = true)
         .catch((e) => console.error(e));
   },
});

profileEmployee1.mount('#content_employee_1');
