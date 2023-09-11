import {createApp} from 'https://unpkg.com/petite-vue?module';

// kontaktformulär

createApp({
   error: null,
   completed: false,
   required: ['name', 'email', 'phone', 'message'],
   
   validate({target}) {
      
   }
}).mount('#content_contact');

// varukorg

createApp({}).mount('#content_services');
