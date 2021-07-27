<template>
  <div id="perumahan_pengembang">
    <myheader></myheader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Nama Pengembang</strong>
            </h2>
            <h5 class="text-center">Alamat Pengembang</h5>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="4">
            <div class="box">
              <router-link
                :to="'/data_perumahan_by_tipe/26'"
                style="text-decoration: none"
              >
                <div class="up">
                  <img src="https://via.placeholder.com/360x300" alt="" />
                </div>
                <div class="down m-t-15">
                  <h5>
                    <strong>Nama Perumahan</strong>
                  </h5>

                  <b-badge variant="success" style="text-transform: capitalize"
                    ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                      <strong>Subsidi : 00 Unit</strong>
                    </h6></b-badge
                  >

                  <b-badge
                    variant="primary"
                    style="text-transform: capitalize; margin-top: 10px"
                    ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                      <strong>Non Subsidi : 00 Unit</strong>
                    </h6></b-badge
                  >
                </div>
              </router-link>
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
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "PerumahanPengembang",
  data() {
    return {
      isLogin: false,
    };
  },
  components: {
    myheader,
    myfooter,
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
