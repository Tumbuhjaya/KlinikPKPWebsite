<template>
  <div id="detail_magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>JUDUL CSRNYA</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <img
                  src="https://via.placeholder.com/360"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  src="https://via.placeholder.com/360"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          <b-col md="4">
            <img
                  src="https://via.placeholder.com/360"
                  alt=""
                  style="width:100%"
                />
          </b-col>

          
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio veniam aliquid nam ab aliquam quisquam. Quidem similique rerum pariatur!
            </p>
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
      magangId: 0,
      dataMagang:[]
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

.section-one {
  padding: 60px 0;
}

</style>
