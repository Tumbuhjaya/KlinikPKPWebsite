<template>
    <div id="myheader">
        <header>
            <b-container>
                <b-row>
                <b-col md="3">
                    <div class="indentity">
                    <img src="../assets/logo_Klinik_Big_White.png" alt="">

                    <div class="name">
                        <h4 class="m-t-0 m-b-0"><strong>Klinik PKP</strong></h4>
                    </div>
                    </div>
                </b-col>

                <b-col md="7">
                    <div class="menu">
                    <router-link :to="'/'" style="text-decoration:none;"
                        >
                    <h6 class="m-t-0 m-b-0">Beranda</h6>
                    </router-link>
                    <h6 class="m-t-0 m-b-0">CSR</h6>
                    <router-link :to="'pengembang'" style="text-decoration:none;">
                        <h6 class="m-t-0 m-b-0">Pengembang</h6>
                    </router-link>
                    <h6 class="m-t-0 m-b-0">Karir/Magang</h6>
                    <h6 class="m-t-0 m-b-0">Kerjasama</h6>
                    <h6 class="m-t-0 m-b-0">Forum PKP</h6>
                    </div>
                </b-col>

                <b-col md="2">
                    <div class="loginregister">
                    <b-button size="md" v-b-modal.modal-lg variant="warning">Login</b-button>
                    <div>
                    <b-dropdown size="md" right variant="warning" toggle-class="text-decoration-none" no-caret class="ml-2">
                        <template #button-content>
                        &#128101;<span class="sr-only">Search</span>
                        </template>
                        <b-dropdown-item href="#">Edit Profil</b-dropdown-item>
                        <b-dropdown-item href="#">Logout</b-dropdown-item>
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
  data (){
    return{
  
    };
  },
};
</script>

<style scoped>

</style>