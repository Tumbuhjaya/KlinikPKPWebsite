<template>
  <div id="detail_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>{{dataMagang.kegiatan}}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <img
                  :src="dataMagang.src1"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  :src="dataMagang.src2"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  :src="dataMagang.src3"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <p>
              {{dataMagang.deskripsi}}
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
      MId: 0,
      dataMagang:[]
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created(){
    this.MId = this.$route.params.id
    this.getListMagang(this.MId)
  },
  methods: {
    getListMagang(x){
      axios.get(ipBackEnd + 'csr/listById/' + x ).then(res =>{
        console.log(res)
        this.dataMagang = res.data.data[0]
        this.dataMagang.src1 = ipBackEnd + this.dataMagang.foto1
        this.dataMagang.src2 = ipBackEnd + this.dataMagang.foto2
        this.dataMagang.src3 = ipBackEnd + this.dataMagang.foto3
      }).catch(err =>{
        console.log(err)
      })
    }
  },
};
</script>

<style scoped>

.section-one {
  padding: 60px 0;
}

</style>
