
const updateVisibility = (element) =>
{
   const isVisible = isInViewport(element);

   if ( (isVisible && !element.classList.contains('js-fade-into-view')) || (!isVisible && element.classList.contains('js-fade-into-view')))
   {
      element.classList.toggle('js-fade-into-view');
   }
};

const updateAnimation = (element) => {
   const isVisible = isInViewport(element) && !isScrolledOut(element);

   if ( (isVisible && !element.classList.contains('load-bar-animation')) || (!isVisible && element.classList.contains('load-bar-animation'))) {
      element.classList.toggle('load-bar-animation');
   }
}

const isInViewport = (element) =>
{
   const position = element.getBoundingClientRect();
   const clientHeight = window.innerHeight ?? document.documentElement.clientHeight;

   return (
      position.top - 50 < clientHeight && !(position.top > clientHeight - 100)
   );
};

const isScrolledOut = (element) => {
   const {bottom} = element.getBoundingClientRect();
   return bottom - 128 < 0;
}

document.addEventListener('DOMContentLoaded', () =>
{
   for (let element of document.getElementsByClassName('js-faded-outside-view'))
   {
      if (isInViewport(element)) {
         element.classList.add('js-fade-into-view');
      }

      let className = 'js-fade-into-view';
      window.addEventListener('click', () => updateVisibility(element));
      window.addEventListener('resize', () => updateVisibility(element));
      window.addEventListener('scroll', () => updateVisibility(element));
      window.addEventListener('keyup', () => updateVisibility(element));
   }

   for (let element of document.getElementsByClassName('animated-bar'))
   {
      if (isInViewport(element)) {
         element.classList.add('load-bar-animation');
      }

      let className = 'load-bar-animation';
      window.addEventListener('resize', () => updateAnimation(element));
      window.addEventListener('scroll', () => updateAnimation(element));
   }
});
