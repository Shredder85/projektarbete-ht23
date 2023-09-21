import {createApp, reactive} from 'https://unpkg.com/petite-vue?module';

let profileEmployee1_data = reactive({
   data: [],

   async load() {
      this.data = await (await fetch('projects/erik.json')).json();
   },
});

const profileEmployee1 = createApp({
   skills: [
      {name: 'Ledarskap', percentage: 85},
      {name: 'Programmering', percentage: 90},
      {name: 'Pappa-humor', percentage: 99},
      {name: 'Design', percentage: 25},
      
      {name: 'Taktkänsla', percentage: 42},
      {name: 'Ödmjukhet', percentage: 5},
   ],

   projects: profileEmployee1_data,
});

profileEmployee1.mount('#content_employee_1');
profileEmployee1_data.load();
