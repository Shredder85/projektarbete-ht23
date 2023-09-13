import {createApp} from 'https://unpkg.com/petite-vue?module';

const app = createApp({
products:[
{name: 'System', icon: 'images/it-systems (1).png', description: 'Design och hantering av hård- och mjukvarusystem för effektiv datahantering.' 
, price:'1337$'},
{name: 'Devops', icon:'images/devops.png', description: 'Automatisering av mjukvaruutveckling och driftsprocesser för snabbare och kontinuerlig mjukvaruleverans.' 
, price:'1337$'},
{name: 'Security', icon:'images/elearning.png', description: 'Skydd av digitala tillgångar och data mot cyberhot och incidenthantering.' 
, price:'1337$'},
{name: 'Software', icon:'images/software.png', description: 'Utveckling och underhåll av skräddarsydda programvarulösningar för specifika företagsbehov.' 
, price:'1337$'},
],


cart: [],



addToCart(name){
for (let service of this.products){
if (service.name == name){
    this.cart.push(service);

    
}
}





console.log(this.cart);
},

});
app.mount('#content_services');






const popup = () => { 
    const popups = document.querySelectorAll(".popup");
    for (let i = 0; i < popups.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = popups[i].getBoundingClientRect().top;
    const elementVisible = 150; 
    if (elementTop < windowHeight - elementVisible) {
    popups[i].classList.add("active");
    } 
    else { 
    popups[i].classList.remove("active");
    } 
    } 
   } 
   window.addEventListener("scroll", popup);