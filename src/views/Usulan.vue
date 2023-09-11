<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Usulan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="10" offset-md="1">
            <div style="display: flex;justify-content: space-between;">
              <div style="width: 140px;height: 200px;background-color: #4c87f2;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 8px;" class="shadow">
                <center>
                  <router-link
                    :to="'/usulan_pembangunan'"
                    style="text-decoration: none"
                  >
                    <img
                      src="../assets/clipboard.png"
                      alt=""
                      style="height: 100px"
                    />
                    <h6 style="color:#fff " class="mt-3 mb-0 text-center">
                      <strong>USULAN</strong>
                    </h6>
                    <h6 style="font-size: 14px;color: #fff;" class="m-0">Pembangunan Rumah</h6>
                  </router-link>
                </center>
              </div>

              <div style="width: 140px;height: 200px;background-color: #4c87f2;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 8px;padding:0 10px" class="shadow">
                <center>
                  <router-link
                    :to="'/usulan_rtlh'"
                    style="text-decoration: none"
                  >
                    <img
                      src="../assets/clipboard.png"
                      alt=""
                      style="height: 100px"
                    />
                    <h6 style="color:#fff " class="mt-3 mb-0 text-center">
                      <strong>USULAN</strong>
                    </h6>
                    <h6 style="font-size: 14px;color: #fff;" class="m-0">Rumah Tidak Layak Huni</h6>
                  </router-link>
                </center>
              </div>

              <div style="width: 140px;height: 200px;background-color: #4c87f2;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 8px;" class="shadow">
                <center>
                  <router-link
                    :to="'/usulan'"
                    style="text-decoration: none"
                  >
                    <img
                      src="../assets/clipboard.png"
                      alt=""
                      style="height: 100px"
                    />
                    <h6 style="color:#fff " class="mt-3 mb-0 text-center">
                      <strong>USULAN</strong>
                    </h6>
                    <h6 style="font-size: 14px;color: #fff;" class="m-0">Pembangunan Rumah</h6>
                  </router-link>
                </center>
              </div>

              <div style="width: 140px;height: 200px;background-color: #4c87f2;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 8px;" class="shadow">
                <center>
                  <router-link
                    :to="'/usulan'"
                    style="text-decoration: none"
                  >
                    <img
                      src="../assets/clipboard.png"
                      alt=""
                      style="height: 100px"
                    />
                    <h6 style="color:#fff " class="mt-3 mb-0 text-center">
                      <strong>USULAN</strong>
                    </h6>
                    <h6 style="font-size: 14px;color: #fff;" class="m-0">Pembangunan Rumah</h6>
                  </router-link>
                </center>
              </div>

              <div style="width: 140px;height: 200px;background-color: #4c87f2;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 8px;" class="shadow">
                <center>
                  <router-link
                    :to="'/usulan'"
                    style="text-decoration: none"
                  >
                    <img
                      src="../assets/clipboard.png"
                      alt=""
                      style="height: 100px"
                    />
                    <h6 style="color:#fff " class="mt-3 mb-0 text-center">
                      <strong>USULAN</strong>
                    </h6>
                    <h6 style="font-size: 14px;color: #fff;" class="m-0">Pembangunan Rumah</h6>
                  </router-link>
                </center>
              </div>
            </div>
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
// import axios from "axios";
// import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
// import Multiselect from "vue-multiselect";

export default {
  name: "Konsultasi",
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
  },
  methods: {
  },
  watch: {
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
