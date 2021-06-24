<template>
  <div id="pengembang" >
    <myheader></myheader>

    <section class="section-one">
        <b-container>
            <b-row>
                <b-col md="12">
                    <h2 class="m-t-0 m-b-0 text-center"><strong>Pengembang Perumahan</strong></h2>
                </b-col>
            </b-row>

            <b-row class="m-t-30">
                <b-col md="12">
                    <b-alert show variant="primary">
                        <h4 class="alert-heading">Segera daftarkan perusahaan anda !</h4>
                        <p>Daftarkan perusahaan anda melalui menu pengembang. Anda akan mendapatkan akses khusus pengembang pada Klinik PKP, lalu isikan profil perusahaan dan rumah-rumah yang anda jual</p>
                        <hr>
                        <router-link :to="'daftar_pengembang'" >
                            <b-button variant="warning">Daftar</b-button>
                        </router-link>
                    </b-alert>
                </b-col>
            </b-row>


            <b-row class="m-t-15">
                <b-col md="12">
                    <b-table-simple bordered>
                        <b-thead>
                            <b-tr>
                                <b-th>No.</b-th>
                                <b-th>Nama</b-th>
                                <b-th>Alamat</b-th>
                                <b-th>Option</b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody>
                            <b-tr>
                                <b-td>1.</b-td>
                                <b-td>Adikarya</b-td>
                                <b-td>Jalan Raya Pasar Minggu KM. 18 Jakarta Selatan 12510 Indonesia</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>2.</b-td>
                                <b-td>Wijayakarya</b-td>
                                <b-td>JL. D.I. Panjaitan Kav. 9-10, Jakarta 13340</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>3.</b-td>
                                <b-td>Agung Sedayu Grup</b-td>
                                <b-td>ASG Tower, Jl. Pantai Indah Kapuk, Boulevard Kamal Muara Penjaringan, Jakarta Utara 14470</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
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
import myheader from "../components/header"
import myfooter from "../components/footer"



export default {
  name: "Pengembang",
  data (){
    return{
      isLogin: false,
    };
  },

  components:{
    myheader,
    myfooter
  },

};
</script>

<style scoped>
.section-one {
    padding: 60px 0;
}
</style>
