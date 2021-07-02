<template>
  <div id="daftar_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row class="m-t-30">
          <b-col md="6" offset-md="3">
            <b-row>
              <b-col md="12">
                <h2 class="m-t-0 m-b-0 text-center">
                  <strong>Edit Profil Pengembang</strong>
                </h2>
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

                    <b-form-group label="Upload Logo Pengembang">
                      <b-form-file></b-form-file>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
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

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */
</style>
