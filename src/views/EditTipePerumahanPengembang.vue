<template>
  <div id="tipe_perumahan_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Tipe Perumahan</strong>
            </h2>
            <h5 class="m-t-5 m-b-0 text-center">{{dataPerum.namaPerumahan}}</h5>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6" offset-md="3">
            <hr  class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_pengembang'"
                style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0" @click="back(dataTipe.perumahanId)">Tipe Perumahan</h6>
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Edit Tipe Perumahan</strong></h6>
            </div>
            <hr  class="m-t-10 m-b-10" />
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
                        :options="jeniss"
                        v-model="dataTipe.jenis"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group label="Tipe">
                      <b-form-input
                      v-model="dataTipe.type"></b-form-input>
                    </b-form-group>

                    <!-- <b-form-group label="Nomor Kavling">
                      <b-form-input
                      v-model="dataTipe.nomorKapling"></b-form-input>
                    </b-form-group> -->

                    <b-form-group label="Stok">
                      <b-form-input
                      type="number"
                      v-model="dataTipe.stok_properti"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Harga">
                      <b-form-input
                      v-model="dataTipe.harga"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Luas Bangunan (m2)">
                      <b-form-input
                      v-model="dataTipe.luasBangunanRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Luas Lahan (m2)">
                      <b-form-input
                      v-model="dataTipe.luasLahanRumah"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Spesifikasi Teknis">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Atap">
                      <b-form-input
                      v-model="dataTipe.atapRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Dinding">
                      <b-form-input
                      v-model="dataTipe.dindingRumah"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Lantai & Pondasi">
                      <b-form-input
                      v-model="dataTipe.lantaiPondasiRumah"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Jumlah Kamar Mandi">
                      <b-form-input
                      v-model="dataTipe.jmlKamarMandi"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Jumlah Kamar Tidur">
                      <b-form-input
                      v-model="dataTipe.jmlKamarTidur"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Dokumentasi">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Upload Foto Rumah (Foto Utama)" style="margin-bottom:0px !important">
                      <b-form-file
                        id="foto1"
                        ref="foto1"
                        @input="handleFile('foto1')"
                      ></b-form-file>
                    </b-form-group>

                    <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;" v-if="dataTipe.src1 != ipBackEnd + 'null'">
                        <img :src="dataTipe.src1" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;" v-if="dataTipe.src1 == ipBackEnd + 'null'">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group>

                    <b-form-group label="Upload Foto Rumah" style="margin-bottom:0px !important">
                      <b-form-file
                        id="foto2"
                        ref="foto2"
                        @input="handleFile('foto2')"
                      ></b-form-file>
                    </b-form-group>

                    <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;" v-if="dataTipe.src2 != ipBackEnd + 'null'">
                        <img :src="dataTipe.src2" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;" v-if="dataTipe.src2 == ipBackEnd + 'null'">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group>


                    <b-form-group label="Upload Foto Rumah" style="margin-bottom:0px !important">
                      <b-form-file
                        id="foto3"
                        ref="foto3"
                        @input="handleFile('foto3')"
                      ></b-form-file>
                    </b-form-group>

                    <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;" v-if="dataTipe.src3 != ipBackEnd + 'null'">
                        <img :src="dataTipe.src3" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;" v-if="dataTipe.src3 == ipBackEnd + 'null'">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group>
                  </b-col>

                  <b-col md="6">
                    <b-form-group label="Upload Foto Denah" style="margin-bottom:0px !important">
                      <b-form-file
                        id=fotoDenah
                        ref="fotoDenah"
                        @input="handleFile('fotoDenah')"
                      ></b-form-file>
                    </b-form-group>

                    <b-form-group class="m-t-15">
                      <div style="width:150px;height:150px;" v-if="dataTipe.srcDenah != ipBackEnd + 'null'">
                        <img :src="dataTipe.srcDenah" alt="" style="width:150px;height:150px">
                      </div>
                      
                      <div style="width:150px;height:150px;" v-if="dataTipe.srcDenah == ipBackEnd + 'null'">
                        <img src="../assets/tidak-ada-gambar.png" alt="" style="width:150px;height:150px">
                      </div>
                    </b-form-group>

                    <b-form-group label="Video Rumah (Link video dari youtube)">
                      <b-form-input v-model="dataTipe.linkVideo"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>

              <b-tab title="Simpan Data">
                <b-row>
                  <b-col md="12">
                    <b-form-group label="Apakah anda yakin akan menyimpan data ini ?">
                      <b-button variant="primary" @click="updateRumah()">Simpan</b-button>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
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
      dataTipe: [],
      isLogin: false,
      dataPerum:[],
      ipBackEnd: ipBackEnd,
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
      foto1: "",
      foto2: "",
      foto3: "",
      fotoDenah: "",
      blank:"_blank"
    };
  },
  components: {
    myheader,
    myfooter,
  },
  async created() {
    this.rumahId = await this.$route.params.id;
    await this.getTipe(this.rumahId);
  },
  methods: {
    hapus(x) {
      console.log(x);
    },
    handleFile(x) {
      if (x == 'foto1'){
        this.foto1 = this.$refs.foto1.files[0];
        this.dataTipe.src1 = URL.createObjectURL(this.foto1)
      }
      else if ( x == 'foto2'){
        this.foto2 = this.$refs.foto2.files[0];
        this.dataTipe.src2 = URL.createObjectURL(this.foto2)
      }
      else if ( x == 'foto3'){
        this.foto3 = this.$refs.foto3.files[0];
        this.dataTipe.src3 = URL.createObjectURL(this.foto3)
      } else if ( x == 'fotoDenah'){
        this.fotoDenah = this.$refs.fotoDenah.files[0];
        this.dataTipe.srcDenah = URL.createObjectURL(this.fotoDenah)
      }
    },
    updateRumah(){
      this.changeFoto()
      axios.post(ipBackEnd + 'rumah/update', this.dataTipe, {
        headers:{
          token:localStorage.getItem('token')
        }
      }).then(res =>{
        console.log(res)
        this.$router.push({path:'/dashboard_pengembang'})
      }).catch( err =>{
        console.log(err)
      })
    },
    changeFoto() {
      let vm = this;
      let formData = new FormData();
      if(vm.foto1 != ""){
        formData.append("foto1", vm.foto1);
      }
      if(vm.foto2 != ""){
        formData.append("foto2", vm.foto2);
      }
      if(vm.foto3 != ""){
        formData.append("foto3", vm.foto3);
      }
      if(vm.fotoDenah != ""){
        formData.append("fotoDenah", vm.fotoDenah);
      }
      formData.append("id", vm.rumahId);
      console.log(formData, "ini formData");
      axios
        .post(ipBackEnd + "rumah/changeFoto", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTipe(x) {
      console.log(x);
      axios
        .get(ipBackEnd + "rumah/listRumah/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.dataTipe = res.data.data[0];
          this.dataTipe.src1 = ipBackEnd + this.dataTipe.foto1
          this.dataTipe.src2 = ipBackEnd + this.dataTipe.foto2
          this.dataTipe.src3 = ipBackEnd + this.dataTipe.foto3
          this.dataTipe.srcDenah = ipBackEnd + this.dataTipe.fotoDenah
          console.log(this.dataTipe)
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(x){
      this.$router.push({path:'/tipe_perumahan_pengembang/' + x})
    }
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
