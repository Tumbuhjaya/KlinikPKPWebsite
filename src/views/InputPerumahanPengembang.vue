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
                style="text-decoration:none"
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

              <!-- <b-form-group label="Kecamatan">
                <multiselect v-model="keca" :options="kec" :multiple="false" :searchable="true" :close-on-select="true" :show-labels="false" placeholder="-- Pilih Kecamatan --"></multiselect>
              </b-form-group> -->
              <b-row>
                <b-col md="6">
                  <b-form-group label="Koordinat Longitude">
                    <b-form-input placeholder="110.1234"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Koordinat Latitude">
                    <b-form-input placeholder="-6.1234"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Email">
                <b-form-input v-model="email"></b-form-input>
              </b-form-group>

              <b-form-group label="Kontak Person">
                <b-form-input v-model="CP"></b-form-input>
              </b-form-group>

              <b-form-group label="Luas Lahan Perumahan (m2)">
                <b-form-input v-model="luasLahan"></b-form-input>
              </b-form-group>

              <b-row>
                <b-col md="12">
                  <h5><strong>Unit Terjual</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Subsidi (Unit)">
                    <b-form-input v-model="terjualUnitS"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Komersial (Unit)">
                    <b-form-input v-model="terjualUnitK"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Upload Brosur Perumahan">
                <b-form-file
                  id="file"
                  ref="file"
                  @input="handleFile()"
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
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
import Multiselect from "vue-multiselect";

export default {
  name: "InputPerumahanPengembang",
  data() {
    return {
      isLogin: false,
      namaPerum:"",
      alamat:"",
      kabKot:"",
      keca:"",
      email:"",
      CP:"",
      luasLahan:"",
      terjualUnitS:0,
      terjualUnitK:0,
      file:"",
      kabkot: [],
    };
  },
  components: {
    myheader,
    myfooter,
  Multiselect

  },created(){
    this.getkota()
  },  
  methods:{
    handleFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.$refs.file.files[0]);
    },
    async regisPerumahan() {
      let vm = this;
      console.log(this.file, "ini file");
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("namaPerumahan", vm.namaPerum);
      formData.append("alamat", vm.alamat);
      formData.append("kabKota", vm.kabKot);
      formData.append("kecamatan", vm.keca);
      formData.append("email", vm.email);
      formData.append("CP", vm.CP);
      formData.append("luasLahan", vm.luasLahan);
      formData.append("jmlTerjualUnitSubsidi", vm.terjualUnitS);
      formData.append("jmlTerjualUnitKomersial", vm.terjualUnitK);
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
    getkota(){
    axios.get(ipBackEnd + 'kabKota/list',{
      headers:{
        token: localStorage.getItem('token')
      }
    }).then(res =>{
      console.log(res.data.data)
      let x = res.data.data
      this.kabkot = x.map(item =>{
        return item.namaKabKota
      })

    }).catch(err =>{
      console.log(err)
    })
  }
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
