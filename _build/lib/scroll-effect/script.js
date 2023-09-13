document.addEventListener('DOMContentLoaded', () => {
   for (let element of document.getElementsByClassName(
      'js-faded-outside-view'
   )) {
      if (isInViewport(element)) {
         element.classList.add('js-fade-into-view');
      }

      window.addEventListener('resize', () => updateVisibility(element));
      window.addEventListener('scroll', () => updateVisibility(element));
   }
});

const updateVisibility = (element) => {
   const isVisible = isInViewport(element);

   if (
      (isVisible && !element.classList.contains('js-fade-into-view')) ||
      (!isVisible && element.classList.contains('js-fade-into-view'))
   ) {
      element.classList.toggle('js-fade-into-view');
   }
};

const isInViewport = (element) => {
   const position = element.getBoundingClientRect();
   return (
      position.top - 75 <
      (window.innerHeight ?? document.documentElement.clientHeight)
   );
};
