<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Konsultasi</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/konsultasi'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Data</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Input Konsultasi</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">
            <b-form-group label="Materi Konsultasi">
              <b-form-select
                :options="materi"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Nama">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-textarea
                rows="2"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Pekerjaan">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Waktu Konsultasi">
              <b-form-datepicker id="example-datepicker" v-model="value" locale="en-US"></b-form-datepicker>
              <!-- <b-form-datepicker id="" @context="onContext"></b-form-datepicker> -->
              <!-- <p class="mb-1">Value: '{{ value }}'</p>
              <p class="mb-1">Selected: '{{ selected }}'</p>
              <p>Formatted: '{{ formatted }}'</p> -->
            </b-form-group>

            <b-form-group label="Hari">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Jam">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="No. Hp">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Instansi Tempat Kerja">
              <b-form-input type="text"></b-form-input>
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
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      // value: '',
      // formatted: '',
      // selected: '',
      materi: [
        { value: null, text: "-- Pilih --" },
        { value: "", text: "Rumah Sehat" },
        { value: "", text: "KPR" },
        { value: "", text: "Serah Terima PSU" },
        { value: "", text: "Program dan Kegiatan" },
        { value: "", text: "Legislasi" },
        { value: "", text: "Magang/KP" },
        { value: "", text: "KKN Tematik" },
        { value: "", text: "Lainnya" },
      ],
    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
  },
  methods: {
    // onContext(ctx) {
    //   this.formatted = ctx.selectedFormatted
    //   this.selected = ctx.selectedYMD
    // }
  },
  watch: {
    
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
