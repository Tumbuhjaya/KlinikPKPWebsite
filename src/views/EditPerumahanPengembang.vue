<template>
  <div id="input_perumahan_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Perumahan</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_pengembang'"
                style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Edit Perumahan</strong></h6>
            </div>
            <hr />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2" class="m-t-30">
            <b-form>
              <b-form-group label="Nama Perumahan">
                <b-form-input
                  v-model="dataPerum.namaPerumahan"
                  :placeholder="dataPerum.namaPerumahan"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Alamat">
                <b-form-input
                  v-model="dataPerum.alamat"
                  :placeholder="dataPerum.alamat"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Kabupaten/Kota">
                <!-- <b-form-input v-model="dataPerum.kabKota" :placeholder="dataPerum.kabKota"></b-form-input> -->
                <multiselect
                  v-model="dataPerum.kabKota"
                  :options="kabkot"
                  :multiple="false"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  :placeholder="dataPerum.kabKota"
                ></multiselect>
              </b-form-group>

              <b-form-group label="Kecamatan">
                <!-- <b-form-input v-model="dataPerum.kecamatan" :placeholder="dataPerum.kecamatan"></b-form-input>
                 -->
                <multiselect
                  v-model="dataPerum.kecamatan"
                  :options="kec"
                  :multiple="false"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  :placeholder="dataPerum.kecamatan"
                ></multiselect>
              </b-form-group>

              <b-row>
                <b-col md="6">
                  <b-form-group label="Koordinat Lokasi X">
                    <b-form-input
                      v-model="dataPerum.koordinatX"
                      :placeholder="dataPerum.koordinatX"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Koordinat Lokasi Y">
                    <b-form-input
                      v-model="dataPerum.koordinatY"
                      :placeholder="dataPerum.koordinatY"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Email">
                <b-form-input
                  v-model="dataPerum.email"
                  :placeholder="dataPerum.email"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Kontak Person">
                <b-form-input
                  v-model="dataPerum.CP"
                  :placeholder="dataPerum.CP"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Luas Lahan Perumahan (m2)">
                <b-form-input
                  v-model="dataPerum.luasLahan"
                  :placeholder="setPlace(dataPerum.luasLahan)"
                ></b-form-input>
              </b-form-group>

              <!-- <b-row>
                <b-col md="12">
                  <h5><strong>Rencana & Realisasi Pembangunan Unit</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Rencana Total Pembangunan Unit Rumah (Unit)"
                  >
                    <b-form-input v-model="dataPerum.rencanaPembangunan" :placeholder="setPlace(dataPerum.rencanaPembangunan)"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Unit Terbangun (Unit)">
                    <b-form-input v-model="dataPerum.totalTerbangun" :placeholder="setPlace(dataPerum.totalTerbangun)"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row> -->

              <!-- <b-row>
                <b-col md="12">
                  <h5><strong>Stok Unit</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Stock Unit Subsidi (Unit)">
                    <b-form-input v-model="dataPerum.jmlStockUnitSubsidi" :placeholder="setPlace(dataPerum.jmlStockUnitSubsidi)"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Stock Unit Komersial (Unit)">
                    <b-form-input v-model="dataPerum.jmlStockUnitKomersial" :placeholder="setPlace(dataPerum.jmlStockUnitKomersial)"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row> -->

              <b-row>
                <b-col md="12">
                  <h5><strong>Unit Terjual</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Subsidi (Unit)">
                    <b-form-input
                      v-model="dataPerum.jmlTerjualUnitSubsidi"
                      :placeholder="setPlace(dataPerum.jmlTerjualUnitSubsidi)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Komersial (Unit)">
                    <b-form-input
                      v-model="dataPerum.jmlTerjualUnitKomersial"
                      :placeholder="setPlace(dataPerum.jmlTerjualUnitKomersial)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Upload Foto Perumahan">
                <b-form-file id="file" ref="file"></b-form-file>
              </b-form-group>

              <b-button variant="primary" @click="updatePerum()"
                >Simpan</b-button
              >
            </b-form>
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
import Multiselect from "vue-multiselect";

export default {
  name: "InputPerumahanPengembang",
  data() {
    return {
      isLogin: false,
      dataPerum: [],
      perumId: "",
      kabkot: ["KabKot A", "KabKot B", "KabKot C"],

      kec: ["Kecamatan A", "Kecamatan B", "Kecamatan C"],
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },
  async created() {
    this.perumId = await this.$route.params.id;
    this.dataPerum = await this.getDataPerum(this.perumId);
    console.log(this.dataPerum, 'ini sreat')
  },
  methods: {
    async getDataPerum(id) {
      let perum = await axios
        .get(ipBackEnd + "perumahan/listById/" + id, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = perum.data.data[0];
      return x;
    },
    updatePerum() {
      let vm = this
      console.log(this.dataPerum.namaPerumahan)
      axios
        .post(
          ipBackEnd + "perumahan/update",
          {
            id : vm.dataPerum.id,
            namaPerumahan:vm.dataPerum.namaPerumahan,
            alamat:vm.dataPerum.alamat,
            kabKota:vm.dataPerum.kabKota,
            kecamatan:vm.dataPerum.kecamatan,
            email:vm.dataPerum.email,
            CP:vm.dataPerum.id,
            luasLahan:vm.dataPerum.luasLahan,
            rencanaPembangunan:vm.dataPerum.rencanaPembangunan,
            totalTerbangun:vm.dataPerum.totalTerbangun,
            jmlStockUnitSubsidi:vm.dataPerum.jmlStockUnitSubsidi,
            jmlStockUnitKomersial:vm.dataPerum.jmlStockUnitKomersial,
            jmlTerjualUnitSubsidi:vm.dataPerum.jmlTerjualUnitSubsidi,
            jmlTerjualUnitKomersial:vm.dataPerum.jmlTerjualUnitKomersial,
            koordinatX:vm.dataPerum.koordinatX,
            koordinatY:vm.dataPerum.koordinatY,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/dashboard_pengembang" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPlace(x) {
      if (isNaN(x) || x == null) {
        return x;
      } else {
        let y = x.toString();
        return y;
      }
    },
  },
  watch: {
    "dataPerum.namaPerumahan": function(val) {
      console.log(val);
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

.section-one {
  padding: 60px 0;
}

.section-one .menu {
  width: 100%;
  height: 250px;
  background-color: #4c87f2;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-one .menu h4 {
  color: #fff;
}
</style>
