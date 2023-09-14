document.addEventListener('DOMContentLoaded', () => {
   for (let element of document.getElementsByClassName(
      'js-faded-outside-view'
   )) {
      if (isInViewport(element)) {
         element.classList.add('js-fade-into-view');
      }

      window.addEventListener('click', () => updateVisibility(element));
      window.addEventListener('resize', () => updateVisibility(element));
      window.addEventListener('scroll', () => updateVisibility(element));
      window.addEventListener('keyup', () => updateVisibility(element));
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
   const clientHeight =
      window.innerHeight ?? document.documentElement.clientHeight;

   return (
      position.top - 50 < clientHeight + 75 && !(position.top > clientHeight - 75)
   );
};
