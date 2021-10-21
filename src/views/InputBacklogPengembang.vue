<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Backlog Pengembang</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_pengembang'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Input Backlog Pengembang</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">
            <b-form-group label="Kabupaten/Kota">
              <multiselect
                :options="kabkot"
                :multiple="false"
                :searchable="true"
                :close-on-select="true"
                :show-labels="false"
                placeholder="-- Pilih Kabupaten/Kota --"
                v-model="dataBacklog.kabKotaJP"
              ></multiselect>
            </b-form-group>

            <b-form-group label="Pembangunan">
              <b-form-input type="number" v-model="dataBacklog.terbangunJP"></b-form-input>
            </b-form-group>

            <b-form-group label="Terjual">
              <b-form-input type="number" v-model="dataBacklog.terjualJP"></b-form-input>
            </b-form-group>

            <b-form-group label="Ditempati">
              <b-form-input type="number" v-model="dataBacklog.dihuniJP"></b-form-input>
            </b-form-group>

            <b-button variant="primary" @click="regisBackLog()">Simpan</b-button>
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
import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      kegiatan: "",
      deskripsi: "",
      foto1: "",
      foto2: "",
      foto3: "",
      kabKota: "",
      kabkot: [],
      dataBacklog:{
        kabKotaJP:"",
        terbangunJP:"",
        terjualJP:"",
        dihuniJP:""
      }
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },
  created() {
    this.getkota();
  },
  methods: {
    regisBackLog() {
      let vm = this;
      axios
        .post(ipBackEnd + "jumlahPerumahanKabKota/register", vm.dataBacklog, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          if(res.data.message == 'sukses'){
            this.$router.push({path: '/dashboard_pengembang'})
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getkota() {
      axios
        .get(ipBackEnd + "kabKota/list", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          let x = res.data.data;
          this.kabkot = x.map((item) => {
            return item.namaKabKota;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    kegiatan: (val) => {
      console.log(val);
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
