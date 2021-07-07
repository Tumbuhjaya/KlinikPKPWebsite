<template>
  <div id="daftar_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Daftar CSR</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
            <b-col md="6" offset-md="3" >
                <b-tabs content-class="mt-3" justified>
                    <b-tab title="Profil Perusahaan" active>
                      <b-row>
                          <b-col md="12">
                                <b-form-group label="Nama Perusahaan">
                                    <b-form-input v-model="namaPerusahaan"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Alamat">
                                    <b-form-input v-model="alamat"></b-form-input>
                                </b-form-group>

                                <b-form-group label="No. Telepon">
                                    <b-form-input v-model="noHp"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Email">
                                    <b-form-input v-model="email"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Website">
                                    <b-form-input v-model="website"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Profil Perusahaan">
                                    <b-form-textarea rows="10" v-model="profil"></b-form-textarea>
                                </b-form-group>

                                <b-form-group label="Upload Logo Perusahaan">
                                    <b-form-file id="file" ref="file"></b-form-file>
                                </b-form-group>
                          </b-col>
                      </b-row>
                    </b-tab>
                    <b-tab title="Akun Perusahaan">
                      <b-row>
                          <b-col md="12">
                                <b-form-group label="Username">
                                    <b-form-input v-model="username"></b-form-input>
                                </b-form-group>

                                <b-form-group label="Password">
                                    <b-form-input type="password" v-model="password"></b-form-input>
                                </b-form-group>
                          </b-col>
                      </b-row>

                      <b-row>
                        <b-col md="12">
                          <b-button variant="primary" @click="register()"
                            >Daftar</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-tab>
                </b-tabs>
                
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
  name: "DaftarCsr",
  data() {
    return {
      isLogin: false,
      username:"",
      password:"",
      email:"",
      alamat:"",
      noHp:"",
      namaPerusahaan:"",
      profil:"",
      website:"",
      file:"",
      role:"csr"      
    };
  },
  components: {
    myheader,
    myfooter,
  },

  methods: {
    handleFile() {
        this.file = this.$refs.file.files[0]
        console.log(this.$refs.file.files[0])
    },
    register() {
      let vm = this;
      let formData = new FormData
      formData.append("username", vm.username);
      formData.append("password",vm.password );
      formData.append("email",vm.email);
      formData.append("noHp", vm.noHp);
      formData.append("namaPerusahaan", vm.namaPerusahaan);
      formData.append("alamat", vm.alamat);
      formData.append("profilPerusahaan", vm.profilPerusahaan);
      formData.append("website", vm.website);
      formData.append("role", vm.role);
      formData.append("file", vm.file)
      axios
        .post(ipBackEnd + "users/register", formData
        )
        .then((res) => {
          console.log(res);
          if(res.data.status == 200){
          this.$router.push({ path: "/dashboard_csr" });}
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
</style>
