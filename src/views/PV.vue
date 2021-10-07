<template>
  <div id="pameran-virtual">
    <myheader></myheader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Pameran Virtual</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="5">
            <sidePV />
          </b-col>

          <b-col md="7">
            <router-view :key="$route.fullPath"></router-view>
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
import sidePV from "../components/sidePV";
import moment from "moment";
import "moment/locale/id";

export default {
  name: "pameranVirtual",
  data() {
    return {
      isLogin: false,
      listPV: [],
      priview: [],
    };
  },
  components: {
    myheader,
    myfooter,
    sidePV,
  },
  created() {
    this.getPV();
  },
  methods: {
    getDate(x) {
      let y = moment(x).format("LL");
      return y;
    },
    setPriview(x) {
      this.priview = x;
      console.log(this.priview);
    },
    getPV() {
      axios
        .get(ipBackEnd + "pameranVirtual/list")
        .then((res) => {
          console.log(res);
          let x = res.data.data;
          this.listPV = x.map((item) => {
            return {
              ...item,
              srcfoto: ipBackEnd + item.fotoPameranVirtual,
              srcVideo: ipBackEnd + item.videoPameranVirtual,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // goList(x){
    //   this.$router.push({path:'/detail_pameran_virtual/' + x})
    // }
  },
};
</script>

<style scoped>
.fs-14 {
  font-size: 14px !important;
}

#pameran-virtual .section-one {
  padding: 60px 0;
}
</style>
