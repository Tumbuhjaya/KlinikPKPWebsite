<template>
  <div id="detail_rtlh">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Detail RTLH</strong>
            </h2>
          </b-col>
        </b-row>
        
        <b-row class="m-t-30">
            <CoolLightBox 
                :items="items" 
                :index="index"
                @close="index = null">
            </CoolLightBox>

            <div class="images-wrapper">
                <div
                    class="image"
                    v-for="(image, imageIndex) in items"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')',width:'100%',height:'100%', backgroundSize:'cover'}"
                ></div>
            </div>
        </b-row>
      </b-container>
    </section>

    <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import ipBackEnd from '@/ipBackEnd'
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "detail_rtlh",
  data() {
    return {
      isLogin: false,
      items: [
        'https://picsum.photos/1024/480/?image=52',
      ],
      index: null
    };
  },
  components: {
    myheader,
    myfooter,
    CoolLightBox,
  },
  created(){

  },
  methods:{
    getRTLH(){
      axios.get(ipBackEnd + 'RTLH/list').then(res =>{
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
    }
  }
  }
  
  
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
.images{
    background-color: red !important;
}
.images-wrapper{
    width: 100px;
    height:100px;
    background-color: red;
    /* display: flex; */
}
</style>
