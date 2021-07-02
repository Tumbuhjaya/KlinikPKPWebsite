<template>
    <div id="myfooter">
        <footer class="section-footer">
            <b-container>
                <b-row>
                <b-col md="12">
                    <h6 class="m-t-0 m-b-0 text-center">
                    <strong
                        >Copyright © 2021 Dinas Perumahan Rakyat dan Kawasan Permukiman
                        Provinsi Jawa Tengah</strong
                    >
                    </h6>
                </b-col>
                </b-row>
            </b-container>
        </footer>
        
        <b-modal id="modal-lg" size="lg" centered hide-footer>
            <b-row>
                <b-col md="6">
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    style="width:100%"
                />
                </b-col>
                <b-col md="6">
                <h3 class="m-t-0 m-b-0"><strong>LOGIN</strong></h3>
                <h4 class="m-t-0 m-b-0">KLINIK PKP PROVINSI JAWA TENGAH</h4>
                <hr />
                <b-form-group label="Username">
                    <b-form-input v-model="username"></b-form-input>
                </b-form-group>

                <b-form-group label="Password">
                    <b-form-input v-model="password"></b-form-input>
                </b-form-group>

                <!-- <router-link :to="'dashboard_pengembang'" > -->
                <b-button variant="primary" @click="login()">Login</b-button>
                <!-- </router-link> -->
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>
<script>
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";


export default {
    name: "myfooter",
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
          console.log(res,'ini footer');
          localStorage.setItem('token',res.data[0].token)
          localStorage.setItem('id', res.data[1].id)
          localStorage.setItem('role',res.data[2].role)
          if(res.data[2].role == 'pengembang'){
          this.$router.push({ path: "/dashboard_pengembang" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>
<style scoped>
.section-footer {
  padding: 15px 0;
  background-color: #4c87f2;
}

.section-footer h6 {
  color: #fff;
}
</style>