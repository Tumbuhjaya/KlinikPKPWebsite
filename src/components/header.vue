<template>
  <div id="myheader">
    <header>
      <b-container>
        <b-row>
          <b-col md="3">
            <div class="indentity">
              <img src="../assets/pkp-new.png" alt="" />

              <div class="name">
                <h4 class="m-t-0 m-b-0"><strong>Klinik PKP</strong></h4>
              </div>
            </div>
          </b-col>

          <b-col md="7">
            <div class="menu">
              <router-link :to="'/'" style="text-decoration:none;">
                <h6 class="m-t-0 m-b-0">Beranda</h6>
              </router-link>
              <router-link :to="'/csr'" style="text-decoration:none;">
              <h6 class="m-t-0 m-b-0">CSR</h6>
              </router-link>
              <router-link :to="'/pengembang'" style="text-decoration:none;">
                <h6 class="m-t-0 m-b-0">Pengembang</h6>
              </router-link>
              <router-link :to="'/magang'" style="text-decoration:none;">
              <h6 class="m-t-0 m-b-0">Karir/Magang</h6>
              </router-link>
              <h6 class="m-t-0 m-b-0">Kerjasama</h6>
              <h6 class="m-t-0 m-b-0">Forum PKP</h6>
            </div>
          </b-col>

          <b-col md="2">
            <div class="loginregister">
              <b-button
                size="md"
                v-b-modal.modal-lg
                variant="warning"
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
    </header>
  </div>
</template>

<script>
export default {
  name: "myheader",
  data() {
    return {
      isLogin: "",
    };
  },
  created() {
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
    logOut() {
      this.$router.push({ path: "/logout" });
    },
    goBeranda() {
      let r = localStorage.getItem("role");
      if (r == "pengembang") {
        this.$router.push({ path: "/dashboard_pengembang" });
      } else if (r == "CSR") {
        this.$router.push({ path: "/dashboard_csr" });
      }
    },
    goEdit() {
      let r = localStorage.getItem("role");
      if (r == "pengembang") {
        this.$router.push({ path: "/edit_profil_pengembang" });
      } else if (r == "CSR") {
        this.$router.push({ path: "/edit_profil_csr" });
      }
    },
  },
};
</script>

<style scoped></style>
