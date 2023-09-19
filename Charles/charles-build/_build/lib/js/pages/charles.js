// const app = PetiteVue.createApp({
//     projects: [ 
//     ],
      
  
 
//       getDataFromJSON: function() {
//           fetch('charles.json')
//           .then(response => response.json())
//           .then((json) => {
//               this.projects =json.projects;
//               console.log(json.projects);
             
//           });
//           }, 

//           loadProject: function() {



//           }
    
  
//      });
//   app.mount("#charles-projects");
  
const app = PetiteVue.createApp({
    data() {
      return {
        projects: [],
        projectDetails: null
      };
    },
    methods: {
      getDataFromJSON() {
        fetch('charles.json')
          .then(response => response.json())
          .then(json => {
            this.projects = json.projekt;
            console.log(json.projekt);
          });
      },
      showProjectDetails(project) {
        // Set the selected project details to display
        this.projectDetails = project;
      },
      closeProjectDetails() {
        // Close the project details when needed (e.g., when clicking the "Stäng" button)
        this.projectDetails = null;
      }
    },
    mounted() {
      // Fetch data when the component is mounted
      this.getDataFromJSON();
    }
  });
  
  app.mount('#charles-projects');
  