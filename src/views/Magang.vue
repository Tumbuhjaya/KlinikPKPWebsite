<template>
  <div id="magang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Karir / Magang</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row>
          <b-card-group columns>
            <b-card
              :title="item.judulMagang"
              :img-src="item.src"
              img-alt="Tidak Ada Foto"
              img-top
              v-for="item in listMagang" :key="item.id"
              class="mt-3"
            >
            <b-button variant="primary" @click="goDetailM(item.id)">Detail</b-button>
            </b-card>

            

            
          </b-card-group>
          <!-- <b-col md="4">
            <b-card
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maxime?"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="m-t-30"
            >
              <router-link :to="'detail_magang'">
                <b-button variant="primary">Detail</b-button>
              </router-link>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maxime?"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="m-t-30"
            >
              <router-link :to="'detail_magang'">
                <b-button variant="primary">Detail</b-button>
              </router-link>
            </b-card> -->
          <!-- </b-col> -->
          <!-- <b-col md="4">
            <b-card
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, maxime?"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="m-t-30"
            >
              <router-link :to="'detail_magang'">
                <b-button variant="primary">Detail</b-button>
              </router-link>
            </b-card>
          </b-col> -->
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

export default {
  name: "magang",
  data() {
    return {
      isLogin: false,
      listMagang:[],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.getMagang();
  },
  methods: {
    getMagang() {
      axios
        .get(ipBackEnd + "magang/listPublished")
        .then((res) => {
          console.log(res)
          let x = res.data.data;
          this.listMagang = x.map(item =>{
            return {...item, src: ipBackEnd + item.foto}
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goDetailM(x){
      this.$router.push({path: '/detail_magang/' + x})
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

.card-title {
  font-size: 16px;
  font-weight: bold;
}
</style>
