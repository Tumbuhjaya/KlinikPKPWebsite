<template>
  <div id="csr">
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
          <b-col md="4" class="sidemenu">
          <sidePV />
        </b-col>
          <b-col md="8" class="content">
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
import sidePV from "../components/sidePV"
import moment from "moment";
import "moment/locale/id";

export default {
  name: "pameranVirtual",
  data() {
    return {
      isLogin: false,
      listPV: [],
      priview:[]
    };
  },
  components: {
    myheader,
    myfooter,
    sidePV
  },
  created() {
    this.getPV();
  },
  methods: {
    getDate(x) {
      let y = moment(x).format("LL");
      return y;
    },
    setPriview(x){
      this.priview= x
      console.log(this.priview)
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

.section-one {
  padding: 60px 0;
}

.section-one .box {
  width: 100%;
  height: 100px;
  /* background-color: red; */
  position: relative;
  border-radius: 20px;
  border: 4px solid #4c87f2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidemenu {
  height: 100vh;
}
/* .section-one .box img { */
/* border-radius: 20px; */
/* } */
.section-one .notif-csr {
  width: 40px;
  height: 40px;
  background-color: #4c87f2;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  right: -20px;
}

.section-one .notif-csr h6 {
  color: #fff;
}
</style>
