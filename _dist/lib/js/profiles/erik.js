import {createApp, reactive} from 'https://unpkg.com/petite-vue?module';

let profileEmployee1_data = reactive({
   data: [],

   async load() {
      let rawJSON = await fetch('projects/erik.json');
      this.data = await rawJSON.json();
   },
});

const profileEmployee1 = createApp({
   skills: [
      {name: 'Ledarskap', percentage: 85},
      {name: 'Pappa-humor', percentage: 99},
      {name: 'Taktkänsla', percentage: 42},
      {name: 'Ödmjukhet', percentage: 5},
      {name: 'Programmering', percentage: 90},
   ],

   projects: profileEmployee1_data
});

profileEmployee1.mount('#content_employee_1');
await profileEmployee1_data.load();
