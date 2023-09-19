import { createApp } from "https://unpkg.com/petite-vue?module";

const startpageApp = createApp({
  images: [
    {
      src: "images/it-systems (1).png",
      headline: "System",
      content: "Vi skapar informationssystem som gör skillnad på alla nivåer.",
    },
    {
      src: "images/devops.png",
      headline: "DevOps",
      content: "Vi omvandlar tekniska utmaningar till framgångssagor varje dag.",
    },
    {
      src: "images/elearning.png",
      headline: "Security",
      content: "Säkerhet är vår passion, och vi skyddar din digitala värld.",
    },
    {
      src: "images/software.png",
      headline: "Data Mining",
      content:
        "Data är vår råvara, och insikterna vi genererar förändrar spelplanen.",
    },
  ],
  imagez: [
    { image: "images/slide1.png" },
    { image: "images/slide2.png" },
    { image: "images/slide3.png" },
  ],
  currentImageIndex: 0,
});

startpageApp.mount("#content_start");
