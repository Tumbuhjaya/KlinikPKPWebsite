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
                  <b-td>-</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Tanggal</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Jam</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Materi Konsultasi</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>

            <p><strong>Tidak disetujui | Telah disetujui</strong> oleh Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Jawa Tengah yang akan dilaksanakan secara <strong>"OFFLINE | ONLINE"</strong> pada :</p>

            <b-table-simple borderless striped>
              <b-tbody>
                <b-tr>
                  <b-td style="width: 160px;;">Hari</b-td>
                  <b-td style="width: 5px;">:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Tanggal</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <b-tr>
                  <b-td>Jam</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <!-- jika online -->
                <b-tr>
                  <b-td>Link Meeting Online</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>

                <!-- jika offline -->
                <b-tr>
                  <b-td>Lokasi</b-td>
                  <b-td>:</b-td>
                  <b-td>-</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
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
    // Multiselect,
  },
  created() {
  },
  methods: {
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
