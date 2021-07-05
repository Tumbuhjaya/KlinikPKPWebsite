<template>
  <div id="edit_password_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-row>
              <b-col md="12">
                <h2 class="m-t-0 m-b-0 text-center">
                  <strong>Edit Password Pengembang</strong>
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
                    <b-form-group label="Password Lama">
                      <b-form-input
                      type="password"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password Baru">
                      <b-form-input
                      type="password"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Konfirmasi Password Baru">
                      <b-form-input
                      type="password"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <b-button variant="primary" 
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
// import axios from "axios";
// import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "EditPasswordPengembang",
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
