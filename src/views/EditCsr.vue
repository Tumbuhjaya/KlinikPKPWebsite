<template>
  <div id="edit_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Edit CSR</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_csr'"
                style="text-decoration:none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Edit CSR</strong></h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
            <b-col md="8" offset-md="2" >
                <b-form-group label="Kabupaten/Kota">
                    <multiselect
                    :options="kabkot"
                    v-model="datasCsr.kabKota"
                    :multiple="false"
                    :searchable="true"
                    :close-on-select="true"
                    :show-labels="false"
                    placeholder="-- Pilih Kabupaten/Kota --"
                    ></multiselect>
                </b-form-group>

                <b-form-group label="Kegiatan">
                    <b-form-input v-model="datasCsr.kegiatan"></b-form-input>
                </b-form-group>

                <b-form-group label="Deskripsi">
                    <b-form-textarea rows="3" v-model="datasCsr.deskripsi"></b-form-textarea>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file id="foto1" ref="foto1" @input="handleFile()"></b-form-file>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file id="foto1" ref="foto1" @input="handleFile()"></b-form-file>
                </b-form-group>

                <b-form-group label="Upload Foto Kegiatan">
                    <b-form-file id="foto1" ref="foto1" @input="handleFile()"></b-form-file>
                </b-form-group>


                <b-button variant="primary" @click="editCsr()">Simpan</b-button>
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
import Multiselect from "vue-multiselect";

export default {
  name: "EditCsr",
  data() {
    return {
      isLogin: false,
      datasCsr:[],
      kabKot: "",
      foto1:"",
      foto2:"",
      foto3:"",
      kabkot: [],      
    };
  },
  components: {
    myheader,
    myfooter,
    Multiselect,
  },
  created(){
    this.getkota()
  },
  methods: {
    handleFIle(){
      this.foto1 = this.$refs.foto1.files[0]
      this.foto2 = this.$refs.foto2.files[0]
      this.foto3 = this.$refs.foto3.files[0]
    },
    EditCsr(){
      let vm = this
      let formData = new formData
      formData.append('foto1',vm.foto1)
      formData.append('foto2',vm.foto2)
      formData.append('foto3',vm.foto3)
      formData.append('deskripsi',vm.deskripsi)
      formData.append('kegiatan',vm.kegiatan)
      axios.post(ipBackEnd + '', formData, {
        headers:{
          token: localStorage.getItem('token')
        }
      }).then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    },
    getkota(){
    axios.get(ipBackEnd + 'kabKota/list',{
      headers:{
        token: localStorage.getItem('token')
      }
    }).then(res =>{
      console.log(res.data.data)
      let x = res.data.data
      this.kabkot = x.map(item =>{
        return item.namaKabKota
      })
    }).catch(err =>{
      console.log(err)
    })
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
</style>
