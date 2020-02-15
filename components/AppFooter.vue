<template>
  <footer class="footer">
    <section class="callout">
      <h2>"Du travail, de la passion et des couleurs en pagaille"</h2>
      <p>par Sansa Pascal Compaoré</p>
    </section>
    <app-footer-links />
    <div class="sarahstuff">
      <p class="text-muted">
        Ce projet est
        <a href="https://github.com/fabarea/secrets-abeilles">Open Source</a>
        et peut être utilisé comme point de départ pour une nouvelle boutique.
        Ce projet est soutenu par l'agence web <a href="https://www.declic.africa" target="_blank">Declic Sàrl</a>.
        Pour de plus amples informations, n'hésitez pas à <a href="mailto:contact@declic.africa">nous contacter par email</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import AppFooterLinks from "~/components/AppFooterLinks.vue";

export default {
  components: {
    AppFooterLinks
  }
};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url("/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}

.sarahstuff {
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>
