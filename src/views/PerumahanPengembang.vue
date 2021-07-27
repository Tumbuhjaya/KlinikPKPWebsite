<template>
  <div id="perumahan_pengembang">
    <myheader></myheader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>{{ listPerum[0].namaPerusahaan }}</strong>
            </h2>
            <h5 class="text-center">{{ listPerum[0].alamat }}</h5>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <div
              class="box"
              v-for="item in listPerum"
              :key="item.PerumahanId"
              @click="goDetail(item.perumahanId)"
            >
              <div class="up">
                <img :src="item.src" alt="" />
              </div>
              <div class="down m-t-15">
                <h5>
                  <strong>{{ item.namaPerumahan }}</strong>
                </h5>

                <b-badge variant="success" style="text-transform: capitalize"
                  ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                    <strong
                      >Subsidi :
                      {{
                        getJml(item.jmlSubsidi, item.terjualSubsidi)
                      }}
                      Unit</strong
                    >
                  </h6></b-badge
                >

                <b-badge
                  variant="primary"
                  style="text-transform: capitalize; margin-top: 10px"
                  ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                    <strong
                      >Non Subsidi :
                      {{
                        getJml(item.jmlKomersial, item.terjualKomersial)
                      }}
                      Unit</strong
                    >
                  </h6></b-badge
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <myfooter></myfooter>
  </div>
</template>

<script>
import ipBackEnd from "@/ipBackEnd";
import axios from "axios";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "PerumahanPengembang",
  data() {
    return {
      isLogin: false,
      listPerum: [],
      profil: [],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    let x = this.$route.params.id;
    this.getPerumahan(x);
  },
  methods: {
    getJml(x, y) {
      if (x == null || x == undefined) {
        x = 0;
      }
      if (y == null || y == undefined) {
        y = 0;
      }
      let z = x - y
      return z
    },
    getPerumahan(x) {
      axios
        .get(ipBackEnd + "perumahan/listByPengembang/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let x = res.data.data;
          this.listPerum = x.map((item) => {
            return { ...item, src: ipBackEnd + item.fotoPerumahan };
          });
          console.log(this.listPerum, "ini perum");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataPerum(x) {
      axios
        .get(ipBackEnd + "perumahan/listById/" + x, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res, "ini aha");
          res.data.data[0].srcFP = ipBackEnd + res.data.data[0].fotoPerumahan;
          res.data.data[0].srcL = ipBackEnd + res.data.data[0].logo;
          this.dataPerum = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goDetail(x) {
      console.log(x);
      localStorage.setItem("dataPerum", JSON.stringify(this.dataPerum));
      this.$router.push({ path: `/data_perumahan_by_tipe/` + x });
    },
  },
};
</script>

<style scoped>
header {
  background-color: #4c87f2;
}

header .left {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header .left h5 {
  color: #fff;
}

header .right {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header .right h6 {
  font-size: 14px;
  color: #fff;
}

.section-one {
  padding: 60px 0;
}

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */

.section-one .menu {
  width: 100%;
  height: 250px;
  background-color: #4c87f2;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-one .menu h4 {
  color: #fff;
}

.section-one .box {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4);
  border-radius: 25px;
}

.section-one .box .up {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.section-one .box .up img {
  width: 100%;
  /* height: 200px; */
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.section-one .box .down {
  padding: 15px;
}

.section-one .box .down .harga {
  font-size: 12px;
}
</style>
