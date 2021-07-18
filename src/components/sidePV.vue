<template>
  <div id="csr">
    <section class="section-one">
      <b-container>
        <b-col md="12" class="sidemenu">
          <b-row md="4" class="m-t-30" v-for="item in listPV" :key="item.id">
            <b-col>
              <router-link
                :to="'/detail_pameran_virtual/'+ item.id"
                active-class="active"
                exact
                tag="button"
                class="side-btn"
                style="text-decoration:none"
              >
                <div class="box">
                  <div md="3">
                    <img
                      :src="item.srcfoto"
                      alt=""
                      style="width:100px;height:100px"
                    />
                  </div>
                  <b-col>
                    <div>
                      <h5>{{ item.namapameranVirtual }}</h5>
                    </div>
                    <div>
                      <p>{{ getDate(item.createdAt) }}</p>
                    </div>
                  </b-col>
                </div>
              </router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import moment from "moment";
import "moment/locale/id";

export default {
  name: "csr",
  data() {
    return {
      isLogin: false,
      listPV: [],
      priview: [],
    };
  },
  components: {},
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
