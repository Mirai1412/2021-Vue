Vue.component('product', {
        template: `
        <div id="app">
      <div class="product">
      <div class="product-image">
          <img :src="image">
      </div>

      <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <div
              v-for="(variant,index) in variants"
              :key="variant.variantKey"
              class="color-box"
              :style="{backgroundColor: variant.variantColor}"
              @mouseover="updateProduct(index)">
          </div>
          <button
              @click="addToCart"
              :disabled="!inStock"
              :class="{disabledButton:!inStock}">Add to Cart</button>
      </div>
  </div>
</div>`,
        data() {
            return {
                brand: 'Vue',
                product: 'Socks',
                selectedVariant: 0,
                details: [
                    '80% cotton', 
                    '20% polyester', 
                    'Gender-neutral'
                ],
                variants: [
                    {
                        variantID: 2334,
                        variantColor: 'green',
                        variantImage: './assets/images/socks_green.jpg',
                        variantQuantity: 10
                    }, 
                    {
                        variantID: 2335,
                        variantColor: 'blue',
                        variantImage: './assets/images/socks_blue.jpg',
                        variantQuantity: 0
                    }
                ]

            }
          },
            methods: {
                addToCart() {
                  this.$emit('add-to-cart');
                },
                updateProduct(index) {
                    this.selectedVariant = index
                }
            },
            computed: {
                title() {
                    return this.brand + ' ' + this.product
                },
                image() {
                    return this
                        .variants[this.selectedVariant]
                        .variantImage
                },
                inStock() {
                    return this
                        .variants[this.selectedVariant]
                        .variantQuantity
                }

            }
        });

    var app = new Vue({
        el: '#app',
        data: {
          cart:0
        },
        methods: {
          addToCart(){
            this.cart += 1
          }
        }
  
    });