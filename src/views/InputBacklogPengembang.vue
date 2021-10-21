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
              ></multiselect>
            </b-form-group>

            <b-form-group label="Pembangunan">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="Terjual">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="Ditempati">
              <b-form-input></b-form-input>
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
    handleFile() {
      this.foto1 = this.$refs.foto1.files[0];
      this.foto2 = this.$refs.foto2.files[0];
      this.foto3 = this.$refs.foto3.files[0];
    },
    regisCsr() {
      let vm = this;
      let formData = new FormData();
      formData.append("foto1", vm.foto1);
      formData.append("foto2", vm.foto2);
      formData.append("foto3", vm.foto3);
      formData.append("deskripsi", vm.deskripsi);
      formData.append("kegiatan", vm.kegiatan);
      formData.append("kabKota", vm.kabKota);
      axios
        .post(ipBackEnd + "CSR/register", formData, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/dashboard_csr" });
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
