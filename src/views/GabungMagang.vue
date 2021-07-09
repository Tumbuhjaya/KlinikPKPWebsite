<template>
  <div id="gabung_magang">
    <myheader></myheader>

    <section class="section-one">
    <b-container>
        <b-row>
            <b-col md="12">
                 <h2 class="m-t-0 m-b-0 text-center">
                    <strong>Formulir Pendaftaran Magang</strong>
                </h2>
            </b-col>
        </b-row>
        
        <b-row class="m-t-30">
            <b-col md="8" offset-md="2">
                <b-form-group label="Nama">
                    <b-form-input v-model="kegiatan"></b-form-input>
                </b-form-group>

                <b-form-group label="Alamat">
                    <b-form-input v-model="kegiatan"></b-form-input>
                </b-form-group>

                <b-form-group label="Email">
                    <b-form-input v-model="kegiatan"></b-form-input>
                </b-form-group>

                <b-form-group label="No. Telepon (Whatsapp)">
                    <b-form-input v-model="kegiatan"></b-form-input>
                </b-form-group>

                <b-form-group label="Upload Foto Selfi KTP / KTM">
                    <b-form-file></b-form-file>
                </b-form-group>

                <b-form-group label="Upload Surat Permohonan dan CV (.pdf)">
                    <b-form-file></b-form-file>
                </b-form-group>

                <b-button variant="primary">Daftar</b-button>
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
// import axios from "axios";
// import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
// import Multiselect from "vue-multiselect";

export default {
  name: "InputCsr",
  data() {
    return {
      isLogin: false,
     
    };
  },
  components: {
    myheader,
    myfooter,
  },
  
  methods: {
    
  },
  watch:{

  }
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
