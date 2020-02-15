<template>
  <div>
    <section v-if="cartCount == 0">
      <table>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>
            <img :src="`/products/${item.img}`" :alt="item.name" class="productimg" />
            <h3 class="productname">{{ item.name }}</h3>
          </td>
          <td>
            <h4 class="price">{{ item.price | chf }}</h4>
          </td>
          <td>
            <strong>{{ item.quantity }}</strong>
          </td>
          <td>{{ item.quantity * item.price | chf }}</td>
        </tr>
      </table>

      <section class="payment">
        <app-cart />
        <div class="total">
          <div class="caption">
            <p>
              <strong>Sous-total:</strong>
            </p>
            <p>Frais d'expédition:</p>
            <p class="golden">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ cartTotal | chf }}</strong>
            </p>
            <p>Offert</p>
            <p class="golden">{{ cartTotal | chf }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="center">
      <p>Votre panier d'achat est vide</p>
      <button class="btn btn-secondary">
        <nuxt-link exact to="/">Vers l'accueil</nuxt-link>
      </button>
    </section>
  </div>
</template>

<script>
import AppCart from "~/components/AppCart.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    AppCart
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"])
  }
};
</script>

<style lang="scss" scoped>
.productimg {
  float: left;
  margin-right: 15px;
  width: 100px;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}

.golden {
  background: #f2eee2;
  font-weight: bold;
  padding: 10px;
}

.productname {
  padding-top: 36px;
  text-align: left;
}

h1 {
  margin-top: 40px;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .total {
    width: 90%;
  }
}

@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>
