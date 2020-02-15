<template>
  <div>
    <div class="row">
      <div class="col-sm-5" style="text-align: right">
        <img :src="`/products/${product.img}`" width="300px"/>
      </div>
      <div class="col-sm">
        <section class="product-info">
          <h1>{{ product.name }}</h1>
          <h4 class="price">{{ product.price | chf }}</h4>
          <p>{{ product.description }}</p>
          <p class="quantity">
            <button class="update-num" @click="quantity > 0 ? quantity-- : quantity = 0">-</button>
            <input type="number" v-model="quantity"/>
            <button class="update-num" @click="quantity++">+</button>
            <b-form-select class="size ml-3 w-25 h-auto" v-model="selected" :options="options"></b-form-select>

          </p>
          <p>
            Available in additional colors:
            <strong>
              <span :style="`color: ${product.color}`">{{ product.color }}</span>
            </strong>
          </p>

          <p>
            <button class="btn btn-primary" @click="cartAdd">Ajouter au panier</button>
          </p>
        </section>
      </div>
    </div>
    <hr/>
    <app-featured-products/>
  </div>
</template>

<script>
    import {mapState} from "vuex";
    import StarRating from "vue-star-rating/src/star-rating.vue";
    import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

    export default {
        components: {
            StarRating,
            AppFeaturedProducts
        },
        data() {
            return {
                id: this.$route.params.id,
                quantity: 1,
                tempcart: [],// this object should be the same as the json store object, with an additional param, quantity
                selected: 'size-m',
                options:
                    [
                        {value: 'size-s', text: 'Taille S'},
                        {value: 'size-m', text: 'Taille M'},
                        {value: 'size-L', text: 'Taille L'},
                        {value: 'size-XL', text: 'Taille XL'},
                        {value: 'size-XL', text: 'Taille XXL'}
                    ]
            };
        },
        computed: {
            ...mapState(["storedata"]),
            product() {
                return this.storedata.find(el => el.id === this.id);
            }
        },
        methods: {
            cartAdd() {
                let item = this.product;
                item.quantity = this.quantity;
                this.tempcart.push(item);
                this.$store.commit("addToCart", {...item});
            }
        }
    };
</script>

<style lang="scss" scoped>
  .item-contain {
    margin-left: 8%;
    width: 80%;
    display: grid;
    padding-right: 10px;
    justify-content: space-around;
    grid-template-columns: 1fr 2fr;
  }

  input {
    width: 60px;
    font-size: 25px;
    margin: 0 10px;
    padding: 5px 10px;
  }

  .update-num {
    background: black;
    border-color: black;
    color: white;
    font-size: 20px;
    width: 45px;
  }

  .quantity {
    display: flex;
  }

  @media screen and (max-width: 650px) {
    .img img {
      width: 100%;
    }

    .item-contain {
      margin-left: 0 !important;
      width: 95% !important;
    }

    .review {
      width: 90%;
      margin-left: 4%;
    }
  }
</style>
