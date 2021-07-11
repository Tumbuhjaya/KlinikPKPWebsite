<template>
  <div id="perumahan">
    <myheader></myheader>

    <section class="section-one">
      <b-container fluid>
        <b-row>
          <b-col md="12" style="padding:0;">
            <div class="map"></div>
          </b-col>
        </b-row>
      </b-container>

      <div class="search">
        <b-container>
          <b-row>
            <b-col md="8" offset-md="2">
              <div class="box-search">
                <div class="row">
                  <b-col md="12">
                    <h4 class="m-t-0 m-b-0">Cari Rumah Idaman Anda</h4>
                  </b-col>
                </div>

                <b-row class="m-t-15">
                  <b-col md="12">
                    <b-form-group>
                      <b-form-input
                        placeholder="Cari Perumahan, Pengembang, dkk"
                        v-model="nama"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="m-t-15">
                  <b-col md="2">
                    <div class="fieldlokasi">
                      Lokasi
                    </div>
                  </b-col>
                  <b-col md="10">
                    <b-form-group>
                    <multiselect
                    :options="kabkot"
                    v-model="kabKota"
                    :multiple="false"
                    :searchable="true"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="-- Pilih Kabupaten/Kota --"
                    ></multiselect>
                </b-form-group>
                  </b-col>
                  <!-- <b-col md="5">
                    <b-form-select
                      v-model="selected"
                      :options="kec"
                    ></b-form-select>
                  </b-col> -->
                </b-row>

                <b-row class="m-t-15">
                  <b-col md="2">
                    <div class="fieldkategori">
                      Kategori
                    </div>
                  </b-col>
                  <b-col md="10">
                    <b-form-group>
                    <multiselect
                    :options="jeniss"
                    v-model="jenis"
                    :multiple="false"
                    :searchable="true"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="-- Pilih Kategori --"
                    ></multiselect>
                </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="m-t-15">
                  <b-col md="2">
                    &nbsp;
                  </b-col>
                  <b-col md="10">
                      <b-button variant="primary" @click="goSearch()">Cari</b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>

    <section class="section-two">
      <b-container>
        <b-row>
          <b-col md="3">
            <h1>
              <strong>{{ getJml(total.stockSubsidi[0].sum) }}</strong>
            </h1>
            <h5><strong>UNIT RUMAH</strong></h5>
            <h5><strong>SUBSIDI</strong></h5>
            <!-- <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, quis.
            </p> -->
          </b-col>

          <b-col md="3">
            <h1>
              <strong>{{ getJml(total.stockKomersial[0].sum) }}</strong>
            </h1>
            <h5><strong>UNIT RUMAH</strong></h5>
            <h5><strong>NON SUBSIDI</strong></h5>
            <!-- <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, quis.
            </p> -->
          </b-col>

          <b-col md="3">
            <h1>
              <strong>{{ getJml(total.terjualSubsidi[0].sum) }}</strong>
            </h1>
            <h5><strong>UNIT RUMAH</strong></h5>
            <h5><strong>SUBSIDI TERJUAL</strong></h5>
            <!-- <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, quis.
            </p> -->
          </b-col>

          <b-col md="3">
            <h1>
              <strong>{{ getJml(total.terjualKomersial[0].sum) }}</strong>
            </h1>
            <h5><strong>UNIT RUMAH</strong></h5>
            <h5><strong>NON SUBSIDI TERJUAL</strong></h5>
            <!-- <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Possimus, quis.
            </p> -->
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-three">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Rekomendasi Perumahan</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              neque veritatis laborum at praesentium. Nam placeat magni culpa
              doloribus voluptates molestiae. Cum deleniti, perferendis ullam
              officiis recusandae, itaque commodi dolor ratione, mollitia non
              minus enim est hic sed quibusdam aliquid?
            </p>
          </b-col>
        </b-row>

        <b-row class="m-t-15">
          <b-col md="12">
            <VueSlickCarousel
              :dots="true"
              v-bind="rekomperumahan"
              v-if="listPerumahan.length > 0"
            >
              <div
                v-for="item in listPerumahan"
                :key="item.id"
                @click="goListRumah(item)"
              >
                <div class="box">
                  <!-- <router-link :to="'/data_perumahan_by_tipe'" style="text-decoration:none"> -->
                  <div class="up"><img :src="item.src" alt="" /></div>
                  <div class="down m-t-15">
                    <h5>
                      <strong>{{ item.namaPerumahan }}</strong>
                    </h5>
                    <h6>{{ item.namaPerusahaan }}</h6>
                    <p class="m-t-15">
                      {{ item.alamatPerumahan }}
                    </p>
                    <p>
                      {{ item.kabKotaPerumahan }}
                    </p>

                    <b-badge
                      variant="success"
                      style="text-transform:capitalize;"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong>Subsidi : {{ getJml(item.jmlSubsidi) }} Unit</strong>
                      </h6></b-badge
                    >

                    <b-badge
                      variant="primary"
                      style="text-transform:capitalize;"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong
                          >Non Subsidi : {{ getJml(item.jmlKomersial) }} Unit</strong
                        >
                      </h6></b-badge
                    >
                  </div>
                  <!-- </router-link> -->
                </div>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-four">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Pengembang Perumahan</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              neque veritatis laborum at praesentium. Nam placeat magni culpa
              doloribus voluptates molestiae. Cum deleniti, perferendis ullam
              officiis recusandae, itaque commodi dolor ratione, mollitia non
              minus enim est hic sed quibusdam aliquid?
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <VueSlickCarousel
              v-bind="pengembang"
              v-if="listPerumahan.length > 0"
            >
              <div v-for="item in listPengembang" :key="item.id">
                <img :src="item.src" alt="" style="width:100%;height:100px" />
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-five">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Lembaga Pembiayaan</h3>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              neque veritatis laborum at praesentium. Nam placeat magni culpa
              doloribus voluptates molestiae. Cum deleniti, perferendis ullam
              officiis recusandae, itaque commodi dolor ratione, mollitia non
              minus enim est hic sed quibusdam aliquid?
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <VueSlickCarousel v-bind="pembiayaan">
              <div>
                <img src="https://via.placeholder.com/262x100" alt="" />
              </div>

              <div>
                <img src="https://via.placeholder.com/262x100" alt="" />
              </div>

              <div>
                <img src="https://via.placeholder.com/262x100" alt="" />
              </div>

              <div>
                <img src="https://via.placeholder.com/262x100" alt="" />
              </div>

              <div>
                <img src="https://via.placeholder.com/262x100" alt="" />
              </div>
            </VueSlickCarousel>
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
import VueSlickCarousel from "vue-slick-carousel";
import Multiselect from "vue-multiselect";

export default {
  name: "Perumahan",
  data() {
    return {
      isLogin: false,
      listPerumahan: [],
      listPerbankan: [],
      listPengembang: [],
      total: [],
      rekomperumahan: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },

      pengembang: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },

      pembiayaan: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
      nama: "",
      kabkot: [],
      kabKota: "",
      // kec: [{ value: null, text: "-- Pilih Kecamatan --" }],
      jenis: "",
      jeniss: ["-- Pilih Kategori --", "Subsidi", "Komersial"],
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
    VueSlickCarousel,
  },
  async created() {
    await this.getPengembang();
    await this.getPerumahan();
    await this.getStock();
    await this.getkota();
    localStorage.setItem('nama', "")
    localStorage.setItem('jenis', "")
    localStorage.setItem('kota', "")
  },
  methods: {
    async getPengembang() {
      let PTs = await axios
        .get(ipBackEnd + "users/listPengembang", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = PTs.data.data;
      this.listPengembang = x.map((item) => {
        return { ...item, src: ipBackEnd + item.logo };
      });
      console.log(PTs.data.data, "ini pengembang");
    },
    async getPerumahan() {
      let PTs = await axios
        .get(ipBackEnd + "perumahan/list", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = PTs.data.data;
      this.listPerumahan = x.map((item) => {
        return { ...item, src: ipBackEnd + item.fotoPerumahan };
      });
      console.log(this.listPerumahan, "ini perumahan");
    },
    goListRumah(x) {
      this.$router.push({ path: `/data_perumahan_by_tipe/${x.perumahanId}` });
    },
    goSearch() {
      localStorage.setItem('nama', this.nama)
      localStorage.setItem('jenis', this.jenis)
      localStorage.setItem('kota', this.kabKota)
      this.$router.push({ path: `/data_perumahan`});
    },
    getkota() {
      axios
        .get(ipBackEnd + "kabKota/list", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          let x = res.data.data;
          this.kabkot = x.map((item) => {
            return  item.namaKabKota ;
          });
          this.kabkot.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0))
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataStock(x) {
      console.log(x);
      axios
        .get(ipBackEnd + "perumahan/jumlahStock/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getStock() {
      axios
        .get(ipBackEnd + "rumah/totalStock")
        .then((res) => {
          console.log(res.data);
          this.total = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getJml(x){
      if( x== null || x == undefined){
        return 0
      }else{
        return x
      }
    }
  },
};
</script>

<style scoped>
.badge {
  margin-bottom: 5px;
}
.slick-slider img {
  width: 100%;
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
  position: relative;
}

.section-one .map {
  width: 100%;
  height: 460px;
  background-color: #e0e0e0;
}

.section-one .search {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
}

.section-one .search .box-search {
  width: 100%;
  /* height: 300px; */
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
  padding: 30px;
}

.section-one .search .box-search .fieldlokasi,
.section-one .search .box-search .fieldkategori {
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.section-two {
  padding: 140px 0;
}

.section-two h1 {
  font-size: 72px;
  text-align: center;
}

.section-two h5 {
  text-align: center;
}

.section-two p {
  font-size: 14px;
  text-align: center;
}

.section-three {
  padding: 30px 0;
}

.section-three .box {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
  border-radius: 25px;
}

.section-three .box .up {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.section-three .box .up img {
  width: 80%;
  height: 200px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.section-three .box .down {
  padding: 15px;
}

.section-three .box .down .harga {
  font-size: 12px;
}

.section-four {
  padding: 30px 0;
}

.section-four img {
  width: 100%;
  border-radius: 10px;
}

.section-five {
  padding: 30px 0;
}

.section-five img {
  width: 100%;
  border-radius: 10px;
}
</style>
