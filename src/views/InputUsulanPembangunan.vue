<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Usulan Pembangunan</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/usulan'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <router-link
                :to="'/usulan_pembangunan'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Data</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Input </strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">

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

            <b-form-group label="Penghasilan">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Status Kepemilikan Tanah">
              <b-form-select
                :options="statusKepemilikan"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Luas Tanah (m2)">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat X">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat Y">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Upload Foto Lokasi Tanah">
                <b-form-file
                  id="file1"
                  ref="file1"
                  @input="handleFile('file1')"
                ></b-form-file>
            </b-form-group>

            <b-form-group label="Upload Foto Lokasi Tanah">
                <b-form-file
                  id="file2"
                  ref="file2"
                  @input="handleFile('file2')"
                ></b-form-file>
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
      statusKepemilikan: [
        { value: null, text: "-- Pilih --" },
        { value: "", text: "Hak Milik" },
        { value: "", text: "Hak Guna Usaha" },
        { value: "", text: "Hak Guna Bangunan" },
        { value: "", text: "Hak Pakai" },
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
