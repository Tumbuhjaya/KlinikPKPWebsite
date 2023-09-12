<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Usulan Pembangunan</strong>
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
                <strong>Edit</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">

            <b-form-group label="Nama">
              <b-form-input type="text" v-model="nama"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input type="text" v-model="nik"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-textarea
                rows="2"
                v-model="alamat"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Pekerjaan">
              <b-form-input type="text" v-model="pekerjaan"></b-form-input>
            </b-form-group>

            <b-form-group label="Penghasilan">
              <b-form-input type="number" v-model="penghasilan"></b-form-input>
            </b-form-group>

            <b-form-group label="Status Kepemilikan Tanah">
              <b-form-select
                :options="statusKepemilikan"
                v-model="status"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Luas Tanah (m2)">
              <b-form-input type="text" v-model="luas"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat X">
              <b-form-input type="text" v-model="xe"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat Y">
              <b-form-input type="text" v-model="ye"></b-form-input>
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
                <img v-if="afoto1" :src=afoto1 alt="">
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
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      tokenUser:localStorage.getItem('token'),
      user_id:localStorage.getItem('id'),
      id:0,
      foto1: "",
      afoto1: "",
      afoto2: "",
      foto2: "",
      nama:"",
      nik:0,
      alamat:"",
      pekerjaan:"",
      penghasilan:0,
      status:"",
      luas:0,
      xe:0,
      ye:0,
      loading: false,
      list:[],
      // value: '',
      // formatted: '',
      // selected: '',
      statusKepemilikan: [
        { value: null, text: "-- Pilih --" },
        { value: "Hak Milik", text: "Hak Milik" },
        { value: "Hak Guna Usaha", text: "Hak Guna Usaha" },
        { value: "Hak Guna Bangunan", text: "Hak Guna Bangunan" },
        { value: "Hak Pakai", text: "Hak Pakai" },
      ],
    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
    this.get_data()
  },
  methods: {
    // onContext(ctx) {
    //   this.formatted = ctx.selectedFormatted
    //   this.selected = ctx.selectedYMD
      // }
    get_data(){
      axios
        .post(ipBackEnd + "usulan_pembangunan_rumah/listById", {id:this.$route.params.id}, {
          headers: {
            token: this.tokenUser
            // "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res.data.data[0]);
          this.afoto1=ipBackEnd+res.data.data[0].foto_tanah1
          this.afoto2=ipBackEnd+res.data.data[0].foto_tanah2
          this.nama=res.data.data[0].nama_pengusul
          this.nik=res.data.data[0].NIK_pengusul
          this.alamat=res.data.data[0].alamat_pengusul
          this.pekerjaan=res.data.data[0].pekerjaan_pengusul
          this.penghasilan=res.data.data[0].penghasilan_pengusul
          this.status=res.data.data[0].status_kepemilikan_tanah
          this.luas=res.data.data[0].luas_tanah
          this.xe=res.data.data[0].koordinat_lokasi_X
          this.ye=res.data.data[0].koordinat_lokasi_Y
          this.id=res.data.data[0].id
        })
        .catch(err => {
          console.log(err);
        })
    },
    submit(){
      let vm = this.item;
      let data = {
        id:vm.$route.params.id,
        publish:vm.publish,
        tanggapan:vm.tanggapan,
      };
      console.log(data);
      axios
        .post(ipBackEnd + "usulan_pembangunan_rumah/update", data, {
          headers: {
            token: this.tokenUser
            // "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res);
          this.$emit("tembak");
          this.myModal = false
        })
        .catch(err => {
          console.log(err);
        })
    }
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
