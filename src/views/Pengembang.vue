<template>
  <div id="pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Pengembang Perumahan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <b-alert show variant="primary">
              <h4 class="alert-heading">Segera daftarkan perusahaan anda !</h4>
              <p>
                Daftarkan perusahaan anda melalui menu pengembang. Anda akan
                mendapatkan akses khusus pengembang pada Klinik PKP, lalu isikan
                profil perusahaan dan rumah-rumah yang anda jual
              </p>
              <hr />
              <router-link :to="'daftar_pengembang'">
                <b-button variant="warning">Daftar</b-button>
              </router-link>
            </b-alert>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="12">
            <b-row>
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
                      v-model="filter"
                      type="search"
                      placeholder="Type to Search"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        
        <b-table
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          stacked="md"
          show-empty
          bordered
          small
          @filtered="onFiltered"
          class="mt-3"
        >
          <template #cell(No)="item">
            {{ item.index + 1 }}.
          </template>

          <template #cell(actions)>
            <center>
              <img src="../assets/whatsapp.png" alt="" style="width:30px">
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
  name: "Pengembang",
  data() {
    return {
      isLogin: false,
      items: [],
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
      perPage: 10,
      pageOptions: [10, 50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
      
    };
  },
  components: {
    myheader,
    myfooter,
  },
  async created() {
    this.items = await this.getPengembang();
  },
  methods: {
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
      this.totalRows= x.length
      console.log(PTs.data);
      console.log(x, "ini pengembang");
      return x;
    },
  },
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
