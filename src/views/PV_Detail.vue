<template>
  <div id="csr">
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h4 class="m-t-0 m-b-0 text-center">
              <strong>{{ dataPV.namapameranVirtual }}</strong>
            </h4>
            <p></p>
            <p></p>
          </b-col>
          <b-col>
            <center>
               <iframe :src="dataPV.srcVideo"  style="width:90%;height:400px"></iframe>
            </center>
          </b-col>
          <span class="ql-editor" v-html="dataPV.deskripsiPameranVirtual"></span>
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
// import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: "detailPV",
  data() {
    return {
      isLogin: false,
      dataPV: [],
    };
  },
  components: {},
  created() {
    let x = this.$route.params.id;
    this.getPVS(x);
  },
  methods: {
    getPVS(y) {
      axios
        .get(ipBackEnd + "pameranVirtual/listById/" + y)
        .then((res) => {
          console.log(res);
          this.dataPV = res.data.data[0];
          this.dataPV.srcfoto = ipBackEnd + this.dataPV.fotoPameranVirtual;
          this.dataPV.srcVideo = ipBackEnd + this.dataPV.videoPameranVirtual;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // goList(x) {
    //   this.$router.push({ path: "/detail_csr/" + x });
    // },
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
  height: 150px;
  /* background-color: red; */
  position: relative;
  border-radius: 20px;
  border: 4px solid #4c87f2;
  display: flex;
  justify-content: center;
  align-items: center;
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
