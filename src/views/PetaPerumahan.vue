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
            <div>
              <iframe
                src="http://mapgeo.id/peta_perumahan.html"
                title="description"
                style="width: 100%; height: 600px; border: none"
              ></iframe>
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
// import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "PetaPerumahan",
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    myheader,
    myfooter,
  },
  methods: {},
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
