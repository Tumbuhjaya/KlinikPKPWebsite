<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit Usulan RTLH</strong>
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
                :to="'/usulan_rtlh'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Data</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Edit</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" offset-md="2">

            <b-form-group label="Nama">
              <b-form-input type="text" v-model="nama"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input type="text" v-model="NIK"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-textarea
                rows="2"
                v-model="alamat"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Pekerjaan">
              <b-form-input type="text" v-model="pekerjaan"></b-form-input>
            </b-form-group>

            <b-form-group label="Jenis Kelamin">
              <b-form-select
                :options="jenisKelamin"
                v-model="kelamin"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="No. KK">
              <b-form-input type="text" v-model="kk"></b-form-input>
            </b-form-group>

            <b-form-group label="Kabupaten/Kota">
              <b-form-select
                :options="kabKot"
                v-model="kab_kota"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Tanggal Lahir">
              <b-form-datepicker id="example-datepicker" v-model="tanggal" locale="id"></b-form-datepicker>
              <!-- <b-form-datepicker id="" @context="onContext"></b-form-datepicker> -->
              <!-- <p class="mb-1">Value: '{{ value }}'</p>
              <p class="mb-1">Selected: '{{ selected }}'</p>
              <p>Formatted: '{{ formatted }}'</p> -->
            </b-form-group>

            <b-form-group label="Pendidikan Terakhir">
              <b-form-input type="text" v-model="sekolah"></b-form-input>
            </b-form-group>

            <b-form-group label="NPWP">
              <b-form-input type="text" v-model="npwp"></b-form-input>
            </b-form-group>

            <b-form-group label="Penghasilan">
              <b-form-input type="text" v-model="penghasilan"></b-form-input>
            </b-form-group>

            <b-form-group label="Status Kepemilikan Tanah">
              <b-form-select
                :options="statusKepemilikan"
                v-model="status1"
             ></b-form-select>
            </b-form-group>

            <b-form-group label="Status Kepemilikan Rumah">
              <b-form-input type="text" v-model="status2"></b-form-input>
            </b-form-group>

            <b-form-group label="Tanah Lain">
              <b-form-input type="text" v-model="tanah_lain"></b-form-input>
            </b-form-group>

            <b-form-group label="Rumah Lain">
              <b-form-input type="text" v-model="rumah_lain"></b-form-input>
            </b-form-group>

            <b-form-group label="Luas Rumah (m2)">
              <b-form-input type="text" v-model="luas"></b-form-input>
            </b-form-group>

            <b-form-group label="Jumlah Penghuni">
              <b-form-input type="text" v-model="jumlah_penghuni"></b-form-input>
            </b-form-group>

            <b-form-group label="Jumlah Keluarga">
              <b-form-input type="text"></b-form-input>
            </b-form-group>

            <b-form-group label="Pernah Menerima Bantuan Renovasi">
              <b-form-input type="text" placeholder="tahun" v-model="tahun"></b-form-input>
            </b-form-group>
            
            <b-form-group label="Sumber Dana">
              <b-form-input type="text" v-model="sumber_dana"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat X">
              <b-form-input type="text" v-model="xe"></b-form-input>
            </b-form-group>

            <b-form-group label="Koordinat Y">
              <b-form-input type="text" v-model="ye"></b-form-input>
            </b-form-group>

            <b-form-group label="Kawasan">
              <b-form-input type="text" v-model="kawasan"></b-form-input>
            </b-form-group>

            <b-form-group label="Upload Foto Rumah (Tampak Depan)">
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

            <b-form-group label="Upload Foto Rumah (Tampak Samping)">
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
import moment from "moment";
moment.locale("id");
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      moment,
      ipBackEnd,
      tokenUser:localStorage.getItem('token'),
      user_id:localStorage.getItem('id'),
      NIK:0,
      src1: "",
      src2: "",
      file1: "",
      file2: "",
      nama:"",
      kelamin:"",
      kk:0,
      kab_kota:"",
      alamat:"",
      tanggal:moment().add(+7,'hours').format('YYYY-MM-DD'),
      sekolah:"",
      pekerjaan:"",
      npwp:0,
      penghasilan:0,
      swadaya:"",
      status1:"",
      status2:"",
      tanah_lain:"",
      rumah_lain:"",
      luas:0,
      jumlah_penghuni:0,
      jumlah_keluarga:0,
      tahun:0,
      sumber_dana:"",
      kawasan:"",
      listKab:[],
      loading:false,
      xe:0,
      ye:0,
      list:[],
      RTLHId:0,
      id:0,
      isLogin: false,
      // value: '',
      // formatted: '',
      // selected: '',
      jenisKelamin: [
        { value: null, text: "-- Pilih --" },
        { value: "", text: "Laki-laki" },
        { value: "", text: "Perempuan" },
      ],

      kabKot: [
        { value: null, text: "-- Pilih --" },
      ],
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
  async created() {
   await this.get_data()
   await this.get_kab_kota()
  },
  methods: {
    // onContext(ctx) {
    //   this.formatted = ctx.selectedFormatted
    //   this.selected = ctx.selectedYMD
    // }
    async get_data(){
      let data = {user_id:this.user_id,id:this.$route.params.id,halaman:1,jumlah:1}
      let listData = await axios({
      method: "post",
      url: ipBackEnd + `RTLH/listByPublish`,
      headers: {token: this.tokenUser},
      data:data
    }) 
      this.NIK=listData.data.data[0].NIK;
      this.src1= listData.data.data[0].foto1;
      this.src2= listData.data.data[0].foto2;
      this.file1= listData.data.data[0].foto1;
      this.file2= listData.data.data[0].foto2;
      this.nama=listData.data.data[0].nama;
      this.kelamin=listData.data.data[0].jenisKelamin;
      this.kk=listData.data.data[0].noKK
      this.kab_kota=listData.data.data[0].kabKota;
      this.alamat=listData.data.data[0].alamat;
      this.tanggal=listData.data.data[0].tanggalLahir;
      this.sekolah=listData.data.data[0].sekolah;
      this.pekerjaan=listData.data.data[0].pekerjaan;
      this.npwp=listData.data.data[0].noNPWP
      this.penghasilan=listData.data.data[0].penghasilan
      this.swadaya=listData.data.data[0].mampuSwadaya;
      this.status1=listData.data.data[0].SCLLahan;
      this.status2=listData.data.data[0].SCLRumah;
      this.tanah_lain=listData.data.data[0].tanahLain;
      this.rumah_lain=listData.data.data[0].rumahLain;
      this.luas=listData.data.data[0].luasRumah
      this.jumlah_penghuni=listData.data.data[0].jumlahPenghuni
      this.jumlah_keluarga=listData.data.data[0].jumlahKeluarga
      this.tahun=listData.data.data[0].tahunBantuan
      this.sumber_dana=listData.data.data[0].sumberBantuan;
      this.kawasan=listData.data.data[0].kawasan;
      this.xe=listData.data.data[0].koordinatX
      this.ye=listData.data.data[0].koordinatY
      this.id = listData.data.data[0].RTLHId
      console.log(listData.data.data[0]);
    },
    handleFile(x) {
      if (x == "file1") {
        this.file1 = this.$refs.file1.files[0];
        this.src1 = URL.createObjectURL(this.file1);
      } else if (x == "file2") {
        this.file2 = this.$refs.file2.files[0];
        this.src2 = URL.createObjectURL(this.file2);
      }
    },
    async get_kab_kota(){
      const list = await axios({
      method: "get",
      url: ipBackEnd + `kabKota/list`,
    })
    for (let i = 0; i <  list.data.data.length; i++) {
       
       this.kabKot.push({value: list.data.data[i].id, text:list.data.data[i].namaKabKota})
    }
     
    },
    async submit() {
    let vm = this;
    vm.loading = true;
    let pernah_menerima_bantuan =  `Pernah Menerima Bantuan Tahun:${vm.tahun}  Dari: ${vm.sumber_dana}`
console.log(moment(vm.tanggal ).add(-7,'hours').format('YYYY-MM-DD'));
 const formData = new FormData();
    formData.append("foto1", vm.file1);
    formData.append("foto2", vm.file2);
    formData.append("nama", vm.nama);
    formData.append("NIK", vm.NIK);
    formData.append("jenisKelamin", vm.kelamin);
    formData.append("noKK", vm.kk);
    formData.append("kabKota", vm.kab_kota);
    formData.append("alamat", vm.alamat);
    formData.append("tanggalLahir",moment(vm.tanggal ).add(-7,'hours').format('YYYY-MM-DD'));
    formData.append("pendidikan", vm.sekolah);
    formData.append("pekerjaan", vm.pekerjaan);
    formData.append("noNPWP", vm.npwp);
    formData.append("penghasilan", vm.penghasilan);
    formData.append("mampuSwadaya", vm.swadaya);
    formData.append("SCLLahan", vm.status1);
    formData.append("SCLRumah", vm.status2);
    formData.append("tanahLain", vm.tanah_lain);
    formData.append("rumahLain", vm.rumah_lain);
    formData.append("luasRumah", vm.luas);
    formData.append("jumlahPenghuni", vm.jumlah_penghuni);
    formData.append("jumlahKeluarga", vm.jumlah_keluarga);
    formData.append("deskripsiRTLH",pernah_menerima_bantuan);
    formData.append("tahunBantuan",vm.tahun);
    formData.append("sumberBantuan",vm.sumber_dana);
    formData.append("koordinatX", vm.xe);  
    formData.append("koordinatY", vm.ye);  
    formData.append("kawasan", vm.kawasan);  
    formData.append("id", vm.id);  

    await axios({
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
          token: this.tokenUser,
        },
        url: ipBackEnd + 'RTLH/update',
        data: formData,
      }).then(async (res)=>{
        if (res.data.message == "sukses") {
          alert('Sukses')
        }else{
          alert('Gagal')
        }
      }) .catch(err=>{
          console.log(err);
          alert('Gagal')
      })
    }
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
