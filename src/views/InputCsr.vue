<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input CSR</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_csr'"
                style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Input CSR</strong></h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
            <b-col md="8" offset-md="2" >
                <b-form-group label="Kabupaten/Kota">
                    <multiselect
                    :options="kabkot"
                    :multiple="false"
                    :searchable="true"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="-- Pilih Kabupaten/Kota --"
                    ></multiselect>
                </b-form-group>

                <b-form-group label="Kegiatan">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label="Deskripsi">
                    <b-form-textarea rows="3"></b-form-textarea>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file></b-form-file>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file></b-form-file>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file></b-form-file>
                </b-form-group>


                <b-button variant="primary">Simpan</b-button>
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
import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      kabKot: "",
      kabkot: ["KabKot A", "KabKot B", "KabKot C"],

      
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },

  methods: {
    
  },
};
</script>

<style scoped>
.box-submenu {
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
}

.section-one {
  padding: 60px 0;
}
</style>
