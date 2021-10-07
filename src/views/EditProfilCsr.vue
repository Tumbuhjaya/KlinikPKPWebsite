<template>
  <div id="edit_profil_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Profil Perusahaan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link :to="'/dashboard_csr'" style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Edit Profil Perusahaan</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="6" offset-md="3">
            <b-form-group label="Nama Perusahaan">
              <b-form-input v-model="datasCsr.namaPerusahaan"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-input v-model="datasCsr.alamat"></b-form-input>
            </b-form-group>

            <b-form-group label="No. Telepon">
              <b-form-input v-model="datasCsr.noHp"></b-form-input>
            </b-form-group>

            <b-form-group label="Email">
              <b-form-input v-model="datasCsr.email"></b-form-input>
            </b-form-group>

            <b-form-group label="Website">
              <b-form-input v-model="datasCsr.website"></b-form-input>
            </b-form-group>

            <b-form-group label="Profil Perusahaan">
              <b-form-textarea
                rows="10"
                v-model="datasCsr.profilPerusahaan"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Upload Logo Perusahaan">
              <b-form-file
                id="foto1"
                ref="foto1"
                @input="handleFile()"
              ></b-form-file>
            </b-form-group>
            <b-form-group class="m-t-15" >
                <div style="width:150px;height:150px;" v-if="datasCsr.srcLogo != ipBackEnd+'null'">
                  <img :src="datasCsr.srcLogo" alt="" style="width:150px;height:150px">
                </div>
                
                <div style="width:150px;height:150px;" v-if="datasCsr.srcLogo == ipBackEnd+'null'">
                  <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                </div>
              </b-form-group>

            <!-- <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;">
                        <img :src="'#'" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group> -->

            <b-button variant="primary" @click="editProfilCsr()"
              >Simpan</b-button
            >
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

export default {
  name: "EditProfilCsr",
  data() {
    return {
      isLogin: false,
      foto1: "",
      datasCsr: [],
      ipBackEnd: ipBackEnd,
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.getCsrs();
  },
  methods: {
    handleFile() {
      this.foto1 = this.$refs.foto1.files[0];
    },
    editProfilCsr() {
      if (this.foto1 != "") {
        this.editLogo();
      }

      axios
        .post(ipBackEnd + "users/update", this.datasCsr, {
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
    editLogo() {
      let formData = new FormData();
      formData.append("foto1", this.foto1);
      formData.append("id", this.datasCsr.id);
      axios
        .post(ipBackEnd + "users/changeLogo", formData, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCsrs() {
      axios
        .get(ipBackEnd + "users/Profile", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.datasCsr = res.data.data[0];
          this.datasCsr.srcLogo = ipBackEnd + this.datasCsr.logo;
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
</style>
