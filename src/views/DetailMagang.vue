<template>
  <div id="detail_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Judul Karir/Magang</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
            <b-col md="5">
                <div class="b-row">
                    <b-col md="12">
                        <img src="https://via.placeholder.com/360" alt="" style="width:100%">
                    </b-col>

                    <b-col md="12" class="m-t-15">
                      <router-link :to="'/gabung_magang'">
                        <center><b-button variant="primary">Gabung Karir/Magang</b-button></center>
                      </router-link>
                    </b-col>
                </div>
                
            </b-col>

            <b-col md="7">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis tempore labore omnis dolorum quasi officia, dignissimos vel voluptatem tempora quibusdam optio doloremque ullam dolores, quis iure. Rem tenetur quisquam nisi et at fugiat atque, asperiores rerum architecto officia officiis, natus quis ex veniam debitis sapiente consequuntur sunt, cumque vitae distinctio. Enim esse praesentium natus blanditiis, tempore sit quo tempora ea perspiciatis rem pariatur vitae quisquam ipsum veniam quibusdam at cum suscipit molestias exercitationem. Nulla dolor, praesentium delectus tenetur hic ut, aspernatur, quidem culpa ipsa quaerat sapiente minima eveniet. Cupiditate expedita, quas fugit perspiciatis nulla in error dignissimos! Provident, dicta!</p>
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

export default {
  name: "detail_magang",
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

.card-title{
    font-size: 16px;
    font-weight: bold;
}
</style>
