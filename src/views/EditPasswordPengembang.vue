<template>
  <div id="edit_password_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row class="m-t-30">
          <b-col md="6" offset-md="3">
            <b-row>
              <b-col md="12">
                <h2 class="m-t-0 m-b-0 text-center">
                  <strong>Edit Password Pengembang</strong>
                </h2>
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
