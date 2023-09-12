document.addEventListener('DOMContentLoaded', () => {
   for (let element of document.getElementsByClassName(
      'js-faded-outside-view'
   )) {
      if (isInViewport(element)) {
         element.classList.add('js-fade-into-view');
      }

      window.addEventListener('scroll', () => updateVisibility(element));
      window.addEventListener('resize', () => updateVisibility(element));
   }
});

const updateVisibility = (element) => {
   if (isInViewport(element)) element.classList.add('js-fade-into-view');
   else element.classList.remove('js-fade-into-view');
};

const isInViewport = (element) => {
   return (
      element.getBoundingClientRect().top - 50 <
      (window.innerHeight ?? document.documentElement.clientHeight)
   );
};
