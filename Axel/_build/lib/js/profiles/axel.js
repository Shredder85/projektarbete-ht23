import {createApp} from 'https://unpkg.com/petite-vue?module';

const projectcards = createApp({
projects:[],

projects: null,

async loadProjects(){
    try{
    const response = await fetch('./projects/axel.json')
    if(response.ok){
        this.projects = await response.json();
    } else{
        console.error("Fail", response.statusText);
    }
} catch(error){
    console.error("Error fetching", error);

}

}


})

projectcards.mount('#content_employee_4');