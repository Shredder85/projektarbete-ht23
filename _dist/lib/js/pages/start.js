import { createApp } from "https://unpkg.com/petite-vue?module";

const startpageApp = createApp({
  services: [
    {
      src: "images/content-management-system.png",
      headline: "System",
      content: "Vi skapar informationssystem som gör skillnad på alla nivåer.",
    },
    {
      src: "images/devops.png",
      headline: "DevOps",
      content: "Vi omvandlar tekniska utmaningar till framgångssagor varje dag.",
    },
    {
      src: "images/hack.png",
      headline: "Security",
      content: "Säkerhet är vår passion, och vi skyddar din digitala värld.",
    },
    {
      src: "images/data-mining.png",
      headline: "Data Mining",
      content:
        "Data är vår råvara, och insikterna vi genererar förändrar spelplanen.",
    },
  ],
  gallery: [
    { image: "images/slide1.png" },
    { image: "images/slide2.png" },
    { image: "images/slide3.png" },
  ],
  currentImageIndex: 0,
});

startpageApp.mount("#content_start");
