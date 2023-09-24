/**
 * Uppdaterar det angivna elementets lista med CSS-klasser
 * relaterade till vår `scroll in`-transition.
 *
 * Den kontrollerar om elementets övre kant passerat viewportens botten,
 * och aktiverar eller avaktiverar klassen `js-fade-into-view`.
 */

const updateVisibility = (element) => {
  const isVisible = isInViewport(element);

  if (
    (isVisible && !element.classList.contains("js-fade-into-view")) ||
    (!isVisible && element.classList.contains("js-fade-into-view"))
  ) {
    element.classList.toggle("js-fade-into-view");
  }
};

/**
 * Uppdaterar ett element med vår skillbar-animation.
 *
 * Om elementet scrollats in (oavsett riktning) körs animationen
 * och när elementet försvinner ur bild nollställs den.
 */

const updateAnimation = (element) => {
  const isVisible = isAnimatable(element);

  if (
    (isVisible && !element.classList.contains("load-bar-animation")) ||
    (!isVisible && element.classList.contains("load-bar-animation"))
  ) {
    element.classList.toggle("load-bar-animation");
  }
};

/**
 * Kontrollerar om elementet är på väg att scrollas in eller ut ur viewporten.
 * (Baseras på elementets övre kant och dess position relaterat till viewportens nedre kant.)
 */

const isInViewport = (element) => {
  const position = element.getBoundingClientRect();
  const clientHeight =
    window.innerHeight ?? document.documentElement.clientHeight;

  return (
    position.top - 50 < clientHeight && !(position.top > clientHeight - 100)
  );
};

/**
 * Kontrollerar om ett element har scrollats ut helt och hållet i bild.
 */

const isAnimatable = (element) => {
  const { top, bottom } = element.getBoundingClientRect();

  return (
    bottom > document.getElementsByTagName("header")[0].offsetHeight &&
    top < (window.clientHeight ?? document.documentElement.clientHeight)
  );
};

/**
 * Här skapar vi en listener som kommer att köras när HTML-koden har lästs in helt och hållet.
 */

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Vi fäster event listeners för alla element som har klassen `js-faded-outside-view`.
   * Detta gör att de får vår `fade in`-transition när de scrollas in och ut ur bild.
   */

  for (let element of document.getElementsByClassName(
    "js-faded-outside-view"
  )) {
    if (isInViewport(element)) {
      element.classList.add("js-fade-into-view");
    }

    window.addEventListener("resize", () => updateVisibility(element));
    window.addEventListener("scroll", () => updateVisibility(element));
    window.addEventListener("click", () => updateVisibility(element));
    window.addEventListener("keyup", () => updateVisibility(element));
  }

  /**
   * Vi fäster event listeners för alla element som har klassen `animated-bar`.
   * Detta gör att deras animation nollställs varje gång de visas i bild.
   */

  for (let element of document.getElementsByClassName("animated-bar")) {
    if (isAnimatable(element)) {
      element.classList.add("load-bar-animation");
    }

    window.addEventListener("resize", () => updateAnimation(element));
    window.addEventListener("scroll", () => updateAnimation(element));
    window.addEventListener("click", () => updateAnimation(element));
    window.addEventListener("keyup", () => updateAnimation(element));
  }
});
