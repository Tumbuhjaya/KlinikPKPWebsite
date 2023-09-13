<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Detail Konsultasi</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/konsultasi'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Data</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Detail Konsultasi</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="8" offset-md="2">
            <p>Berdasarkan permohonan konsultasi yang anda ajukan pada :</p>
            <b-table-simple borderless striped>
              <b-tbody>
                <b-tr>
                  <b-td style="width: 160px;;">Hari</b-td>
                  <b-td style="width: 5px;">:</b-td>
                  <b-td>{{ hari_pengajuan }}</b-td>
                </b-tr>
                
                <b-tr>
                  <b-td>Tanggal</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ tanggal_pengajuan }}</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Jam</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ jam_pengajuan }}</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Materi Konsultasi</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ materi }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <div v-if="publish==1">
            <p><strong>{{ status }}</strong> oleh Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Jawa Tengah yang akan dilaksanakan secara <strong>{{ line }}</strong> pada :</p>

            <b-table-simple borderless striped>
              <b-tbody>
                <b-tr>
                  <b-td style="width: 160px;;">Hari</b-td>
                  <b-td style="width: 5px;">:</b-td>
                  <b-td>{{ hari_konsultasi }}</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Tanggal</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ tanggal_konsultasi }}</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Jam</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ jam_konsultasi }}</b-td>
                </b-tr>

                <!-- jika online -->
                <b-tr v-if="line=='Online'">
                  <b-td>Link Meeting Online</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ link }}</b-td>
                </b-tr>

                <!-- jika offline -->
                <b-tr v-if="line=='Offline'">
                  <b-td>Lokasi</b-td>
                  <b-td>:</b-td>
                  <b-td>{{ lokasi }}</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
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
import moment from "moment";
moment.locale("id");
export default {
  name: "InputCsr",
  data() {
    return {
      moment,
      isLogin: false,
      tokenUser:localStorage.getItem('token'),
      user_id:localStorage.getItem('id'),
      id:this.$route.params.id,
      status:"",
      publish:0,
      line:"",
      hari_pengajuan:"",
      tanggal_pengajuan:"",
      jam_pengajuan:"",
      materi:"",
      hari_konsultasi:"",
      tanggal_konsultasi:"",
      jam_konsultasi:"",
      link:"",
      lokasi:"",


    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
    this.get_data()
  },
  methods: {
    async get_data(){
      let data = {
      halaman:1,
      jumlah:1,
      id:this.id
    }    
      let listData = await axios({
        method: "post",
        url: ipBackEnd + `konsultasi/listByPublish`,
        headers: {token: this.tokenUser,},
        data:data
      })
      this.publish=listData.data.data[0].publish
      this.status=listData.data.data[0].publish==1?'Di Setujui':listData.data.data[0].publish==0?'Menunggu Verifikasi':listData.data.data[0].publish==2?'Di Tolak':''
      this.line=listData.data.data[0].link_meeting_online
      this.hari_pengajuan=moment(listData.data.data[0].waktu_konsultasi).format('dddd')
      this.tanggal_pengajuan=moment(listData.data.data[0].waktu_konsultasi).format('L')
      this.jam_pengajuan=moment(listData.data.data[0].waktu_konsultasi).format('h:mm')
      this.materi=listData.data.data[0].materi_konsultasi
      if (listData.data.data[0].jadwal_konsultasi) {
        this.hari_konsultasi=moment(listData.data.data[0].jadwal_konsultasi).format('dddd')
        this.tanggal_konsultasi=moment(listData.data.data[0].jadwal_konsultasi).format('L')
        this.jam_konsultasi=moment(listData.data.data[0].jadwal_konsultasi).format('h:mm')
      }
      if (listData.data.data[0].link_meeting_online) {
        this.link=listData.data.data[0].link_meeting_online

      }
      if (listData.data.data[0].lokasi_konsultasi) {
        this.lokasi=listData.data.data[0].lokasi_konsultasi

      }
      this.line = listData.data.data[0].link_meeting_online?'Online':'Offline'
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
