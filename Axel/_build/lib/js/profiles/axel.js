//import { createApp reactive} from "https://unpkg.com/petite-vue?module";

let projectcards = reactive({
  projects: [],

  async loadProjects() {
    let rawJSON = await fetch("projects/axel.json");
    this.data = await rawJSON.json();
    console.log(this.data);
  },
});

function test() {
  console.log("hej");
  fetch("projects/axel.json")
    .then((i) => i.json())
    .then((r) => console.log(r));
}
test();

// projectcards.mount("#content_employee_4");
// await projectcards.load();
