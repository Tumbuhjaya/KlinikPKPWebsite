<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Input Usulan Pembangunan</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/usulan'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <router-link
                :to="'/usulan_pembangunan'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Data</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Input </strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">

            <b-form-group label="Nama">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-textarea
                rows="2"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Pekerjaan">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Penghasilan">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Status Kepemilikan Tanah">
              <b-form-select
                :options="statusKepemilikan"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Luas Tanah (m2)">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat X">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat Y">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Upload Foto Lokasi Tanah">
                <b-form-file
                  id="file1"
                  ref="file1"
                  @input="handleFile('file1')"
                ></b-form-file>
                <div
                  style="width: 150px; height: 150px"
                  v-if="src1 != ipBackEnd + 'null'"
                >
                  <img :src="src1" alt="" style="width: 150px; height: 150px" />
                </div>
            </b-form-group>

            <b-form-group label="Upload Foto Lokasi Tanah">
                <b-form-file
                  id="file2"
                  ref="file2"
                  @input="handleFile('file2')"
                ></b-form-file>
                <div
                  style="width: 150px; height: 150px"
                  v-if="src2 != ipBackEnd + 'null'"
                >
                  <img :src="src2" alt="" style="width: 150px; height: 150px" />
                </div>
            </b-form-group>
            

            <b-button variant="primary" @click="submit">Simpan</b-button>
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
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
      tokenUser:localStorage.getItem('token'),
      user_id:localStorage.getItem('id'),
      ipBackEnd,
      file1:"",
      file2:"",
      src1: ipBackEnd+"null",
      src2: ipBackEnd+"null",
      nama:"",
      nik:0,
      alamat:"",
      pekerjaan:"",
      penghasilan:0,
      status:"",
      luas:0,
      xe:0,
      ye:0,
      // value: '',
      // formatted: '',
      // selected: '',
      statusKepemilikan: [
        { value: null, text: "-- Pilih --" },
        { value: "", text: "Hak Milik" },
        { value: "", text: "Hak Guna Usaha" },
        { value: "", text: "Hak Guna Bangunan" },
        { value: "", text: "Hak Pakai" },
      ],
    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
  },
  methods: {
    // onContext(ctx) {
    //   this.formatted = ctx.selectedFormatted
    //   this.selected = ctx.selectedYMD
    // }
    handleFile(x) {
      if (x == "file1") {
        this.file1 = this.$refs.file1.files[0];
        this.src1 = URL.createObjectURL(this.file1);
      } else if (x == "file2") {
        this.file2 = this.$refs.file2.files[0];
        this.src2 = URL.createObjectURL(this.file2);
      }
    },
    async submit() {
      let vm = this;

      const formData = new FormData();
      formData.append("foto1", vm.file1);
      formData.append("foto2", vm.file2);
      formData.append("nama_pengusul", vm.nama);
      formData.append("NIK_pengusul", vm.nik);
      formData.append("alamat_pengusul", vm.alamat);
      formData.append("pekerjaan_pengusul", vm.pekerjaan);
      formData.append("penghasilan_pengusul", vm.penghasilan);
      formData.append("status_kepemilikan_tanah", vm.status);
      formData.append("luas_tanah", vm.luas);
      formData.append("koordinat_lokasi_X", vm.xe);
      formData.append("koordinat_lokasi_Y", vm.ye);
    
        await axios({
          method: "post",
          headers: {
            "Content-Type": "multipart/form-data",
            token: this.tokenUser,
          },
          url: ipBackEnd+'usulan_pembangunan_rumah/register',
          data: formData,
        }).then(async (res)=>{
          if (res.data.message == "sukses") {
            vm.loading = false;
            this.file1= "";
            this.file2= "";
            this.src1= "";
            this.src2= "";
            this.nama="";
            this.nik=0;
            this.alamat="";
            this.pekerjaan="";
            this.penghasilan=0;
            this.status="";
            this.luas=0;
            this.xe=0;
            this.ye=0;
            vm.$router.push("/usulan_pembangunan");
          }else{
            vm.loading = false;
          }
        }).catch(err=>{
            console.log(err);
            vm.loading = false;
        })
    },
  },
  watch: {
    
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
</style>
