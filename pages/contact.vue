<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <div><strong>Sansa Pascal Compaoré</strong></div>
        <div>Téléphone: +226 75 25 00 52</div>
        <div>Téléphone: +226 78 92 49 57</div>
      </div>
      <div class="col-sm">
        <img src="/edouard-compaore.jpeg" alt="" width="350">
      </div>
    </div>

    <div id="map" style="margin-top: 30px">

    </div>
  </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        computed: {
            ...mapState(["storedata"])
        },
        data() {
            return {
                map: null,
            };
        },
        mounted() {

            this.map = L.map('map').setView([12.293609,-1.5383922], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            L.marker([12.293609, -1.5383922]).addTo(this.map)
                .bindPopup('La boutique de Sansa Pascal')
                .openPopup();
        },
    };
</script>

<style lang="scss" scoped>
  #map {
    height: 600px;
  }
</style>
