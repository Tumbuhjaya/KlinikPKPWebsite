<template>
  <div id="input_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Usulan RTLH</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" offset-md="4">
            <hr class="m-t-10 m-b-10" />
            <div class="box-submenu">
              <router-link
                :to="'/usulan'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0">
                <strong>Data</strong>
              </h6>
            </div>
            <hr class="m-t-10 m-b-10" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" lg="12">
            <b-row>
                  <b-col md="12">
                    <router-link
                      :to="'input_usulan_rtlh'"
                      style="text-decoration: none"
                      ><b-button variant="primary" class="m-r-15"
                        ><b-icon-plus></b-icon-plus> Tambah Data</b-button
                      ></router-link
                    >
                  </b-col>
                </b-row>
                <b-row class="mt-5">
                  <b-col md="2">
                    <b-form-group
                      label="Per page"
                      label-for="per-page-select"
                      label-cols-md="6"
                      label-align-md="left"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="md"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="5" offset-md="5">
                    <b-form-group
                      label="Filter"
                      label-for="filter-input"
                      label-cols-md="3"
                      label-align-md="right"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-input-group size="md">
                        <b-form-input
                          id="filter-input"
                          v-model="filter3"
                          type="search"
                          placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                          <b-button :disabled="!filter3" @click="filter3 = ''"
                            >Clear</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-table
                  :items="item"
                  :fields="fields3"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter3"
                  :filter-included-fields="filterOn"
                  @filtered="onFiltered"
                  class="m-t-15"
                  bordered
                  small
                  show-empty
                >
                <template #cell(no)="item">
                  {{item.index + 1+((currentPage-1)*10)}}
                </template>
                  <template #cell(fotoLokasi1)="item">
                    <center>
                      <div
                        style="width: 150px; height: 150px"
                        
                      >
                        <img :src="item.item.foto_1" alt="" style="width: 150px; height: 150px" />
                      </div>
                    </center>
                  </template>

                  <template #cell(fotoLokasi2)="item">
                    <center>
                      <div
                        style="width: 150px; height: 150px"
                        
                      >
                        <img :src="item.item.foto_2" alt="" style="width: 150px; height: 150px" />
                      </div>
                    </center>
                  </template>
                  <template #cell(actions)="item">
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        v-b-tooltip.hover.top="'Edit'"
                        @click="$router.push({path:'/edit_usulan_rtlh/'+item.item.id})"
                        class="m-r-15"
                        ><b-icon-pencil-square></b-icon-pencil-square
                        ></b-button
                      >
                      <b-button
                        variant="info"
                        size="sm"
                        v-b-tooltip.hover.top="'Lihat Lokasi'"
                        class="m-r-15"
                        ><b-icon-geo-fill></b-icon-geo-fill
                        ></b-button
                      >

                      <b-button
                        variant="danger"
                        size="sm"
                        v-b-tooltip.hover.top="'Hapus'"
                        class="m-r-15"
                        ><b-icon-trash></b-icon-trash
                        ></b-button
                      >

                      
                    </center>
                  </template>
                </b-table>

                <b-row>
                  <b-col md="5" offset-md="7">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="md"
                    ></b-pagination>
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
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
import myheader from "../components/header";
import myfooter from "../components/footer";
// import Multiselect from "vue-multiselect";

export default {
  name: "Konsultasi",
  data() {
    return {
      isLogin: false,
      item: [
        { no: 1, nama:'nama A', alamat: 'alamat A', statusKepemilikanRumah: 'kepemilikan A',  luasTanah : '00 A', statusUsulan : 'Status Usulan A' },
      ],
      fields3: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPelapor",
          label: "Nama",
          sortable: true,
          class: "text-center",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          class: "text-center",
        },

        {
          key: "SCLRumah",
          label: "Status Kepemilikan Rumah",
          sortable: true,
          class: "text-center",
        },

        {
          key: "luasRumah",
          label: "Luas Rumah (m2)",
          sortable: true,
          class: "text-center",
        },

        {
          key: "fotoLokasi1",
          label: "Foto Rumah (Tampak Depan)",
          sortable: true,
          class: "text-center",
        },

        {
          key: "fotoLokasi2",
          label: "Foto Rumah (Tampak Samping)",
          sortable: true,
          class: "text-center",
        },

        {
          key: "status_usulan",
          label: "Status Usulan",
          sortable: true,
          class: "text-center",
        },


        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 50, 100, { value: 100, text: "Tampilkan Banyak" }],
      
      filter3: null,
      filterOn: [],
    };
  },
  components: {
    myheader,
    myfooter,
    // Multiselect,
  },
  created() {
    this.loadData()

  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async  loadData(){
    let vm = this
    let tokenUser =localStorage.getItem('token')
      let user_id = localStorage.getItem('id')
    let data = {
    halaman:1,
    jumlah:999999999,
    user_id
  }
    let listData = await axios({
      method: "post",
      url: ipBackEnd + `RTLH/listByPublish`,
      headers: {token: tokenUser},
      data:data
    }) 
    for (let i = 0; i < listData.data.data.length; i++) {
        if (listData.data.data[i].foto1) {
          listData.data.data[i].foto1= ipBackEnd+listData.data.data[i].foto1
        }
        if (listData.data.data[i].foto2) {
          listData.data.data[i].foto2= ipBackEnd+listData.data.data[i].foto2
        }
        listData.data.data[i].status_usulan=listData.data.data[i].publish==0?'Menunggu Verifikasi':listData.data.data[i].publish==1?'Disetujui':listData.data.data[i].publish==2?'Ditolak':''

      }
  
    vm.totalRows = listData.data.data.length;
      vm.item = listData.data.data
      console.log(vm.item);
      
  }
  },
  watch: {
    
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.item.length;
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
</style>
