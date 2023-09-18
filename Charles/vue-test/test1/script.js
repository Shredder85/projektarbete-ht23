const app = Vue.createApp({
  data() {
    return {
      products: [ 
       ]
      ,

      gallery: [],
    };
  },

  methods: {
    addToGallery: function (aProduct) {
      this.gallery.push(aProduct);
      aProduct.addedToGallery = true;
    },

    // getDataFromJSON: function() {
    //     axios.get('products.json')
    //     .then((response) => {
    //         this.products = response.data.products;
    //         console.log(this.products);
    //     })
    // }



    getDataFromJSON: function() {
        fetch('products.json')
        .then(response => response.json())
        .then((json) => {
            this.products =json.products;
            console.log(json.products);
           
        });
        } 

  },

  computed: {
    itemsInGallery: function () {
      return this.gallery.length || ``;
    },
  },
});
app.mount("#app");
