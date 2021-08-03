<template>
  <div id="data_perumahan">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="12">
                <h4 class="m-t-0 text-center">
                  {{ dataPerum.namaPerusahaan }}
                </h4>
                <h2 class="text-center">
                  <strong>{{ dataPerum.namaPerumahan }}</strong>
                </h2>
                <h6 class="m-t-0 text-center">
                  {{ dataPerum.alamatPerumahan }}
                </h6>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6" offset-md="3">
                <hr class="m-t-10 m-b-10" />
                <div class="box-submenu">
                  <router-link :to="'/'" style="text-decoration: none"
                    ><h6 class="m-t-0 m-b-0">Pengembang</h6></router-link
                  >
                  <h6 class="m-t-0 m-b-0">|</h6>
                  <h6 class="m-t-0 m-b-0">
                    <strong>Perumahan Pengembang</strong>
                  </h6>
                </div>
                <hr class="m-t-10 m-b-10" />
              </b-col>
            </b-row>

            <b-row class="mt-5">
              <b-card-group columns>
                <b-card
                  :img-src="item.src"
                  img-alt="Image"
                  img-top
                  v-for="item in listRumah"
                  :key="item.id"
                  @click="goDetail(item.id)"
                >
                  <b-card-text>
                    <h5>
                      <strong>Tipe Rumah : {{ item.type }}</strong>
                    </h5>
                    <h5>
                      <strong>Stok : {{ item.stock }} Unit</strong>
                    </h5>

                    <b-badge
                      variant="primary"
                      style="text-transform: capitalize"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong>{{ item.jenis }}</strong>
                      </h6></b-badge
                    >
                  </b-card-text>
                </b-card>
              </b-card-group>
            </b-row>
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
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "DataPerumahan",
  data() {
    return {
      isLogin: false,
      selected: null,
      listRumah: [],
      dataPerum: [],
      kabkot: [{ value: null, text: "-- Pilih Kabupaten / Kota --" }],

      kec: [{ value: null, text: "-- Pilih Kecamatan --" }],

      jenis: [
        { value: null, text: "-- Pilih Jenis --" },
        { value: "Subsidi", text: "Subsidi" },
        { value: "Komersial", text: "Komersial" },
      ],

      urutkan: [{ value: null, text: "-- Urutkan --" }],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    localStorage.removeItem("dataPerum");
    let x = this.$route.params.id;
    this.getTipeRumah(x);
    this.getDataPerum(x);
  },
  methods: {
    getTipeRumah(x) {
      axios
        .get(ipBackEnd + "rumah/listByPerumahanId/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let x = res.data.data;
          this.listRumah = x.map((item) => {
            return { ...item, src: ipBackEnd + item.foto1 };
          });
          console.log(this.listRumah, "ini");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataPerum(x) {
      axios
        .get(ipBackEnd + "perumahan/listById/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res, "ini aha");
          res.data.data[0].srcFP = ipBackEnd + res.data.data[0].fotoPerumahan;
          res.data.data[0].srcL = ipBackEnd + res.data.data[0].logo;
          this.dataPerum = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goDetail(x) {
      console.log(x);
      localStorage.setItem("dataPerum", JSON.stringify(this.dataPerum));
      this.$router.push({ path: `/detail_perumahan/${x}` });
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

.section-one .box-search {
  background-color: #fff;
  border-radius: 25px;
  padding: 35px 25px;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
}

.section-one .box {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
}

.section-one .box img {
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.section-one .box .down {
  padding: 15px;
}

.section-one .box .down .harga {
  font-size: 12px;
}
</style>
