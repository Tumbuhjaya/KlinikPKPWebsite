<template>
  <div id="detail_perumahan">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <!-- <b-row>
          <b-col md="4">
            <b-button variant="light" @click="back()"
              >Kembali ke Pencarian</b-button
            >
          </b-col>
          <b-col md="8">
            <div class="box-permohonan">
              <b-button variant="primary">Buat Permohonan</b-button>
            </div>
          </b-col>
        </b-row> -->
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 text-center">
              <strong>{{ dataPerum.namaPerumahan }}</strong>
            </h2>
            <!-- nama perusahaan disni -->
            <h5 class="m-t-0 text-center">
              ( {{ dataPerum.namaPerusahaan }} )
            </h5>
            <h6 class="m-t-0 text-center">
              {{ dataPerum.alamatPerumahan }}
            </h6>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6" offset-md="3">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link :to="'/data_perumahan'" style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Perumahan</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Detail Perumahan</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="7">
            <img :src="dataRumah.src1" alt="" />
          </b-col>
          <b-col md="5">
            <b-row>
              <b-col md="6"
                ><img :src="dataRumah.src2" alt="" style="height: 140px"
              /></b-col>
              <b-col md="6"
                ><img :src="dataRumah.src3" alt="" style="height: 140px"
              /></b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="6"
                ><img :src="dataRumah.srcDenah" alt="" style="height: 140px"
              /></b-col>
              <b-col md="6"
                ><img :src="dataPerum.srcFP" alt="" style="height: 140px"
              /></b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <b-row>
              <b-col md="12">
                <!-- <h6>Lokasi</h6> -->
                <h3><strong>Lokasi</strong></h3>
              </b-col>
              <b-col md="12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.208294923349!2d110.38170531414542!3d-6.984726670339616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMDUuMCJTIDExMMKwMjMnMDIuMCJF!5e0!3m2!1sid!2sid!4v1624201365485!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </b-col>

              <b-col md="12">
                <h5>
                  <strong>{{ dataRumah.alamatPerumahan }}</strong>
                </h5>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <b-row>
              <b-col md="12"
                ><h3><strong>Unit Rumah Tersedia</strong></h3></b-col
              >
            </b-row>
            <b-row>
              <b-col md="12" v-if="dataRumah.jenis == 'subsidi'">
                <div class="box-ketersediaan">
                  <h4 class="m-t-0 m-b-0"><strong>Unit Rumah</strong></h4>
                  <h4 class="m-t-0 m-b-0"><strong>Subsidi</strong></h4>

                  <h6 class="m-t-30">Tersedia</h6>
                  <h4>
                    <strong>{{ avail }} Unit</strong>
                  </h4>

                  <h6 class="m-t-30">Harga</h6>
                  <h4>
                    <strong>
                      Rp. {{ formHarga(parseInt(dataRumah.harga)) }}</strong
                    >
                  </h4>
                </div>
              </b-col>
              <b-col md="12" v-if="dataRumah.jenis == 'komersial'">
                <div class="box-ketersediaan">
                  <h4 class="m-t-0 m-b-0"><strong>Unit Rumah</strong></h4>
                  <h4 class="m-t-0 m-b-0"><strong>Komersial</strong></h4>

                  <h6 class="m-t-30">Tersedia</h6>
                  <h4>
                    <strong>{{ avail }} Unit</strong>
                  </h4>

                  <h6 class="m-t-30">Harga</h6>
                  <h4>
                    <strong
                      >Rp {{ formHarga(parseInt(dataRumah.harga)) }}</strong
                    >
                  </h4>
                </div>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="4">
            <b-row>
              <b-col md="12"
                ><h3><strong>Video Perumahan</strong></h3></b-col
              >
            </b-row>
            <b-row>
              <b-col md="12">
                <a :href="dataRumah.linkVideo" target="_blank">
                  <b-button variant="primary">Lihat Video</b-button>
                </a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <h3><strong>Deskripsi Perumahan</strong></h3>
          </b-col>

          <b-col md="12">
            <p>
              {{ dataPerum.deskripsiPerumahan }}
            </p>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12" class="m-b-15">
            <h6>Kontak</h6>
          </b-col>

          <b-col md="4">
            <div class="box-kontak">
              <img src="../assets/phone.png" alt="" style="height: 50px" />

              <div class="identitas-kontak">
                <h6 class="m-t-0 m-b-0"><strong>Telepon</strong></h6>
                <h6 class="m-t-0 m-b-0">{{ dataPerum.noHp }}</h6>
              </div>
            </div>
          </b-col>

          <b-col md="4">
            <div class="box-kontak">
              <img src="../assets/email.png" alt="" style="height: 50px" />

              <div class="identitas-kontak">
                <h6 class="m-t-0 m-b-0"><strong>Email</strong></h6>
                <h6 class="m-t-0 m-b-0">{{ dataPerum.email }}</h6>
              </div>
            </div>
          </b-col>

          <b-col md="4">
            <div class="box-kontak">
              <img src="../assets/www.png" alt="" style="height: 50px" />

              <div class="identitas-kontak">
                <h6 class="m-t-0 m-b-0"><strong>Website</strong></h6>
                <h6 class="m-t-0 m-b-0">{{ dataPerum.website }}</h6>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "DetailPerumahan",
  data() {
    return {
      isLogin: false,
      dataRumah: [],
      dataPerum: [],
      avail: 0,
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    let y = localStorage.getItem("dataPerum");
    this.dataPerum = JSON.parse(y);
    let x = this.$route.params.id;
    this.getTipeRumah(x);
    console.log(this.dataPerum, "dataPer");
  },
  methods: {
    formHarga(x) {
      console.log(x);
      let y = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
      return y;
    },
    getTipeRumah(x) {
      axios
        .get(ipBackEnd + "rumah/listRumah/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let x = res.data.data[0];
          this.dataRumah = x;
          this.dataRumah.src1 = ipBackEnd + x.foto1;
          this.dataRumah.src2 = ipBackEnd + x.foto2;
          this.dataRumah.src3 = ipBackEnd + x.foto3;
          this.dataRumah.srcDenah = ipBackEnd + x.fotoDenah;
          this.dataRumah.link = "https://" + x.linkVideo;
          this.avail = this.sisa(this.dataRumah.stock, this.dataRumah.terjual);
          console.log(this.dataRumah);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push({ path: "/perumahan" });
    },
    sisa(x, y) {
      console.log(x, y);
      if (x == null && y == null) {
        return 0;
      } else if (y == null) {
        return x;
      } else {
        return x - y;
      }
    },
    goVid(x) {
      let routeData = this.$router.resolve({
        name: x,
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style scoped>
.box-submenu {
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
}

.layout {
  width: 100%;
  height: 100px;
  background-color: aqua;
}

.layout2 {
  width: 100%;
  height: 100px;
  background-color: aqua;
}

.section-one {
  padding: 60px 0;
}

.section-one .box-permohonan {
  display: flex;
  justify-content: flex-end;
}

.section-one img {
  width: 100%;
}

.section-one .box-ketersediaan {
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
}

.section-one .box-kontak {
  display: flex;
}

.section-one .box-kontak img {
  width: 50px;
  height: 50px;
}

.section-one .box-kontak .identitas-kontak {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
  flex-direction: column;
}
</style>
