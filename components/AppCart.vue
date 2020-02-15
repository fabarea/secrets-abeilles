<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <div class="form-group">
        <label for="firstName">Prénom *</label>
        <input type="text" class="form-control" id="firstName" placeholder="Votre prénom"/>
      </div>
      <div class="form-group">
        <label for="lastName">Nom *</label>
        <input type="text" class="form-control" id="lastName" placeholder="Votre nom"/>
      </div>
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" class="form-control" id="email" placeholder="Votre email"/>
      </div>
      <div class="form-group">
        <label for="telephone">Téléphone *</label>
        <input type="tel" class="form-control" id="telephone" placeholder="Votre téléphone"/>
      </div>
      <div class="form-group">
        <label for="street">Rue *</label>
        <input type="text" class="form-control" id="street" placeholder="Votre Rue"/>
      </div>
      <div class="form-group">
        <label for="postalCode">Numéro postal *</label>
        <input type="text" class="form-control" id="postalCode" placeholder="Votre numéro postal"/>
      </div>
      <div class="form-group">
        <label for="locality">Localité *</label>
        <input type="text" class="form-control" id="locality" placeholder="Votre localité"/>
      </div>
      <button
        class="btn btn-primary"
        @click="pay"
        :disabled="!complete || !stripeEmail">Commander
      </button>

      <button
        class="btn btn-primary"
        @click="pay">Commander
      </button>
    </div>

    <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>Mince!</h3>
        <p>Quelque chose s'est mal passé!</p>
        <button @click="clearCart">Essayer à nouveau</button>
      </div>

      <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
        <h4>Please hold, we're filling up your cart with goodies</h4>
        <p>Placeholder loader</p>
      </div>

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
        <h4>Succès!</h4>
      </div>
    </div>
  </div>
</template>

<script>

    import { mapState } from "vuex";

    export default {
        components: {  },
        computed: {
            ...mapState(["cartUIStatus"])
        },
        data() {
            return {
                complete: false,
                stripeOptions: {
                    // you can configure that cc element. I liked the default, but you can
                    // see https://stripe.com/docs/stripe.js#element-options for details
                },
                stripeEmail: ""
            };
        },
        methods: {
            pay() {
                const stripeData = { stripeEmail: this.stripeEmail };

                this.$store.dispatch('sendNotification', stripeData);

            },
            clearCart() {
                this.complete = false;
                this.$store.commit("clearCartCount");
            }
        }
    };
</script>

<style lang="scss" scoped>

  .payment {
    margin-top: 20px;
  }
</style>
