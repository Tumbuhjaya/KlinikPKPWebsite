<template>
  <div id="sidepv">
    <section class="section-one">
      <b-container>
        <b-row v-for="item in listPV" :key="item.id" class="m-t-30">
          <b-col md="12">
            <router-link
              :to="'/detail_pameran_virtual/' + item.id"
              style="text-decoration: none"
            >
              <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                  <b-col md="4">
                    <b-card-img
                      :src="item.srcfoto"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="8">
                    <b-card-body>
                      <b-card-text>
                        <h6>
                          <strong>{{ item.namapameranVirtual }}</strong>
                        </h6>
                        <h6>{{ getDate(item.createdAt) }}</h6>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </router-link>
          </b-col>
        </b-row>
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

#sidepv .section-one {
  padding: 30px 0;
}
</style>
