<template>
  <div id="gabung_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Formulir Pendaftaran Magang</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="8" offset-md="2">
            <b-form-group label="Nama">
              <b-form-input v-model="nama"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-input v-model="alamat"></b-form-input>
            </b-form-group>

            <b-form-group label="Email">
              <b-form-input v-model="email"></b-form-input>
            </b-form-group>

            <b-form-group label="No. Telepon (Whatsapp)">
              <b-form-input v-model="noHp"></b-form-input>
            </b-form-group>

            <b-form-group label="Upload Foto Selfi KTP / KTM">
              <b-form-file
                id="foto1"
                ref="foto1"
                @input="handleFile()"
              ></b-form-file>
            </b-form-group>

            <b-form-group label="Upload Surat Permohonan dan CV (.pdf)">
              <b-form-file
                id="foto2"
                ref="foto2"
                @input="handleFile()"
              ></b-form-file>
            </b-form-group>

            <b-button variant="primary" @click="regisPoolMagang()"
              >Daftar</b-button
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
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      nama: "",
      alamat: "",
      noHp: "",
      email: "",
      foto1: "",
      foto2: "",
      MId: "",
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.MId = this.$route.params.id;
  },

  methods: {
    handleFile() {
      this.foto1 = this.$refs.foto1.files[0];
      this.foto2 = this.$refs.foto2.files[0];
    },
    regisPoolMagang() {
      let vm = this;
      let formData = new FormData();
      formData.append("foto1", vm.foto1);
      formData.append("foto2", vm.foto2);
      formData.append("nama", vm.nama);
      formData.append("email", vm.email);
      formData.append("alamat", vm.alamat);
      formData.append("noHp", vm.noHp);
      formData.append("magangId", vm.MId);
      axios
        .post(ipBackEnd + "poolMagang/register", formData)
        .then((res) => {
          console.log(res);
          if(res.data.status == 200){
            this.$router.push({path:'/'})
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {},
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
