<template>
  <div id="pengembang">
    <!-- <myheader></myheader> -->
    <section class="menu-pengembang">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="left">
              <img
                src="../assets/logo_jateng.png"
                alt=""
                style="height: 65px"
              />
              <div class="name">
                <h6 class="mt-0 mb-0" style="color: #fff">
                  <strong
                    >Dinas Perumahan Rakyat Dan Kawasan Permukiman Provinsi Jawa
                    Tengah</strong
                  >
                </h6>
              </div>
            </div>
          </b-col>

          <b-col md="7">
            <div class="right">
              <b-button
                size="sm"
                v-b-modal.modal-lg
                variant="warning"
                class="mb-3"
                v-if="isLogin != true"
                >Login</b-button
              >
              <div>
                <b-dropdown
                  size="md"
                  right
                  variant="warning"
                  toggle-class="text-decoration-none"
                  no-caret
                  class="ml-2"
                  v-if="isLogin == true"
                >
                  <b-dropdown-item @click="goBeranda()"
                    >Beranda</b-dropdown-item
                  >
                  <template #button-content>
                    <b-icon-person-circle></b-icon-person-circle>
                  </template>
                  <b-dropdown-item @click="goEdit()"
                    >Edit Profil
                  </b-dropdown-item>

                  <b-dropdown-item
                    ><router-link :to="'/edit_password_pengembang'"
                      >Edit Password</router-link
                    ></b-dropdown-item
                  >

                  <b-dropdown-item @click="logOut()">Logout</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section style="position: relative">
      <b-container fluid>
        <b-row>
          <b-col md="12" class="pl-0 pr-0">
            <div class="banner"></div>
          </b-col>
        </b-row>
      </b-container>

      <b-container
        style="position: absolute; left: 0; top: 0; bottom: 0; right: 0"
      >
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="3">
                <div
                  style="
                    width: 100%;
                    height: 73vh;
                    background-color: transparent;
                  "
                ></div>
              </b-col>

              <b-col md="9">
                <div
                  style="
                    width: 100%;
                    height: 70vh;
                    background-color: ;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    flex-direction: column;
                    padding-top: 55px;
                  "
                >
                  <h1 style="color: #fff; text-align: right">
                    <strong>DATABASE PERUMAHAN</strong>
                  </h1>
                  <h1 style="color: #fff">
                    <strong>PROVINSI JAWA TENGAH</strong>
                  </h1>

                  <div
                    style="
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      background-color: ;
                      margin-top: 10px;
                    "
                  >
                    <div>
                      <center>
                        <router-link
                          :to="'/data_pengembang'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/engineer.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>PENGEMBANG</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>

                    <div>
                      <center>
                        <router-link
                          :to="'/data_perumahan'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/sale-home.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>PERUMAHAN</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>

                    <div>
                      <center>
                        <router-link
                          :to="'/peta_perumahan'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/map.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>PETA</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>
                    <div>
                      <center>
                        <router-link
                          :to="'/daftar_pengembang'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/clipboard.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>CEK RTLH</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>
                    <div>
                      <center>
                        <router-link
                          :to="'/konsultasi'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/clipboard.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>KONSULTASI</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>

                    <div>
                      <center>
                        <router-link
                          :to="'/usulan'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/clipboard.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>USULAN</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>
                    <div>
                      <center>
                        <router-link
                          :to="'/daftar_pengembang'"
                          style="text-decoration: none"
                        >
                          <img
                            src="../assets/clipboard.png"
                            alt=""
                            style="height: 100px"
                          />
                          <h6 style="color: #fff" class="mt-3">
                            <strong>DAFTAR</strong>
                          </h6>
                        </router-link>
                      </center>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="12">
            <div style="width: 100%; height: 25vh; background-color: ">
              <VueSlickCarousel
                v-bind="rekomperumahan"
                v-if="listPerumahan.length > 0"
              >
                <div
                  v-for="item in listPerumahan"
                  :key="item.id"
                  @click="goListRumah(item)"
                >
                  <div class="box">
                    <!-- <router-link :to="'/data_perumahan_by_tipe'" style="text-decoration:none"> -->
                    <div class="up"><img :src="item.src" alt="" /></div>
                    <!-- <div class="down m-t-15">
                    <h5>
                      <strong>{{ item.namaPerumahan }}</strong>
                    </h5>
                    <h6>{{ item.namaPerusahaan }}</h6>
                    <p class="m-t-15">
                      {{ item.alamatPerumahan }}
                    </p>
                    <p>
                      {{ item.kabKotaPerumahan }}
                    </p>

                    <b-badge
                      variant="success"
                      style="text-transform: capitalize"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong
                          >Subsidi :
                          {{ getJml(item.jmlSubsidi, item.terjualSubsidi) }}
                          Unit</strong
                        >
                      </h6></b-badge
                    >
                    <br />

                    <b-badge
                      variant="primary"
                      style="text-transform: capitalize"
                      ><h6 class="m-t-0 m-b-0 p-l-10 p-r-10">
                        <strong
                          >Non Subsidi :
                          {{ getJml(item.jmlKomersial, item.terjualKomersial) }}
                          Unit</strong
                        >
                      </h6></b-badge
                    >
                  </div> -->
                    <!-- </router-link> -->
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </b-col>

          <!--  -->
        </b-row>
      </b-container>
    </section>
    <b-modal
      id="modal-lg"
      size="lg"
      centered
      hide-footer
      hide-header
      class="modal-loginku"
    >
      <div class="bg-login">
        <b-row>
          <b-col md="7 p-r-0" style="padding-right: 0 !important">
            <div
              style="
                width: 100%;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img src="../assets/icon-login2.png" alt="" style="width: 60%" />
            </div>
            <!-- <img
                    src="../assets/login.png"
                    alt=""
                    style="width:100%"
                /> -->
          </b-col>
          <b-col md="5" style="padding-left: 0 !important">
            <div
              style="
                width: 100%;
                background-color: #fff;
                padding: 30px;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
              "
            >
              <h2 class="m-t-0 m-b-0" style="color: #4c87f2">
                <strong>LOGIN</strong>
              </h2>
              <h5 class="m-t-0 m-b-0" style="color: #4c87f2">KLINIK PKP</h5>
              <h5 class="m-t-0 m-b-0" style="color: #4c87f2">
                PROVINSI JAWA TENGAH
              </h5>
              <hr />

              <b-form-group label="Username" style="color: #4c87f2">
                <b-form-input v-model="username"></b-form-input>
              </b-form-group>

              <b-form-group label="Password" style="color: #4c87f2">
                <b-form-input
                  v-model="password"
                  type="password"
                  @keyup.enter="login()"
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-button variant="primary" @click="login()">Login</b-button>
              </b-form-group>
            </div>
            <!-- <h3 class="m-t-0 m-b-0"><strong>LOGIN</strong></h3>
                <h4 class="m-t-0 m-b-0">KLINIK PKP</h4>
                <h4 class="m-t-0 m-b-0">PROVINSI JAWA TENGAH</h4>
                <hr />
                <b-form-group label="Username">
                    <b-form-input v-model="username"></b-form-input>
                </b-form-group>

                <b-form-group label="Password">
                    <b-form-input v-model="password" type="password"></b-form-input>
                </b-form-group> -->

            <!-- <router-link :to="'dashboard_pengembang'" > -->
            <!-- <b-button variant="primary" @click="login()">Login</b-button> -->
            <!-- </router-link> -->
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// import myheader from "../components/header";
// import myfooter from "../components/footer";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Pengembang",
  data() {
    return {
      isLogin: false,
      listPerumahan: [],
      items: [],
      username: "",
      password: "",
      rekomperumahan: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
      fields: [
        {
          key: "No",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPerusahaan",
          label: "Nama Perusahaan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "asosiasi",
          label: "Asosiasi",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 25,
      pageOptions: [25, 50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
    };
  },
  components: {
    // myheader,
    // myfooter,
    VueSlickCarousel,
  },
  async created() {
    this.items = await this.getPengembang();
    await this.getPerumahan();
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    login() {
      axios
        .post(ipBackEnd + "users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          alert(res.data.message)
          if(res.data.token !=undefined){
          console.log(res, "ini footer");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("role", res.data.role);
          if (res.data.role == "Pengembang") {
            this.$router.push({ path: "/dashboard_pengembang" });
          } else if (res.data.role == "CSR") {
            this.$router.push({ path: "/dashboard_csr" });
          }
        }else{
          this.$router.push({ path: "/" });

        }
        })
        .catch((err) => {
          alert(err.data.message)
          console.log(err);
        });
    },
    async getPerumahan() {
      let PTs = await axios
        .get(ipBackEnd + "perumahan/list", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = PTs.data.data;
      this.listPerumahan = x.map((item) => {
        return { ...item, src: ipBackEnd + item.fotoPerumahan };
      });
      console.log(this.listPerumahan, "ini perumahan");
    },

    async getPengembang() {
      let PTs = await axios
        .get(ipBackEnd + "users/listByRole/pengembang", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = PTs.data.data;
      this.totalRows = x.length;
      console.log(PTs.data);
      console.log(x, "ini pengembang");
      return x;
    },
    goList(x) {
      this.$router.push({ path: "/perumahan_pengembang/" + x });
    },

    getJml(x, y) {
      if (x == null || x == undefined) {
        x = 0;
      }
      if (y == null || y == undefined) {
        y = 0;
      }
      let z = x - y;
      return z;
    },

    goListRumah(x) {
      this.$router.push({ path: `/data_perumahan_by_tipe/${x.perumahanId}` });
    },
    logOut() {
      this.$router.push({ path: "/logout" });
      this.checkLogin();
    },
    goBeranda() {
      let r = localStorage.getItem("role");
      console.log(r);
      if (r == "Pengembang") {
        this.$router.push({ path: "/dashboard_pengembang" });
      } else if (r == "CSR") {
        this.$router.push({ path: "/dashboard_csr" });
      }
    },
    goEdit() {
      let r = localStorage.getItem("role");
      if (r == "Pengembang") {
        this.$router.push({ path: "/edit_profil_pengembang" });
      } else if (r == "CSR") {
        this.$router.push({ path: "/edit_profil_csr" });
      }
    },
  },
};
</script>

<style scoped>
#pengembang .box-name-app {
  width: 100%;
  height: 100px;
  background-color: yellow;
  position: absolute;
  left: 0;
  top: -50px;
}

#pengembang .box-fitur {
  width: 100%;
  height: 300px;
  /* background-color: red; */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
}

#pengembang .box {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* box-shadow: 0px 20px 30px -5px rgba(233, 241, 255, 0.4); */
  /* border-radius: 25px; */
}

#pengembang .box .up {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 15px;
}

#pengembang .box .up img {
  width: 100%;
  height: 140px;
  /* border-top-left-radius: 25px;
  border-top-right-radius: 25px; */
}

#pengembang .box .down {
  padding: 15px;
}

#pengembang .box .down .harga {
  font-size: 12px;
}

#pengembang .menu-pengembang {
  width: 100%;
  height: 80px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

#pengembang .menu-pengembang .left {
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#pengembang .menu-pengembang .right {
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#pengembang .menu-pengembang .left .name {
  margin-left: 15px;
}

#pengembang .banner {
  background: url("../assets/bgnew.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.bg-login {
  background-image: url("../assets/bg-login.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
