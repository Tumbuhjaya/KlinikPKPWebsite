<template>
  <div id="daftar_pengembang" >
    <myheader></myheader>
    
    <section class="section-one">
        <b-container>
            

            <b-row class="m-t-30">
                <b-col md="6" offset-md="3">
                    <b-row>
                        <b-col md="12">
                            <h2 class="m-t-0 m-b-0 text-center"><strong>Edit Profil Pengembang</strong></h2>
                        </b-col>
                    </b-row>

                    <b-row class="m-t-30">
                        <b-col md="12">
                            <b-tabs content-class="mt-3" justified>
                                    <b-tab title="Profil Pengembang" active>
                                        <b-row>
                                            <b-col md="12">
                                                <b-form-group label="Nama Pengembang">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Alamat">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Asosiasi">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="NIB">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>
                                                


                                                <b-form-group label="Email">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="No. Telepon">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Website">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Upload Logo Pengembang">
                                                    <b-form-file></b-form-file>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                    </b-tab>
                                    <b-tab title="Akun Pengembang">
                                        <b-row>
                                            <b-col md="12">
                                                <b-form-group label="Username">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Password">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>

                                        <b-row>
                                            <b-col md="12">
                                                <b-button type="submit" variant="primary" @click="register()">Daftar</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-tab>
                            </b-tabs>
                        </b-col>
                    </b-row>
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
  name: "DaftarPengembang",
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

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */
</style>
