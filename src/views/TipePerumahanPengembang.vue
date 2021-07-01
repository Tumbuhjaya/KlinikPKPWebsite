<template>
  <div id="tipe_perumahan_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Tipe Perumahan</strong>
            </h2>
            <h5 class="m-t-5 m-b-0 text-center">{{dataPerum.namaPerumahan}}</h5>
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
              <h6 class="m-t-0 m-b-0"><strong>Tipe Perumahan</strong></h6>
            </div>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" class="m-t-30">
            <b-form>
              <b-row>
                <b-col md="4">
                  <h5 class="m-b-30"><strong>Umum</strong></h5>
                  <b-form-group label="Jenis">
                    <b-form-select
                      v-model="jenis"
                      :options="jeniss"
                    ></b-form-select>
                  </b-form-group>

                  <b-form-group label="Tipe">
                    <b-form-input v-model="type"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Jumlah Rumah">
                    <b-form-input v-model="stock"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Harga">
                    <b-form-input v-model="harga"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Luas Bangunan (m2)">
                    <b-form-input v-model="luasBangunan"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Luas Lahan (m2)">
                    <b-form-input v-model="luasLahan"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="4">
                  <h5 class="m-b-30"><strong>Spesifikasi Teknis</strong></h5>
                  <b-form-group label="Atap">
                    <b-form-input v-model="atap"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Dinding">
                    <b-form-input v-model="dinding"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Lantai & Pondasi">
                    <b-form-input v-model="lantaiPondasi"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Jumlah Kamar Mandi">
                    <b-form-input v-model="jmlKamarMandi"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Jumlah Kamar Tidur">
                    <b-form-input v-model="jmlKamarTidur"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col md="4">
                  <h5 class="m-b-30"><strong>Dokumentasi</strong></h5>

                  <b-form-group label="Upload Foto Rumah">
                    <b-form-file
                      id="foto1"
                      ref="foto1"
                      @input="handleFile()"
                    ></b-form-file>
                  </b-form-group>

                  <b-form-group label="Upload Foto Rumah">
                    <b-form-file
                      id="foto2"
                      ref="foto2"
                      @input="handleFile()"
                    ></b-form-file>
                  </b-form-group>

                  <b-form-group label="Upload Foto Rumah">
                    <b-form-file
                      id="foto3"
                      ref="foto3"
                      @input="handleFile()"
                    ></b-form-file>
                  </b-form-group>

                  <b-form-group label="Upload Foto Denah">
                    <b-form-file
                      id="fotoDenah"
                      ref="fotoDenah"
                      @input="handleFile()"
                    ></b-form-file>
                  </b-form-group>

                  <b-form-group label="Video Rumah (Link video dari youtube)">
                    <b-form-input v-model="linkVideo"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-button variant="primary" @click="addTipeRumah()"
                    >Simpan</b-button
                  >
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-table
                    :items="listTipe"
                    :fields="fields"
                    stacked="md"
                    show-empty
                    bordered
                    small
                  >
                    <template #cell(No)="item">
                      {{ item.index + 1 }}
                    </template>
                    <template #cell(actions)="item">
                      <center>
                        <b-button
                          variant="danger"
                          size="sm"
                          @click="hapus(item.item.id)"
                          v-b-tooltip.hover.top="'Hapus'"
                          ><b-icon-trash></b-icon-trash></b-button
                        >
                      </center>
                    </template>
                  </b-table>
                </b-col>
              </b-row>
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

export default {
  name: "TipePerumahanPengembang",
  data() {
    return {
      listTipe: [],
      isLogin: false,
      dataPerum:[],
      jeniss: [
        { value: null, text: "-- Pilih --" },
        { value: "subsidi", text: "Subsidi" },
        { value: "komersial", text: "Komersial" },
      ],
      fields: [
        { key: "No", label: "No", class: "text-center" },
        {
          key: "jenis",
          label: "Jenis",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "type",
          label: "Tipe",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "luasLahan",
          label: "Luas Tanah (m2)",
          sortable: true,
          class: "text-center",
        },
        {
          key: "luasBangunan",
          label: "Luas Bangunan(m2)",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      jenis: "",
      type: "",
      harga: "",
      luasBangunan: 0,
      luasLahan: 0,
      atap: "",
      dinding: "",
      lantaiPondasi: "",
      jmlKamarMandi: "",
      jmlKamarTidur: "",
      stock:"",
      linkVideo: "",
      perumahanId: "",
      terjual: 0,
      foto1: "",
      foto2: "",
      foto3: "",
      fotoDenah: "",
    };
  },
  components: {
    myheader,
    myfooter,
  },
  async created() {
    this.dataPerum = await JSON.parse(localStorage.getItem('dataPerum'))
    console.log(this.dataPerum, ' ini data')
    this.perumahanId = await this.$route.params.id;
    await this.getTipe(this.perumahanId);
  },
  methods: {
    hapus(x) {
      console.log(x);
    },
    handleFile() {
      this.foto1 = this.$refs.foto1.files[0];
      this.foto2 = this.$refs.foto2.files[0];
      this.foto3 = this.$refs.foto3.files[0];
      this.fotoDenah = this.$refs.fotoDenah.files[0];
    },
    async addTipeRumah() {
      let vm = this;
      let formData = await new FormData();
      await formData.append("foto1", vm.foto1);
      await formData.append("foto2", vm.foto2);
      await formData.append("foto3", vm.foto3);
      await formData.append("fotoDenah", vm.fotoDenah);
      await formData.append("jenis", vm.jenis);
      await formData.append("type", vm.type);
      await formData.append("harga", vm.harga);
      await formData.append("luasBangunan", vm.luasBangunan);
      await formData.append("luasLahan", vm.luasLahan);
      await formData.append("atap", vm.atap);
      await formData.append("dinding", vm.dinding);
      await formData.append("lantaiPondasi", vm.lantaiPondasi);
      await formData.append("jmlKamarMandi", vm.jmlKamarMandi);
      await formData.append("stock", vm.stock);
      await formData.append("terjual", vm.terjual);
      await formData.append("linkVideo", vm.linkVideo);
      await formData.append("perumahanId", vm.perumahanId);
      console.log(formData, "ini formData");
      axios
        .post(ipBackEnd + "rumah/register", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push({path:'/dashboard_pengembang'})
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTipe(x) {
      console.log(x);
      axios
        .get(ipBackEnd + "rumah/listByPerumahanId/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.listTipe = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
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

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */

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
