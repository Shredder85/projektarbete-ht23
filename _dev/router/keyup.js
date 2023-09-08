document.addEventListener('DOMContentLoaded', () => {
   for (let label of document.getElementsByTagName('label')) {
      label.addEventListener('keyup', (event) => {
         if (event.key === 'Enter') {
            document
               .getElementById(label.getAttribute('for'))
               ?.setAttribute('checked', true);
         }
      });
   }
});
