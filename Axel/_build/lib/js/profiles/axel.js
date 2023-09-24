import { createApp } from "https://unpkg.com/petite-vue?module";

let projectcards = createApp({
  projects: [],

  mounted() {
    fetch("projects/axel.json")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(err.message));
  },
});

//projectcards.mount("#content_employee_4");
//await projectcards.load();
