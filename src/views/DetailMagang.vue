<template>
  <div id="detail_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>{{dataMagang.judulMagang}}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="5">
            <div class="b-row">
              <b-col md="12">
                <img
                  :src="dataMagang.src"
                  alt=""
                  style="width:100%"
                />
              </b-col>

              <b-col md="12" class="m-t-15">
                  <center>
                    <b-button variant="primary" @click="goDaftarMagang(magangId)">Gabung Karir/Magang</b-button>
                  </center>
              </b-col>
            </div>
          </b-col>

          <b-col md="7">
            <p>
              {{dataMagang.deskripsiMagang}}
            </p>
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

export default {
  name: "detail_magang",
  data() {
    return {
      isLogin: false,
      magangId: 0,
      dataMagang:[]
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.magangId = this.$route.params.id;
    this.getMagang(this.magangId);
  },
  methods: {
    getMagang(x) {
      axios
        .get(ipBackEnd + "magang/listById/" + x)
        .then((res) => {
          console.log(res);
          this.dataMagang = res.data.data[0]
          this.dataMagang.src = ipBackEnd + this.dataMagang.foto
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goDaftarMagang(x){
      this.$router.push({path:'/gabung_magang/' + x})
    }
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

.card-title {
  font-size: 16px;
  font-weight: bold;
}
</style>
