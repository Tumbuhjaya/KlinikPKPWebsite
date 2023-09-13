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
                v-model="materi"
                :options="list_materi"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Nama">
              <b-form-input type="text" v-model="nama"></b-form-input>
            </b-form-group>
            <b-form-group label="NIK">
              <b-form-input type="text" v-model="nik"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-textarea
              v-model="alamat"
                rows="2"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Pekerjaan">
              <b-form-input type="text" v-model="pekerjaan"></b-form-input>
            </b-form-group>

            <b-form-group label="Waktu Konsultasi">
              <b-form-datepicker id="example-datepicker" v-model="tanggal" locale="id"></b-form-datepicker>
            </b-form-group>

            <b-form-group label="Hari">
              <b-form-input type="text" disabled v-model="hari"></b-form-input>
            </b-form-group>

            <b-form-group label="Jam">
              <b-form-input type="time" v-model="jam" ></b-form-input>
            </b-form-group>

            <b-form-group label="No. Hp">
              <b-form-input type="text" v-model="hp"></b-form-input>
            </b-form-group>

            <b-form-group label="Instansi Tempat Kerja">
              <b-form-input type="text" v-model="tempatKerja"></b-form-input>
            </b-form-group>

            <b-button variant="primary" @click="submit">Simpan</b-button>
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
import moment from "moment";
moment.locale("id");
export default {
  name: "InputCsr",
  data() {
    return {
      moment,
      nama:"",
      nik:0,
      alamat:"",
      tanggal:moment().format('YYYY-MM-DD'),
      hari : moment().format('dddd'),
      jam:"",
      hp:0,
      pekerjaan:"",
      tempatKerja:"",
      segment: "data1",
      loading: false,
      pesan:"",
      materi:"",
      materi_lainnya:"",
      list:[],
      isLogin: false,
      list_materi: [
        { value: null, text: "-- Pilih --" },
        { value: "Rumah Sehat", text: "Rumah Sehat" },
        { value: "KPR", text: "KPR" },
        { value: "Serah Terima PSU", text: "Serah Terima PSU" },
        { value: "Program dan Kegiatan", text: "Program dan Kegiatan" },
        { value: "Legislasi", text: "Legislasi" },
        { value: "Magang/KP", text: "Magang/KP" },
        { value: "KKN Tematik", text: "KKN Tematik" },
        { value: "Lainnya", text: "Lainnya" },
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
    async submit(){
      let vm = this;
      vm.loading = true;
      let tokenUser =localStorage.getItem('token')
      // let user_id = localStorage.getItem('id')
      let date =moment(vm.tanggal ).format('YYYY-MM-DD')
      let time = moment(vm.jam).format(`HH:mm`)

      console.log(vm.jam,time);
      const data = {
        materi_konsultasi:vm.materi,
        nama_konsulti:vm.nama,
        NIK_konsulti:vm.nik,
        alamat_konsulti:vm.alamat,
        waktu_konsultasi:moment(date+ ' ' + vm.jam, 'YYYY-MM-DD HH:mm'),
        no_hp_konsulti:vm.hp,
        pekerjaan_konsulti:vm.pekerjaan,
        instansi_tempat_kerja:vm.tempatKerja,
        materi_lainnya:vm.materi_lainnya,
      };
        await axios({
          method: "post",
          url: ipBackEnd+'konsultasi/register',
          headers: {token: tokenUser},
          data: data,
        }).then((res)=>{
          if (res.data.message == "sukses") {
            this.materi="";
            this.nama="";
            this.nik=0;
            this.alamat="";
            this.hari="";
            this.tanggal=moment().format('YYYY-MM-DD');
            this.hari = moment(this.tanggal).format('dddd')
            this.jam="";
            this.hp=0;
            this.pekerjaan="";
            this.tempatKerja="";
            this.segment= "data1";
            this.loading= false;
            this.pesan="";
            this.materi_lainnya="";
            this.list=[];
            this.hal=1;
            this.$router.push("/konsultasi");
          
        } else {
          vm.pesan = res.data.message;
          alert(vm.pesan)
        }
      vm.loading = false;
    }).catch(err=>{
        console.log(err);
        vm.loading = false;
      })
    },
  },
  watch: {
    async tanggal(newVal, oldVal) {
      if (newVal != oldVal) {
        let vm = this;
        vm.hari = moment(vm.tanggal).format('dddd')
      }
    },
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
