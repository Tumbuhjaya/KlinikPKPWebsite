<template>
  <div id="data_perumahan" >
    <myheader></myheader>

    <section class="section-one">
        <b-container>
            <b-row>
                <b-col md="12">
                    <b-row>
                        <b-col md="3" class="m-t-15 m-b-15" v-for="item in listRumah" :key="item.id">
                            <!-- <router-link :to="'detail_perumahan'" style="text-decoration:none"> -->
                            <div class="box" @click="goDetail(item.id)">
                                <div class="up"><img :src="item.src" alt=""></div>
                                <div class="down m-t-15">
                                    <h5><strong>{{dataPerum[0].namaPerumahan}}</strong></h5>
                                    <h5><strong>Tipe Rumah : {{item.luasBangunan}} / {{item.luasLahan}}</strong></h5>
                                    <h6 class="m-t-15">PT. Pengembang Internasional</h6>

                                    <p class="m-t-15">{{dataPerum[0].alamat}}, {{dataPerum[0].kabKota}}</p>
                                </div>
                            
                            </div>
                            <!-- </router-link> -->
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
import axios from 'axios'
import ipBackEnd from "@/ipBackEnd"
import myheader from "../components/header"
import myfooter from "../components/footer"

export default {
  name: "DataPerumahan",
 data (){
   return{
     isLogin: false,
     selected: null,
     listRumah:[],
     dataPerum:[],
      kabkot: [
          { value: null, text: '-- Pilih Kabupaten / Kota --' }
      ],

      kec: [
          { value: null, text: '-- Pilih Kecamatan --' }
      ],

      jenis: [
          { value: null, text: '-- Pilih Jenis --' },
          { value: 'Subsidi', text: 'Subsidi' },
          { value: 'Komersial', text: 'Komersial' }
      ],

      urutkan: [
          { value: null, text: '-- Urutkan --' }
      ],
   };
 },
 components:{
  myheader,
  myfooter
},
created(){
    let x = this.$route.params.id
    this.getTipeRumah(x)
    this.getDataPerum(x)
},
methods:{
    getTipeRumah(x){
        axios
        .get(ipBackEnd + "rumah/listByPerumahanId/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let x= res.data.data;
          this.listRumah = x.map(item =>{
              return {...item, src:ipBackEnd + item.foto1}
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataPerum(x){
        axios
        .get(ipBackEnd + "perumahan/listById/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.dataPerum = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goDetail(x){
        console.log(x)
        this.$router.push({path:`/detail_perumahan/${x}`})
    }
}
};
</script>

<style scoped>

.layout{
  width: 100%;
  height: 100px;
  background-color: aqua;
}

.layout2{
 width: 100%;
  height: 100px;
  background-color: aqua;
}

.section-one{
  padding: 60px 0;
}

.section-one .box-search{
    background-color: #fff;
    border-radius: 25px;
    padding: 35px 25px;
    box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
}


.section-one .box{
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);

}

.section-one .box img{
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.section-one .box .down{
  padding: 15px;
}

.section-one .box .down .harga{
  font-size: 12px;
}

</style>
