<template>
  <div id="login">
    <header>
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="left">
              <router-link :to="'/'" style="text-decoration:none"
                ><h5 class="m-t-0 m-b-0">
                  <strong>Klinik PKP</strong>
                </h5></router-link
              >
            </div>
          </b-col>

          <b-col md="6">
            <div class="right">
              <!-- <h6 class="m-t-0 m-b-0 m-r-15">pengguna@gmail.com</h6>
              <span style="background-color:#fff;padding:4px;border-radius:100px">
                <img src="../assets/avatar_profil.png" alt="">
              </span> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6" offset-md="3">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h2 class="m-t-0 m-b-0 text-center">
                    <strong>Login Klinik PKP</strong>
                  </h2>
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-form>
                    <b-form-group label="Username">
                      <b-form-input v-model="username"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password">
                      <b-form-input
                        type="password"
                        v-model="password"
                      ></b-form-input>
                    </b-form-group>
                    <!-- <router-link :to="'/dashboard_pengembang'" style="text-decoration:none"> -->
                    <b-button variant="primary" @click="login()"
                      >Login</b-button
                    >
                    <!-- </router-link> -->
                  </b-form>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(ipBackEnd + "users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
</style>
