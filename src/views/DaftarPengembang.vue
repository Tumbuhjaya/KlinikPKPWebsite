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
                  <strong>Daftar Pengembang</strong>
                </h2>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <b-form>
                  <b-tabs content-class="mt-3" justified>
                    <b-tab title="Profil Pengembang" active>
                      <b-row>
                        <b-col md="12">
                          <b-form-group label="Nama Pengembang">
                            <b-form-input v-model="nama"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Alamat">
                            <b-form-input v-model="alamat"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Asosiasi">
                            <b-form-input v-model="asosiasi"></b-form-input>
                          </b-form-group>

                          <b-form-group label="NIB">
                            <b-form-input v-model="NIB"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Email">
                            <b-form-input v-model="email"></b-form-input>
                          </b-form-group>

                          <b-form-group label="No. Telepon">
                            <b-form-input v-model="noTelp"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Website">
                            <b-form-input v-model="website"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Upload Logo Pengembang">
                            <b-form-file id="file" ref="file" @input="handleFile()"></b-form-file>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-tab>
                    <b-tab title="Akun Pengembang">
                      <b-row>
                        <b-col md="12">
                          <b-form-group label="Username">
                            <b-form-input v-model="username"></b-form-input>
                          </b-form-group>

                          <b-form-group label="Password">
                            <b-form-input
                              v-model="password"
                              type="password"
                            ></b-form-input>
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
                </b-form>
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
import myheader from "../components/header";
import myfooter from "../components/footer";

// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: "DaftarPengembang",
  data() {
    return {
      isLogin: false,
      username: "",
      password: "",
      nama: "",
      alamat: "",
      asosiasi: "",
      NIB: "",
      email: "",
      noTelp: "",
      website: "",
      file: "",
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
      formData.append("noHp", vm.noTelp);
      formData.append("namaPerusahaan", vm.nama);
      formData.append("alamat", vm.alamat);
      formData.append("asosiasi", vm.asosiasi);
      formData.append("NIB", vm.NIB);
      formData.append("role", 'pengembang');
      formData.append("website", vm.website)
      formData.append("file", vm.file)

      axios
        .post(ipBackEnd + "users/register", formData
        )
        .then((res) => {
          console.log(res);
          if(res.data.status == 200){
          this.$router.push({ path: "/dashboard_pengembang" });}
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
