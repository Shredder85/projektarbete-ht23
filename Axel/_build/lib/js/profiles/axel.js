import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const projects4 = reactive({
  data: [],

  async load() {
    this.data = await (await fetch("projects/axel.json")).json();
  },
});

const profileprojects4 = createApp({
  projects: projects4,
});

profileprojects4.mount("#content_employee_4");
projects4.load();
