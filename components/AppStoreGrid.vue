<template>
  <div class="row">

    <div class="col-md-10">
      <transition-group name="items" tag="section" class="card-deck">
        <div v-for="item in filteredprice" :key="item.id" class="card-item">
          <img class="card-img-top img-fluid" :src="`/products/${item.img}`" alt="">
          <div class="card-body">
            <NuxtLink :to="`product/${item.id}`">

            </NuxtLink>
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <h4 class="price">{{ item.price | chf }}</h4>
              <NuxtLink :to="`product/${item.id}`">
                <button class="btn btn-secondary">Voir ></button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <aside class="col-md-2">
      <h3>Filtre par prix:</h3>
      <p style="margin-top: 5px">
        Prix maxium
        <strong>CHF {{ pricerange }}</strong>
      </p>
      <input
        class="slider"
        id="pricerange"
        type="range"
        v-model="pricerange"
        :min="min"
        :max="max"
        step="0.1"
      />
      <span class="min">CHF {{ min }}</span>
      <span class="max">CHF {{ max }}</span>
    </aside>

  </div>
</template>

<script>
    import StarRating from "vue-star-rating/src/star-rating.vue";

    export default {
        props: {
            data: {
                required: true
            }
        },
        data() {
            return {
                min: 10,
                max: 50,
                pricerange: 50
            };
        },
        computed: {
            filteredprice() {
                return this.data.filter(el => el.price < this.pricerange);
            }
        },
        components: {
            StarRating
        }
    };
</script>

<style lang="scss" scoped>
  .card-item {
    width: 33%;
    float: right;
    padding: 10px;
  }

  .max {
    display: inline-block;
    float: right;
  }

  @media screen and (max-width: 576px) {
    .card-item {
      width: 100%;
    }
  }
</style>
