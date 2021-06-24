<template>
  <div id="input_perumahan_pengembang">
    <header>
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="left">
              <router-link :to="'/'" style="text-decoration:none"
                ><h5 class="m-t-0 m-b-0">
                  <strong>Klinik PKP</strong>
                </h5></router-link
              >
            </div>
          </b-col>

          <b-col md="6">
            <div class="right">
              <!-- <h6 class="m-t-0 m-b-0 m-r-15">pengguna@gmail.com</h6>
              <span style="background-color:#fff;padding:4px;border-radius:100px">
                <img src="../assets/avatar_profil.png" alt="">
              </span> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Perumahan</strong>
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
              <h6 class="m-t-0 m-b-0"><strong>Input Perumahan</strong></h6>
            </div>
            <hr />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8" offset-md="2" class="m-t-30">
            <b-form>
              <b-form-group label="Nama Perumahan">
                <b-form-input v-model="namaPerum"></b-form-input>
              </b-form-group>

              <b-form-group label="Alamat">
                <b-form-input v-model="alamat"></b-form-input>
              </b-form-group>

              <b-form-group label="Kabupaten/Kota">
                <b-form-select
                  v-model="kabKot"
                  :options="kabkot"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Kecamatan">
                <b-form-select
                  v-model="keca"
                  :options="kec"
                ></b-form-select>
              </b-form-group>

              <b-form-group label="Email">
                <b-form-input v-model="email"></b-form-input>
              </b-form-group>

              <b-form-group label="Kontak Person">
                <b-form-input v-model="CP"></b-form-input>
              </b-form-group>

              <b-form-group label="Luas Lahan Perumahan (m2)">
                <b-form-input v-model="luasLahan"></b-form-input>
              </b-form-group>

              <b-row>
                <b-col md="12">
                  <h5><strong>Rencana & Realisasi Pembangunan Unit</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="Rencana Total Pembangunan Unit Rumah (Unit)"
                  >
                    <b-form-input v-model="rencanaPemb"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Unit Terbangun (Unit)">
                    <b-form-input v-model="jmlTerbangun"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <h5><strong>Stok Unit</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Stock Unit Subsidi (Unit)">
                    <b-form-input v-model="stockUnitS"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Stock Unit Komersial (Unit)">
                    <b-form-input v-model="stockUnitK"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <h5><strong>Unit Terjual</strong></h5>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Subsidi (Unit)">
                    <b-form-input v-model="terjualUnitS"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group label="Jumlah Terjual Unit Komersial (Unit)">
                    <b-form-input v-model="terjualUnitK"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-form-group label="Upload Foto Perumahan">
                <b-form-file id="file" ref="file" @input="handleFile()"></b-form-file>
              </b-form-group>

              <b-button variant="primary" @click="regisPerumahan()">Simpan</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios"
import ipBackEnd from "@/ipBackEnd"

export default {
  name: "InputPerumahanPengembang",
  data() {
    return {
      isLogin: false,
      namaPerum:"",
      alamat:"",
      kabKot:"",
      keca:"",
      email:"",
      CP:"",
      luasLahan:"",
      rencanaPemb:"",
      jmlTerbangun:"",
      stockUnitS:0,
      stockUnitK:0,
      terjualUnitS:0,
      terjualUnitK:0,
      file:"",
      kabkot: [{ value: null, text: "-- Pilih Kabupaten / Kota --" },
      { value : "Semarang", text : "Semarang"}],
      kec: [{ value: null, text: "-- Pilih Kecamatan --" },{
        value: "Banyumanik", text: "Banyumanik"
      }],
    };
  },
  methods:{
    handleFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.$refs.file.files[0]);
    },
    async regisPerumahan(){
      let vm = this
      console.log(this.file, "ini file");
      let formData = await new FormData();
      await formData.append("file", this.file);
      await formData.append("namaPerumahan",vm.namaPerum );
      await formData.append("alamat",vm.alamat);
      await formData.append("kabKota", vm.kabKot);
      await formData.append("kecamatan", vm.keca);
      await formData.append("email", vm.email);
      await formData.append("rencanaPembangunan", vm.rencanaPemb);
      await formData.append("totalTerbangun", vm.jmlTerbangun);
      await formData.append("jmlStockUnitSubsidi", vm.stockUnitS);
      await formData.append("jmlStockUnitKomersial", vm.stockUnitK);
      await formData.append("jmlTerjualUnitSubsidi", vm.terjualUnitS);
      await formData.append("jmlTerjualUnitKomersial", vm.terjualUnitK);
      console.log(formData, "ini formData");
      axios
        .post(ipBackEnd + "perumahan/register", formData, {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          this.$emit("tembak");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>
header {
  background-color: #4c87f2;
}

header .left {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header .left h5 {
  color: #fff;
}

header .right {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header .right h6 {
  font-size: 14px;
  color: #fff;
}

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
