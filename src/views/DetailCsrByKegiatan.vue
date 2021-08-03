<template>
  <div id="detail_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>{{dataCSR.kegiatan}}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <img
                  :src="dataCSR.src1"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  :src="dataCSR.src2"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  :src="dataCSR.src3"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <p>
              {{dataCSR.deskripsi}}
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
      dataCSR:[]
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created(){
    this.MId = this.$route.params.id
    console.log(this.MId)
    this.getListMagang(this.MId)
  },
  methods: {
    getListMagang(x){
      axios.get(ipBackEnd + 'CSR/listById/' + x ).then(res =>{
        console.log(res)
        this.dataCSR = res.data.data[0]
        this.dataCSR.src1 = ipBackEnd + this.dataCSR.foto1
        this.dataCSR.src2 = ipBackEnd + this.dataCSR.foto2
        this.dataCSR.src3 = ipBackEnd + this.dataCSR.foto3
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
