import {createApp} from 'https://unpkg.com/petite-vue?module';

const contactApp = createApp({
   errors: {},
   completed: false,
   fields: {
      name: {
         id: 'name',
         element: 'input',
         type: 'text',
         label: 'Namn',
         required: true,
         error: 'Namnet saknas - vänligen ange detta.',
         rule: /^.{2,}$/,
      },
      company: {
         id: 'company',
         element: 'input',
         type: 'text',
         label: 'Företag',
      },
      email: {
         id: 'email',
         element: 'input',
         type: 'email',
         required: true,
         label: 'E-postadress',
         error: 'Kontrollera att e-postadressen är giltig!',
         rule: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      phone: {
         id: 'phone',
         element: 'input',
         type: 'text',
         required: true,
         label: 'Telefonnummer',
         error: 'Vi behöver ha ditt telefonnummer för att komma i kontakt med dig!',
         rule: /^[0-9]{2,4}-?[0-9]{6,8}$/,
      },
      message: {
         id: 'message',
         element: 'textarea',
         required: true,
         label: 'Ditt meddelande',
         error: 'Vänligen ange din frågeställning ovan (minst 25 tecken)',
         rule: /^.{25,}$/,
      },
   },

   getFields() {
      let fields = [];
      for (let [_, data] of Object.entries(this.fields)) fields.push(data);
      return fields;
   },

   lastInput: {},
   
   trackInput({ target })
   {
      if (!this.fields[target.name].required) return;
      
      this.lastInput[target.name] = Date.now();

      setTimeout(() => {
         let now = Date.now();
         if (now - (this.lastInput[target.name] ?? 0) > 500) {
            this.validate(target);
         }
      }, 500);
   },

   validate({name, value}) {
      if (this.fields[name].required) {
         this.errors[name] = !this.fields[name].rule.test(value) ? this.fields[name].error : null;
      }
   },

   validateForm(form) {
      let input = new FormData(form);
      for (let name of input.keys()) {
         this.validate({name, value: input.get(name)});
      }

      for (let [_, error] of Object.entries(this.errors)) {
         if (error != null) return false;
      }

      window.scrollTo(0, 0);
      return true;
   },

   submit({target}) {
      this.completed = this.validateForm(target);
      if (this.completed == true) {
         setTimeout(() => (this.completed = false), 5000);
      }
   },
});

contactApp.mount('#content_contact');
