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
            <h5 class="m-t-5 m-b-0 text-center">
              {{ dataPerum.namaPerumahan }}
            </h5>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_pengembang'"
                style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Tipe Perumahan</strong></h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" class="m-t-30">
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Umum" active>
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Jenis">
                      <b-form-select
                        v-model="jenis"
                        :options="jeniss"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group label="Tipe">
                      <b-form-input v-model="type"></b-form-input>
                    </b-form-group>

                    <b-form-group label="No Kavling">
                      <b-form-input v-model="noKavling"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Harga">
                      <b-form-input v-model="harga"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Luas Bangunan (m2)">
                      <b-form-input v-model="luasBangunanRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Luas Lahan (m2)">
                      <b-form-input v-model="luasLahanRumah"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Spesifikasi Teknis">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Atap">
                      <b-form-input v-model="atapRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Dinding">
                      <b-form-input v-model="dindingRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Lantai & Pondasi">
                      <b-form-input v-model="lantaiPondasiRumah"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Jumlah Kamar Mandi">
                      <b-form-input v-model="jmlKamarMandi"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Jumlah Kamar Tidur">
                      <b-form-input v-model="jmlKamarTidur"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Dokumentasi">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Upload Foto Rumah (Foto Utama)">
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
                  </b-col>

                  <b-col md="6">
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
              </b-tab>

              <b-tab title="Simpan Data">
                <b-row>
                  <b-col md="12">
                    <b-form-group
                      label="Apakah anda yakin akan menyimpan data ini ?"
                    >
                      <b-button variant="primary" @click="addTipeRumah()"
                        >Simpan</b-button
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <hr class="m-t-15 m-b-30" />
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
                    class="m-r-15"
                    ><b-icon-trash></b-icon-trash
                  ></b-button>
                  <b-button
                    variant="info"
                    size="sm"
                    @click="goEditR(item.item.id)"
                    v-b-tooltip.hover.top="'Edit'"
                    class="m-r-15"
                    ><b-icon-pencil></b-icon-pencil
                  ></b-button>
                  <b-button
                    variant="warning"
                    size="sm"
                    @click="$bvModal.show('jual'), hapusId = item.item.id"
                    v-b-tooltip.hover.top="'Terjual'"
                    class="m-r-15"
                    ><b-icon-basket-fill></b-icon-basket-fill
                  ></b-button>
                </center>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <b-modal id="jual" hide-footer>
      <div><h5>Apakah Anda Yakin Merubah status menjadi Terjual?</h5></div>
      <div>
        <center>
          <b-button class="text-white bg-success mr-1" @click="jual(hapusId)">Yakin</b-button>
          <b-button class="text-danger bg-white ml-1">Tidak</b-button>
        </center>
      </div>
    </b-modal>
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
      dataPerum: [],
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
          class: "text-center",
          sortDirection: "desc",
        },
        {
          key: "nomorKapling",
          label: "No Kavling",
          sortable: true,
          class: "text-center",
          sortDirection: "desc",
        },
        {
          key: "luasLahanRumah",
          label: "Luas Tanah (m2)",
          sortable: true,
          class: "text-center",
        },
        {
          key: "luasBangunanRumah",
          label: "Luas Bangunan(m2)",
          sortable: true,
          class: "text-center",
        },
        {
          key: "terjual",
          label: "Status",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
          formatter: (value) => {
            if (value == 0) {
              return "Tersedia";
            } else {
              return "Terjual";
            }
          },
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      hapusId:"",
      jenis: "",
      type: "",
      harga: "",
      luasBangunanRumah: 0,
      luasLahanRumah: 0,
      atapRumah: "",
      dindingRumah: "",
      lantaiPondasiRumah: "",
      jmlKamarMandi: "",
      jmlKamarTidur: "",
      noKavling: "",
      statusTerjual: 0,
      stock: 1,
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
    this.perumahanId = await this.$route.params.id;
    await this.getTipe(this.perumahanId);
  },
  methods: {
    jual(x) {
      axios
        .post(
          ipBackEnd + "rumah/update",
          {
            id: x,
            terjual: 1,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getTipe(this.perumahanId);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    hapus(x) {
      axios
        .post(
          ipBackEnd + "rumah/delete",
          {
            id: x,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getTipe(this.perumahanId);
        })
        .catch((err) => {
          console.log(err);
        });
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
      await formData.append("luasBangunanRumah", vm.luasBangunanRumah);
      await formData.append("luasLahanRumah", vm.luasLahanRumah);
      await formData.append("atapRumah", vm.atapRumah);
      await formData.append("dindingRumah", vm.dindingRumah);
      await formData.append("lantaiPondasiRumah", vm.lantaiPondasiRumah);
      await formData.append("jmlKamarMandi", vm.jmlKamarMandi);
      await formData.append("jmlKamarTidur", vm.jmlKamarTidur);
      await formData.append("stock", vm.stock);
      await formData.append("nomorKapling", vm.noKavling);
      await formData.append("statusTerjual", vm.statusTerjual);
      await formData.append("terjual", vm.terjual);
      await formData.append("linkVideo", vm.linkVideo);
      await formData.append("perumahanId", vm.perumahanId);
      axios
        .post(ipBackEnd + "rumah/register", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.getTipe(this.perumahanId);
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
    goEditR(x) {
      this.$router.push({ path: "/edit_tipe_perumahan_pengembang/" + x });
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
