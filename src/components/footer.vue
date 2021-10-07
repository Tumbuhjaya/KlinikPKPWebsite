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
        
        <b-modal id="modal-lg" size="lg" centered hide-footer hide-header class="modal-loginku">
          <div class="bg-login">
            <b-row>
                <b-col md="7 p-r-0" style="padding-right:0 !important;">
                  <div style="width:100%;height:400px;display:flex;justify-content:center;align-items:center;" >
                    <img src="../assets/icon-login2.png" alt="" style="width:60%">
                  </div>
                <!-- <img
                    src="../assets/login.png"
                    alt=""
                    style="width:100%"
                /> -->
                </b-col>
                <b-col md="5" style="padding-left:0 !important;">
                  <div style="width:100%;background-color:#fff;padding:30px;border-top-right-radius:20px;border-bottom-right-radius:20px">
                    <h2 class="m-t-0 m-b-0" style="color:#4c87f2"><strong>LOGIN</strong></h2>
                    <h5 class="m-t-0 m-b-0" style="color:#4c87f2">KLINIK PKP</h5>
                    <h5 class="m-t-0 m-b-0" style="color:#4c87f2">PROVINSI JAWA TENGAH</h5>
                    <hr>

                    <b-form-group label="Username" style="color:#4c87f2">
                        <b-form-input v-model="username"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Password" style="color:#4c87f2">
                        <b-form-input v-model="password" type="password" @keyup.enter="login()"></b-form-input>
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
    </div>
</template>
<script>
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";


export default {
    name: "myfooter",
    data() {
    return {
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
          console.log(res,'ini footer AAA');
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('role',res.data.role)
          if(res.data.role == "Pengembang"){
            console.log('ini')
          this.$router.push({ path: "/dashboard_pengembang" });
          }
          else if(res.data.role == 'CSR'){
          this.$router.push({ path: "/dashboard_csr" });
          }
        }).catch((err) => {
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

.bg-login{
  background-image: url('../assets/bg-login.jpg');
  
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  
}
</style>