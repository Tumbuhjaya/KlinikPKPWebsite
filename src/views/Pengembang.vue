<template>
  <div id="pengembang">
    <!-- <myheader></myheader> -->
    <!-- <section class="menu-pengembang">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="left">
              <img src="https://via.placeholder.com/65" alt="" />
              <div class="name">
                <h5 class="mt-0 mb-0"><strong>Klinik PKP</strong></h5>
                <h5 class="mt-0 mb-0"><strong>Provinsi Jawa Tengah</strong></h5>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section> -->

    <section style="position: relative">
      <b-container fluid>
        <b-row>
          <b-col md="12" class="pl-0 pr-0">
            <img
              src="https://via.placeholder.com/1366x555"
              alt=""
              style="width: 100%; height: 555px"
            />
          </b-col>
        </b-row>
      </b-container>

      <!-- <b-container>
        <b-row>
          <b-col md="12">
            <div
              style="width: 100%; height: 100vh; background-color: red"
            ></div>
          </b-col>
        </b-row>
      </b-container> -->
    </section>

    <section style="padding: 60px 0">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="text-center">
              <strong>DATABASE PENGEMBANG<br />PROVINSI JAWA TENGAH</strong>
            </h3>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col md="4">
            <router-link :to="'/data_pengembang'" style="text-decoration: none">
              <div class="box-fitur">
                <img src="https://via.placeholder.com/150" alt="" />
                <h5 class="mt-3 mb-0 text-center">
                  <strong>DATA</strong>
                </h5>
                <h5 class="mt-0 mb-0 text-center">
                  <strong>PENGEMBANG</strong>
                </h5>

                <p class="mt-2 mb-0 text-center" style="font-size: 12px">
                  Anda dapat mencari informasi pengembang yang telah terdaftar
                  pada database pengembang Provinsi Jawa Tengah
                </p>
              </div>
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link :to="'/peta_perumahan'" style="text-decoration: none">
              <div class="box-fitur">
                <img src="https://via.placeholder.com/150" alt="" />
                <h5 class="mt-3 mb-0 text-center">
                  <strong>PETA PERSEBARAN</strong>
                </h5>
                <h5 class="mt-0 mb-0 text-center">
                  <strong>PERUMAHAN</strong>
                </h5>

                <p class="mt-2 mb-0 text-center" style="font-size: 12px">
                  Sebaran perumahan ditampilkan dalam bentuk peta spasial yang
                  dapat anda gunakan untuk mencari informasi perumahan di
                  Provinsi Jawa Tengah
                </p>
              </div>
            </router-link>
          </b-col>
          <b-col md="4">
            <router-link
              :to="'/daftar_pengembang'"
              style="text-decoration: none"
            >
              <div class="box-fitur">
                <img src="https://via.placeholder.com/150" alt="" />
                <h5 class="mt-3 mb-0 text-center">
                  <strong>DAFTAR</strong>
                </h5>
                <h5 class="mt-0 mb-0 text-center">
                  <strong>PENGEMBANG</strong>
                </h5>

                <p class="mt-2 mb-0 text-center" style="font-size: 12px">
                  Perusahaan anda belum terdaftar ?<br />Segera daftarkan
                  perusahaan anda agar masuk dalam database pengembang Provinsi
                  Jawa Tengah
                </p>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section style="padding: 60px 0">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="text-center">
              <strong>REKOMENDASI PERUMAHAN<br />PROVINSI JAWA TENGAH</strong>
            </h3>
          </b-col>
        </b-row>
        <b-row class="mt-5">
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
                      style="text-transform: capitalize"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong
                          >Subsidi :
                          {{ getJml(item.jmlSubsidi, item.terjualSubsidi) }}
                          Unit</strong
                        >
                      </h6></b-badge
                    >
                    <br />

                    <b-badge
                      variant="primary"
                      style="text-transform: capitalize"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong
                          >Non Subsidi :
                          {{ getJml(item.jmlKomersial, item.terjualKomersial) }}
                          Unit</strong
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

    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// import myheader from "../components/header";
import myfooter from "../components/footer";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Pengembang",
  data() {
    return {
      isLogin: false,
      listPerumahan: [],
      items: [],
      rekomperumahan: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
      fields: [
        {
          key: "No",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPerusahaan",
          label: "Nama Perusahaan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "asosiasi",
          label: "Asosiasi",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
    };
  },
  components: {
    // myheader,
    myfooter,
    VueSlickCarousel,
  },
  async created() {
    this.items = await this.getPengembang();
    await this.getPerumahan();
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
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

    async getPengembang() {
      let PTs = await axios
        .get(ipBackEnd + "users/listByRole/pengembang", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = PTs.data.data;
      this.totalRows = x.length;
      console.log(PTs.data);
      console.log(x, "ini pengembang");
      return x;
    },
    goList(x) {
      this.$router.push({ path: "/perumahan_pengembang/" + x });
    },

    getJml(x, y) {
      if (x == null || x == undefined) {
        x = 0;
      }
      if (y == null || y == undefined) {
        y = 0;
      }
      let z = x - y;
      return z;
    },

    goListRumah(x) {
      this.$router.push({ path: `/data_perumahan_by_tipe/${x.perumahanId}` });
    },
  },
};
</script>

<style scoped>
#pengembang .box-name-app {
  width: 100%;
  height: 100px;
  background-color: yellow;
  position: absolute;
  left: 0;
  top: -50px;
}

#pengembang .box-fitur {
  width: 100%;
  height: 300px;
  /* background-color: red; */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
}

#pengembang .box {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
  border-radius: 25px;
}

#pengembang .box .up {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

#pengembang .box .up img {
  width: 80%;
  height: 200px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

#pengembang .box .down {
  padding: 15px;
}

#pengembang .box .down .harga {
  font-size: 12px;
}

#pengembang .menu-pengembang {
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

#pengembang .menu-pengembang .left {
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#pengembang .menu-pengembang .left .name {
  margin-left: 15px;
}
</style>
