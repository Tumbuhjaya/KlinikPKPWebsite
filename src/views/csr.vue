<template>
  <div id="csr">
    <myheader></myheader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Corporate Social Responsibility (CSR)</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row class="m-t-30">
                <b-col md="12">
                    <b-alert show variant="primary">
                    <h4 class="alert-heading">Segera daftarkan perusahaan anda !</h4>
                    <p>
                        " Pelaksanaan CSR diatur dalam Undang-Undang No. 40 Tahun 2007 serta Peraturan Pemerintah No. 47 Tahun 2012 yang mengamanatkan Perusahaan untuk berperan serta dalam pembangunan sosial ekonomi dan lingkungan untuk masyarakat "
                    </p>
                    <hr />
                    <router-link :to="'daftar_csr'">
                        <b-button variant="warning">Daftar</b-button>
                    </router-link>
                    </b-alert>
                </b-col>
            </b-row>
            
        <b-row>
          <b-col md="2" class="m-t-30"  v-for="item in listCsr" :key="item.id" @click="goList(item.id)" >
            <!-- <router-link :to="'detail_csr'" style="text-decoration:none"> -->
              <div class="box">
                <center>
                  <img
                    :src="item.src"
                    alt=""
                    style="width:120px;height:120px"
                  />
                  
                </center>
                <div class="notif-csr">
                  <h6 class="m-t-0 m-b-0"><strong>{{item.jumlahCSR}}</strong></h6>
                </div>
              </div>
              <h6 class="fs-14 m-t-10 text-center">
                    <strong
                      >{{item.namaPerusahaan}}</strong
                    >
                  </h6>
            <!-- </router-link> -->
          </b-col>

          <!-- <b-col md="2" class="m-t-15 m-b-15">
            <div class="box">
              <center>
                <img
                  src="../assets/phapros.jpg"
                  alt=""
                  style="width:140px;height:140px"
                />
                <h6 class="fs-14 m-t-15"><strong>PT. Phapros</strong></h6>
              </center>
              <div class="notif-csr">
                <h6 class="m-t-0 m-b-0"><strong>20</strong></h6>
              </div>
            </div>
          </b-col>

          <b-col md="2" class="m-t-15 m-b-15">
            <div class="box">
              <center>
                <img
                  src="../assets/baznas.jpg"
                  alt=""
                  style="width:140px;height:140px"
                />
                <h6 class="fs-14 m-t-15"><strong>BazNas</strong></h6>
              </center>
              <div class="notif-csr">
                <h6 class="m-t-0 m-b-0"><strong>05</strong></h6>
              </div>
            </div>
          </b-col> -->
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
  name: "csr",
  data() {
    return {
      isLogin: false,
      listCsr: [],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created(){
    this.getCsrs()
  },
  methods: {
    getCsrs() {
      axios
        .get(ipBackEnd + "CSR/listAll")
        .then((res) => {
          console.log(res);
          let x = res.data.data
          this.listCsr = x.map((item) => {
            return { ...item, src: ipBackEnd + item.logo };
          });
          this.listCsr.sort((a,b) => (a.jumlahCSR < b.jumlahCSR) ? 1 : ((b.jumlahCSR < a.jumlahCSR) ? -1 : 0))
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goList(x){
      this.$router.push({path:'/detail_csr/' + x})
    }
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
