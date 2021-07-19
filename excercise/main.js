var app = new Vue({
    el: '#app',
    data: {
      product:'Socks',
      image:'./assets/images/socks_green.jpg',
      inStock:true,
      // inventory:100
      details:['80% cotton','20% polyester', 'Gender-neutral'],
      variants:[
        {
          variantID:2334,
          variantColor:'green',
          variantImage:'./assets/images/socks_green.jpg',
        },{
          variantID:2335,
          variantColor:'blue',
          variantImage:'./assets/images/socks_blue.jpg',
        }
      ],
      cart:0
    },
    methods: {
      addToCart(){
          this.cart += 1
      },
      updateProduct(variantImage){
        this.image = variantImage
      }
        
    }
});