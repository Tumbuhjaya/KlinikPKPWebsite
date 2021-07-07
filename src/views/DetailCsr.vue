<template>
  <div id="detail_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Corporate Social Responsibility (CSR)</strong>
            </h2>
            <h5 class="m-t-10 m-b-0 text-center">
              {{ profilCsr.namaPerusahaan }}
            </h5>
          </b-col>
        </b-row>
        <b-row class="m-t-30">
          <b-col md="4">
            <b-row>
              <b-col md="12">
                <img :src="profilCsr.srcLogo" alt="" />
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <h3>
                  <strong>{{ profilCsr.namaPerusahaan }}</strong>
                </h3>
                <h6>{{ profilCsr.alamat }}</h6>
                <h6>{{ profilCsr.noHp }}</h6>
                <h6>{{ profilCsr.email }}</h6>
                <h6>{{ profilCsr.website }}</h6>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="8">
            <b-row>
              <b-col md="12">
                <p>
                  {{ profilCsr.profilPerusahaan }}
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus eaque nemo culpa tempora in corporis consequatur
                  maiores, assumenda ex. Iste error nostrum rem nisi rerum ad
                  eius suscipit fuga modi autem at culpa ea inventore eveniet
                  vitae nulla, reprehenderit quia ratione repellendus dolores
                  est quisquam aspernatur. Alias incidunt officia odit quia,
                  recusandae culpa, non odio doloribus atque, fugiat totam
                  maiores dolorem quasi impedit numquam! Quia neque assumenda
                  autem temporibus doloribus ab voluptates nam. Soluta iure
                  delectus pariatur quis laborum adipisci sunt? Sed suscipit
                  expedita amet nam cupiditate quae, omnis culpa architecto
                  quibusdam, sequi mollitia sint? Dolorem aperiam temporibus
                  explicabo saepe!
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" class="m-t-15" v-for="item in listKegCsr" :key="item.CSRId">
            <div class="box m-t-15 m-b-15">
              <img :src="item.src1" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >{{item.kegiatan}}</strong
                  >
                </h6>
              </div>
            </div>
          </b-col>

          <!-- <b-col md="4" class="m-t-15">
            <div class="box m-t-15 m-b-15">
              <img src="https://via.placeholder.com/360x300" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex, possimus!</strong
                  >
                </h6>
              </div>
            </div>
          </b-col> -->
          <!-- 
          <b-col md="4" class="m-t-15">
            <div class="box m-t-15 m-b-15">
              <img src="https://via.placeholder.com/360x300" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex, possimus!</strong
                  >
                </h6>
              </div>
            </div>
          </b-col>

          <b-col md="4" class="m-t-15">
            <div class="box m-t-15 m-b-15">
              <img src="https://via.placeholder.com/360x300" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex, possimus!</strong
                  >
                </h6>
              </div>
            </div>
          </b-col>

          <b-col md="4" class="m-t-15">
            <div class="box m-t-15 m-b-15">
              <img src="https://via.placeholder.com/360x300" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex, possimus!</strong
                  >
                </h6>
              </div>
            </div>
          </b-col>

          <b-col md="4" class="m-t-15">
            <div class="box m-t-15 m-b-15">
              <img src="https://via.placeholder.com/360x300" alt="" />

              <div class="layer">
                <h6 class="m-t-0 m-b-0">
                  <strong
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex, possimus!</strong
                  >
                </h6>
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
  name: "DetailCsr",
  data() {
    return {
      isLogin: false,
      usersId: "",
      listKegCsr: [],
      profilCsr: [],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.usersId = this.$route.params.id;
    this.getCsrss(this.usersId);
  },
  methods: {
    getCsrss(x) {
      axios
        .get(ipBackEnd + "CSR/listByUsers/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          let x = res.data.data;
          this.listKegCsr = x.map((item) => {
            return {
              ...item,
              src1: ipBackEnd + item.foto1,
              src2: ipBackEnd + item.foto2,
              src3: ipBackEnd + item.foto3,
              srcLogo: ipBackEnd + item.logo,
            };
          });
          this.profilCsr = this.listKegCsr[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getProfil() {
    //   axios
    //     .get(ipBackEnd + "user/" + x, {
    //       headers: {
    //         token: localStorage.getItem("token"),
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       this.lprofilCsr = res.data.data[0];
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
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
  /* height: 100px; */
  background-color: red;
  position: relative;
}

.section-one .box img {
  width: 100%;
}
.section-one .box .layer {
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.section-one .box .layer h6 {
  color: #fff;
}
</style>
