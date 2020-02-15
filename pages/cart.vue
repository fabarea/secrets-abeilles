<template>
  <div>
    <app-cart-steps/>
    <hr/>
    <h1 class="center">Votre panier</h1>

    <section v-if="cartUIStatus === 'idle'">
      <app-cart-display/>
    </section>

    <section v-else-if="cartUIStatus === 'loading'" class="loader">
      <app-loader/>
    </section>

    <section v-else-if="cartUIStatus === 'success'" class="success">
      <h2>Success!</h2>
      <p>Merci pour votre achat. Votre command a été enregistrée avec succès</p>
      <p>Oublié quelque chose?</p>
      <nuxt-link exact to="/" class="btn btn-secondary">Vers l'accueil</nuxt-link>
    </section>

    <section v-else-if="cartUIStatus === 'failure'">
      <p>Oops, something went wrong. Redirecting you to your cart to try again.</p>
    </section>

    <app-sales-boxes/>
  </div>
</template>

<script>
    import AppLoader from "~/components/AppLoader.vue";
    import AppCartSteps from "~/components/AppCartSteps.vue";
    import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
    import AppCartDisplay from "~/components/AppCartDisplay.vue";
    import { mapState } from "vuex";

    export default {
        components: {
            AppCartDisplay,
            AppSalesBoxes,
            AppCartSteps,
            AppLoader
        },
        computed: {
            ...mapState(["cartUIStatus"])
        }
    };
</script>

<style lang="scss" scoped>
  .loader {
    display: flex;
    justify-content: center;
  }

  .success {
    text-align: center;
  }
</style>
