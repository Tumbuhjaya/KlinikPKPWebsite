<template>
  <div id="peta_perumahan">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Peta Persebaran Perumahan Provinsi Jawa Tengah</strong>
            </h2>

            <!-- <h2 class="m-t-0 m-b-0 text-center">
              <strong>PROVINSI JAWA TENGAH</strong>
            </h2> -->
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
              <l-map style="height: 500px" :zoom="zoom" :center="center" ref="mapku">
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<l-geo-json :geojson="geojson" :options="mapOptions"></l-geo-json>
</l-map>
            <div>
           
              <!-- <iframe
                src="http://mapgeo.id/peta_perumahan.html"
                title="description"
                style="width: 100%; height: 600px; border: none"
              ></iframe> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
// import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
import { LMap, LTileLayer, LGeoJson} from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
import 'leaflet/dist/leaflet.css';
export default {
  name: "PetaPerumahan",
  data() {
    return {
      isLogin: false,
           url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; Pemerintah Provinsi Jawa Tengah',
      zoom: 8,
      center: [-6.995016, 110.418427],
      geojson: null,
       mapOptions: {
        // style: function style() {
        //   return {
        //     weight: 4,
        //     opacity: 0.7,
        //     color: '#666',
        //     fillOpacity: 0.3
        //   };
        // },   
        onEachFeature: (feature, layer)=> {
          layer.on('mouseover', function() {
          console.log(feature.properties.namaPerumahan);
          //open popup
          layer.bindPopup('<h3 style="color: grey; margin-bottom: 0;">'+ feature.properties.namaPerumahan +'</h3>');
        // L.popup()
        //     .setLatLng(e.latlng) 
        //     .setContent('<h1 style="color: grey; margin-bottom: 0;">'+ feature.properties.namaPerumahan +'</h1>')
        //     .openOn(this.$refs.mapku.mapObject); 
        layer.openPopup();
          });
        }
    }
    }
  },
  components: {
    myheader,
    myfooter,
        LMap,
    LTileLayer,
    LGeoJson
  },
  async created(){
       const response = await fetch(ipBackEnd + "perumahan/geojson/");
    this.geojson = await response.json();
  },
  methods: {
     doSomethingOnReady() {
        this.map = this.$refs.myMap.mapObject
    },
  },
  
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
