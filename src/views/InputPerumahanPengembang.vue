<template>
  <div id="input_perumahan_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Perumahan</strong>
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
              <h6 class="m-t-0 m-b-0"><strong>Input Perumahan</strong></h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8" offset-md="2" class="m-t-30">
            <b-form>
              <b-form-group label="Nama Perumahan">
                <b-form-input v-model="namaPerum"></b-form-input>
              </b-form-group>

              <b-form-group label="Alamat">
                <b-form-input v-model="alamat"></b-form-input>
              </b-form-group>

              <b-form-group label="Kabupaten/Kota">
                <multiselect
                  v-model="kabKot"
                  :options="kabkot"
                  :multiple="false"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="-- Pilih Kabupaten/Kota --"
                ></multiselect>
              </b-form-group>

              <b-form-group label="Deskripsi">
                <quill-editor v-model="deskripsi" />
              </b-form-group>
              <b-row>
                <b-col md="6">
                  <b-form-group label="Koordinat Longtitude">
                    <b-form-input
                      placeholder="110.1234"
                      v-model="koordinatX"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Koordinat Latitude">
                    <b-form-input
                      placeholder="-6.1234"
                      v-model="koordinatY"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Email">
                <b-form-input v-model="email" type="email"></b-form-input>
              </b-form-group>

              <b-form-group label="Kontak Person">
                <b-form-input v-model="CPPerumahan"></b-form-input>
              </b-form-group>

              <b-form-group label="Luas Lahan Perumahan (m2)">
                <b-form-input v-model="luasLahan" type="number"></b-form-input>
              </b-form-group>

              <b-form-group label="Upload Brosur Perumahan">
                <b-form-file
                  id="file1"
                  ref="file1"
                  @input="handleFile('file1')"
                ></b-form-file>
              </b-form-group>

              <b-form-group label="Upload Siteplan Perumahan">
                <b-form-file
                  id="file2"
                  ref="file2"
                  @input="handleFile('file2')"
                ></b-form-file>
              </b-form-group>

              <b-button variant="primary" @click="regisPerumahan()"
                >Simpan</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>
  </div>
</template>

<script>
import Vue from "vue";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
import Multiselect from "vue-multiselect";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

export default {
  name: "InputPerumahanPengembang",
  data() {
    return {
      isLogin: false,
      namaPerum: "",
      alamat: "",
      kabKot: "",
      keca: "",
      email: "",
      CP: "",
      koordinatX: "",
      koordinatY: "",
      deskripsi: "",
      luasLahan: "",
      file: "",
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
    handleFile(x) {
      if (x == "file1") {
        this.file1 = this.$refs.file1.files[0];
      } else if (x == "file2") {
        this.file2 = this.$refs.file2.files[0];
      }
    },
    async regisPerumahan() {
      let vm = this;
      console.log(this.file, "ini file");
      let formData = new FormData();
      formData.append("foto1", this.file1);
      formData.append("foto2", this.file2);
      formData.append("namaPerumahan", vm.namaPerum);
      formData.append("alamatPerumahan", vm.alamat);
      formData.append("kabKotaPerumahan", vm.kabKot);
      formData.append("kecamatanPerumahan", vm.keca);
      formData.append("emailPerumahan", vm.email);
      formData.append("koordinatX", vm.koordinatX);
      formData.append("koordinatY", vm.koordinatY);
      formData.append("deskripsiPerumahan", vm.deskripsi);
      formData.append("luasLahanPerumahan", vm.luasLahan);
      formData.append("CPPerumahan", vm.CPPerumahan);
      console.log(formData, "ini formData");
      axios
        .post(ipBackEnd + "perumahan/register", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit("tembak");
          this.$router.push({ path: "/dashboard_pengembang" });
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
          console.log(res);
          let x = res.data.data;
          this.kabkot = x.map((item) => {
            return item.namaKabKota;
          });
          this.kabkot.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        })
        .catch((err) => {
          console.log(err);
        });
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

.section-one .menu {
  width: 100%;
  height: 250px;
  background-color: #4c87f2;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-one .menu h4 {
  color: #fff;
}
</style>
