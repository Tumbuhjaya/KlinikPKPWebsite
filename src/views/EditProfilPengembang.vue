<template>
  <div id="daftar_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-row>
              <b-col md="12">
                <h2 class="m-t-0 m-b-0 text-center">
                  <strong>Edit Profil Pengembang</strong>
                </h2>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="8" offset-md="2">
                <hr class="m-t-10 m-b-10" />
                <div class="box-submenu">
                  <router-link
                    :to="'/dashboard_pengembang'"
                    style="text-decoration:none"
                    ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
                  >
                  <h6 class="m-t-0 m-b-0">|</h6>
                  <h6 class="m-t-0 m-b-0"><strong>Edit Profil Pengembang</strong></h6>
                </div>
                <hr class="m-t-10 m-b-10"/>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <b-row>
                  <b-col md="12">
                    <b-form-group label="Nama Pengembang">
                      <b-form-input
                        v-model="userData.namaPerusahaan"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Alamat">
                      <b-form-input
                        v-model="userData.alamat"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Asosiasi">
                      <b-form-input
                        v-model="userData.asosiasi"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="NIB">
                      <b-form-input v-model="userData.NIB"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Email">
                      <b-form-input v-model="userData.email"></b-form-input>
                    </b-form-group>

                    <b-form-group label="No. Telepon">
                      <b-form-input v-model="userData.noHp"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Website">
                      <b-form-input
                        v-model="userData.website"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Upload Logo Pengembang" style="margin-bottom:0px !important">
                      <b-form-file id="foto1" ref="foto1" @input="handleFile()"></b-form-file>

                      
                    </b-form-group>
                    
                    <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;" v-if="userData.srcLogo != ipBackEnd +'null'">
                        <img :src="userData.srcLogo" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;" v-if="userData.srcLogo == ipBackEnd +'null'">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="m-t-15">
                  <b-col md="12">
                    <b-button variant="primary" @click="update()"
                      >Update</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "EditPengembang",
  data() {
    return {
      isLogin: false,
      userData: [],
      foto1:"",
      blank:"_blank",
      ipBackEnd: ipBackEnd,
      };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.getData();
  },
  methods: {
    handleFile(){
      this.foto1 = this.$refs.foto1.files[0]
      this.userData.srcLogo = URL.createObjectURL(this.foto1)
    },
    getData() {
      axios
        .get(ipBackEnd + "users/Profile", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.userData = res.data.data[0];
          this.userData.srcLogo = ipBackEnd + this.userData.logo
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update(){
      if (this.foto1 != ""){
        this.changeLogo()
      }
      axios.post(ipBackEnd + 'users/update', this.userData, {
        headers:{
          token : localStorage.getItem('token')
        }
      }).then(res =>{
        console.log(res)
        this.$router.push({path:'/dashboard_pengembang'})
      }).catch(err =>{
        console.log(err)
      })
    },
    changeLogo(){
      let vm = this
      let formData = new FormData
      formData.append('foto1', vm.foto1)
      formData.append('id', vm.userData.id)
      axios.post(ipBackEnd + 'users/changeLogo', formData, {
        headers:{
          token: localStorage.getItem('token')
        }
      }).then(res =>{
        console.log(res)
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

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */
</style>
