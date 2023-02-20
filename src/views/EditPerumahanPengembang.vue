<template>
  <div id="input_perumahan_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Perumahan</strong>
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
              <h6 class="m-t-0 m-b-0"><strong>Edit Perumahan</strong></h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2" class="m-t-30">
            <b-form>
              <b-form-group label="Nama Perumahan">
                <b-form-input
                  v-model="dataPerum.namaPerumahan"
                  :placeholder="dataPerum.namaPerumahan"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Alamat">
                <b-form-input
                  v-model="dataPerum.alamatPerumahan"
                  :placeholder="dataPerum.alamatPerumahan"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Kabupaten/Kota">
                <!-- <b-form-input v-model="dataPerum.kabKotaPerumahan" :placeholder="dataPerum.kabKotaPerumahan"></b-form-input> -->
                <multiselect
                  v-model="dataPerum.kabKotaPerumahan"
                  :options="kabkot"
                  :multiple="false"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  :placeholder="dataPerum.kabKotaPerumahan"
                ></multiselect>
              </b-form-group>

              <b-form-group label="Deskripsi">
                <quill-editor v-model="dataPerum.deskripsiPerumahan" />
              </b-form-group>
              <b-row>
                <b-col md="6">
                  <b-form-group label="Koordinat Latitude">
                    <b-form-input
                      v-model="dataPerum.koordinatX"
                      :placeholder="dataPerum.koordinatX"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Koordinat Longtitude">
                    <b-form-input
                      v-model="dataPerum.koordinatY"
                      :placeholder="dataPerum.koordinatY"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Email">
                <b-form-input
                  v-model="dataPerum.emailPerumahan"
                  :placeholder="dataPerum.emailPerumahan"
                  type="email"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Kontak Person">
                <b-form-input
                  v-model="dataPerum.CPPerumahan"
                  :placeholder="dataPerum.CPPerumahan"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Luas Lahan Perumahan (m2)">
                <b-form-input
                  v-model="dataPerum.luasLahanPerumahan"
                  type="number"
                  :placeholder="setPlace(dataPerum.luasLahanPerumahan)"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Upload Brosur Perumahan"
                style="margin-bottom: 0px !important"
              >
                <b-form-file
                  id="file1"
                  ref="file1"
                  @input="handleFile('file1')"
                ></b-form-file>
              </b-form-group>

              <b-form-group class="m-t-15">
                <div
                  style="width: 150px; height: 150px"
                  v-if="src1 != ipBackEnd + 'null'"
                >
                  <img :src="src1" alt="" style="width: 150px; height: 150px" />
                </div>

                <div
                  style="width: 150px; height: 150px"
                  v-if="src1 == ipBackEnd + 'null'"
                >
                  <img
                    src="../assets/tidak-ada-gambar.png"
                    alt=""
                    style="width: 150px; height: 150px"
                  />
                </div>
              </b-form-group>

              <b-form-group
                label="Upload Siteplan Perumahan"
                style="margin-bottom: 0px !important"
              >
                <b-form-file
                  id="file2"
                  ref="file2"
                  @input="handleFile('file2')"
                ></b-form-file>
              </b-form-group>

              <b-form-group class="m-t-15">
                <div
                  style="width: 150px; height: 150px"
                  v-if="src2 != ipBackEnd + 'null'"
                >
                  <img :src="src2" alt="" style="width: 150px; height: 150px" />
                </div>

                <div
                  style="width: 150px; height: 150px"
                  v-if="src2 == ipBackEnd + 'null'"
                >
                  <img
                    src="../assets/tidak-ada-gambar.png"
                    alt=""
                    style="width: 150px; height: 150px"
                  />
                </div>
              </b-form-group>

              <b-button variant="primary" @click="updatePerum()"
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
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";
import Multiselect from "vue-multiselect";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor);

export default {
  name: "EditPerumahanPengembang",
  data() {
    return {
      isLogin: false,
      ipBackEnd,
      dataPerum: [],
      file1: "",
      file2: "",
      src1: "",
      src2: "",
      perumId: "",
      kabkot: [],
      blank: "_blank",
      kec: [
        "KecamatanPerumahan A",
        "KecamatanPerumahan B",
        "KecamatanPerumahan C",
      ],
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },
  async created() {
    this.perumId = await this.$route.params.id;
    await this.getDataPerum(this.perumId);
    this.getkota();
  },
  methods: {
    handleFile(x) {
      if (x == "file1") {
        this.file1 = this.$refs.file1.files[0];
        this.src1 = URL.createObjectURL(this.file1);
        console.log(this.dataPerum.src1);
      } else if (x == "file2") {
        this.file2 = this.$refs.file2.files[0];
        this.src2 = URL.createObjectURL(this.file2);
      }
    },
    async getDataPerum(id) {
      axios
        .get(ipBackEnd + "perumahan/listById/" + id, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.dataPerum = res.data.data[0];
          this.src1 = ipBackEnd + this.dataPerum.fotoPerumahan;
          this.src2 = ipBackEnd + this.dataPerum.siteplanPerumahan;
          console.log(this.dataPerum);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatePerum() {
      let formData = new FormData();
      formData.append("foto1", this.file1);
      formData.append("foto2", this.file2);
      formData.append("deskripsiPerumahan", this.dataPerum.deskripsiPerumahan);
      formData.append("alamatPerumahan", this.dataPerum.alamatPerumahan);
      formData.append("emailPerumahan", this.dataPerum.emailPerumahan);
      formData.append("namaPerumahan", this.dataPerum.namaPerumahan);
      formData.append("koordinatX", this.dataPerum.koordinatX);
      formData.append("koordinatY", this.dataPerum.koordinatY);
      formData.append("kabKotaPerumahan", this.dataPerum.kabKotaPerumahan);
      formData.append("CPPerumahan", this.dataPerum.CPPerumahan);
      formData.append("luasLahanPerumahan", this.dataPerum.luasLahanPerumahan);
      formData.append("id", this.dataPerum.perumahanId);
      axios
        .post(ipBackEnd + "perumahan/update", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/dashboard_pengembang" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPlace(x) {
      if (isNaN(x) || x == null) {
        return x;
      } else {
        let y = x.toString();
        return y;
      }
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
          this.kabkot.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    dataPerum: function (val) {
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
