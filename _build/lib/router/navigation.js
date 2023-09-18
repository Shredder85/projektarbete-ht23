/**
 * En kompletteringsfunktion för menyn som aktiverar möjlighet
 * att styra menyn med tangentbordet om JavaScript är aktiverat.
 *
 * Den scrollar även upp sidan till toppen vid ett sidbyte.
 */

const scrollToTop = () => document.documentElement.scrollTo({top: 0});

document.addEventListener('DOMContentLoaded', () => {
   for (let label of document.getElementsByTagName('label')) {
      label.addEventListener('keyup', (event) => {
         if (event.key === 'Enter') {
            document
               .getElementById(label.getAttribute('for'))
               ?.setAttribute('checked', true);

            scrollToTop();
         }
      });

      label.addEventListener('click', () => scrollToTop());
   }
});
