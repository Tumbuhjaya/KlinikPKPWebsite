<template>
  <div id="data_perumahan">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="3">
            <div class="box-search">
              <b-row>
                <b-col md="12">
                  <h5><strong>Saring Hasil</strong></h5>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <h6><strong>Lokasi</strong></h6>
                  <b-form-group>
                    <multiselect
                      :options="kabkot"
                      v-model="kabKota"
                      :multiple="false"
                      :searchable="true"
                      :close-on-select="true"
                      :show-labels="false"
                      placeholder="--Kabupaten/Kota --"
                    ></multiselect>
                  </b-form-group>
                  <!-- <b-form-select v-model="selected" :options="kec" class="m-t-15"></b-form-select> -->
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <h6><strong>Kategori</strong></h6>
                  <multiselect
                    :options="jeniss"
                    v-model="jenis"
                    :multiple="false"
                    :searchable="true"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="--Kategori --"
                  ></multiselect>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <h6><strong>Harga</strong></h6>
                </b-col>

                <b-col md="12">
                  <b-form-input
                    placeholder="Harga Minimal"
                    class="m-t-10"
                    v-model="hargaMin"
                  ></b-form-input>
                </b-col>

                <b-col md="12">
                  <b-form-input
                    placeholder="Harga Maksimal"
                    class="m-t-10"
                    v-model="hargaMax"
                  ></b-form-input>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <!-- <b-col md="12">
                  <h6><strong>Sertifikat</strong></h6>
                </b-col> -->

                <!-- <b-col md="12">
                  <b-form-checkbox>Sertifikat Hak Milik (SHM)</b-form-checkbox>
                  <b-form-checkbox>Hak Guna Bangunan (HGB)</b-form-checkbox>
                  <b-form-checkbox>Lainnya</b-form-checkbox>
                </b-col> -->
                <b-col md="10">
                  <b-button variant="primary" @click="search()">Cari</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col md="9">
            <b-row class="m-b-15">
              <b-col md="8">
                <b-form-input
                  placeholder="Cari Perumahan, Pengembang, dkk"
                  v-model="nama"
                  class="m-t-10"
                ></b-form-input>
              </b-col>

              <b-col md="4">
                <multiselect
                  :options="urutkan"
                  v-model="urut"
                  :multiple="false"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="-- Urutkan --"
                  class="m-t-10"
                ></multiselect>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <b-card-group columns>
                  <b-card
                    v-for="item in listPerumahan"
                    :key="item.PerumahanId"
                    :img-src="item.src"
                    img-alt="Image"
                    img-top
                  >
                    <b-card-text>
                      <b-row>
                        <b-col md="12">
                          <h5>
                            <strong>{{ item.namaPerumahan }}</strong>
                          </h5>
                          <h6 style="font-size: 14px">
                            {{ item.namaPerusahaan }}
                          </h6>

                          <h6 class="mt-2" style="font-size: 14px">
                            {{ item.alamatPerumahan }}
                          </h6>
                          <h6 style="font-size: 14px">
                            {{ item.kabKotaPerumahan }}
                          </h6>

                          <h6 class="harga m-t-5 m-b-5" style="font-size: 12px">
                            <strong>Subsidi :</strong>
                            {{ getJml(item.jmlSubsidi, item.terjualSubsidi) }}
                            Unit, Kisaran harga antara
                            {{ Math.trunc(item.hargaMinSubsidi / 1000000) }}
                            Juta s/d
                            {{ Math.trunc(item.hargaMaxSubsidi / 1000000) }}
                            Juta
                          </h6>
                          <h6 class="harga m-t-5 m-b-5" style="font-size: 12px">
                            <strong>Komersial :</strong>
                            {{
                              getJml(item.jmlKomersial, item.terjualKomersial)
                            }}
                            Unit, Kisaran harga antara
                            {{ Math.trunc(item.hargaMinKomersial / 1000000) }}
                            Juta -
                            {{ Math.trunc(item.hargaMaxKomersial / 1000000) }}
                            Juta
                          </h6>
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col md="6">
                          <b-button
                            variant="primary"
                            size="sm"
                            @click="goListRumah(item)"
                            style="cursor: pointer"
                            >Detail</b-button
                          >
                        </b-col>
                        <b-col md="6">
                          <b-button
                            variant="warning"
                            size="sm"
                            class="float-right"
                            style="cursor: pointer"
                            v-b-modal.modal-siteplan
                            >Siteplan</b-button
                          >
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>

    <!-- modal -->
    <b-modal id="modal-siteplan" size="lg" title="Siteplan Perumahan">
      <b-row>
        <b-col md="12">
          <img
            src="https://via.placeholder.com/600x400"
            alt=""
            style="width: 100%"
          />
        </b-col>

        <b-col md="12">
          <b-table
            :items="items"
            :fields="fields"
            stacked="md"
            show-empty
            bordered
            small
          >
          </b-table>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
import Multiselect from "vue-multiselect";

export default {
  name: "DataPerumahan",
  data() {
    return {
      isLogin: false,
      selected: null,
      listPerumahan: [],
      nama: "",
      urut: "",
      kabKota: "",
      jenis: "",
      hargaMin: 0,
      hargaMax: 0,
      kabkot: [],
      //   kec: [{ value: null, text: "-- Pilih Kecamatan --" }],
      jeniss: ["-- Kategori --", "Subsidi", "Komersial"],
      urutkan: [
        "-- Urutkan --",
        "Berdasarkan Harga Naik",
        "Berdasarkan Harga Turun",
      ],

      fields: [
        { key: "No", label: "No", class: "text-center" },
        {
          key: "nomorKapling",
          label: "No Kavling",
          sortable: true,
          class: "text-center",
          sortDirection: "desc",
        },
        {
          key: "type",
          label: "Tipe",
          sortable: true,
          class: "text-center",
          sortDirection: "desc",
        },

        {
          key: "statusTerjual",
          label: "Status",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
        },
      ],
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },
  created() {
    this.getkota();
    // this.jenis = localStorage.getItem("jenis");
    // this.kabKota = localStorage.getItem("kota");
    // this.nama = localStorage.getItem("nama");
    this.search();
    this.getPerumahan();
  },
  methods: {
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
            return item.namaKabKota;
          });
          this.kabkot.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      let vm = this;
      let x = 99999999999999;
      if (this.hargaMax != 0) {
        x = this.hargaMax;
      }
      axios
        .post(ipBackEnd + "perumahan/search", {
          nama: vm.nama,
          kabKotaPerumahan: vm.kabKota,
          hargaMin: vm.hargaMin,
          hargaMax: x,
          jenis: vm.jenis.toLowerCase(),
        })
        .then((res) => {
          //   console.log(res);
          let x = res.data.data;
          this.listPerumahan = x.map((item) => {
            return { ...item, src: ipBackEnd + item.fotoPerumahan };
          });
          console.log(this.listPerumahan);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goListRumah(x) {
      this.$router.push({ path: `/data_perumahan_by_tipe/${x.perumahanId}` });
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
  },
  watch: {
    urut: function (val) {
      if (val == "Berdasarkan Harga Naik") {
        console.log("naik");
        this.listPerumahan.sort((a, b) =>
          parseInt(a.hargaMinSubsidi) > parseInt(b.hargaMinSubsidi)
            ? 1
            : parseInt(b.hargaMinSubsidi) > parseInt(a.hargaMinSubsidi)
            ? -1
            : 0
        );
      } else if (val == "Berdasarkan Harga Turun") {
        console.log("turun");
        this.listPerumahan.sort((a, b) =>
          parseInt(a.hargaMaxKomersial) < parseInt(b.hargaMaxKomersial)
            ? 1
            : parseInt(b.hargaMaxKomersial) < parseInt(a.hargaMaxKomersial)
            ? -1
            : 0
        );
      }
    },
  },
};
</script>

<style scoped>
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
