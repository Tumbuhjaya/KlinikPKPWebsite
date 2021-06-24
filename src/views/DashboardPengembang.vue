<template>
  <div id="dashboard_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="12">
                <h2 class="m-t-0 m-b-0 text-center">
                  <strong>Dashboard Pengembang</strong>
                </h2>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <router-link
                  :to="'input_perumahan_pengembang'"
                  style="text-decoration:none"
                  ><b-button variant="primary" class="m-r-15"
                    >Tambah Data</b-button
                  ></router-link
                >
              </b-col>
              <!-- <b-col md="12" class="m-t-30">
                <b-table-simple bordered>
                  <b-thead>
                    <b-tr>
                      <b-th>No.</b-th>
                      <b-th>Nama</b-th>
                      <b-th>Alamat</b-th>
                      <b-th style="width:300px">Option</b-th>
                    </b-tr>
                  </b-thead>

                  <b-tbody>
                    <b-tr>
                      <b-td>1.</b-td>
                      <b-td>Griya Indah Segara</b-td>
                      <b-td
                        >Jalan Raya Pasar Minggu KM. 18 Jakarta Selatan 12510
                        Indonesia</b-td
                      >
                      <b-td>
                        <center>
                          <router-link
                            :to="'edit_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="warning" size="sm" class="m-r-15"
                              >Edit</b-button
                            >
                          </router-link>

                          <router-link
                            :to="'tipe_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="info" size="sm" class="m-r-15"
                              >Tipe Rumah</b-button
                            >
                          </router-link>

                          <b-button variant="danger" size="sm">Hapus</b-button>
                        </center>
                      </b-td>
                    </b-tr>

                    <b-tr>
                      <b-td>2.</b-td>
                      <b-td>Griya Adem Ayem</b-td>
                      <b-td>JL. D.I. Panjaitan Kav. 9-10, Jakarta 13340</b-td>
                      <b-td>
                        <center>
                          <router-link
                            :to="'edit_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="warning" size="sm" class="m-r-15"
                              >Edit</b-button
                            >
                          </router-link>

                          <router-link
                            :to="'tipe_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="info" size="sm" class="m-r-15"
                              >Tipe Rumah</b-button
                            >
                          </router-link>

                          <b-button variant="danger" size="sm">Hapus</b-button>
                        </center>
                      </b-td>
                    </b-tr>

                    <b-tr>
                      <b-td>3.</b-td>
                      <b-td>Griya Nuasa Bali</b-td>
                      <b-td
                        >ASG Tower, Jl. Pantai Indah Kapuk, Boulevard Kamal
                        Muara Penjaringan, Jakarta Utara 14470</b-td
                      >
                      <b-td>
                        <center>
                          <router-link
                            :to="'edit_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="warning" size="sm" class="m-r-15"
                              >Edit</b-button
                            >
                          </router-link>

                          <router-link
                            :to="'tipe_perumahan_pengembang'"
                            style="text-decoration:none"
                          >
                            <b-button variant="info" size="sm" class="m-r-15"
                              >Tipe Rumah</b-button
                            >
                          </router-link>

                          <b-button variant="danger" size="sm">Hapus</b-button>
                        </center>
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </b-col> -->
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="5" md="6" class="my-1">
                    <b-form-group
                      label="Per page"
                      label-for="per-page-select"
                      label-cols-sm="6"
                      label-cols-md="4"
                      label-cols-lg="3"
                      label-align-sm="right"
                      label-size="sm"
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="sm"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>

                  <b-col sm="7" md="6" class="my-1">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                      class="my-0"
                    ></b-pagination>
                  </b-col>
                </b-row>

                <!-- Main table element -->
                <b-table
                  :items="items"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  stacked="md"
                  show-empty
                  small
                  @filtered="onFiltered"
                >
                  <template #cell(actions)="item">
                    <center>
                        <b-button variant="warning" size="sm" class="m-r-15" @click="goEdit(item.item.id)"
                          >Edit</b-button
                        >
                      <router-link
                        :to="'tipe_perumahan_pengembang'"
                        style="text-decoration:none"
                      >
                        <b-button variant="info" size="sm" class="m-r-15"
                          >Tipe Rumah</b-button
                        >
                      </router-link>

                      <b-button variant="danger" size="sm" @click="hapus(item.item.id)">Hapus</b-button>
                    </center>
                  </template>
                </b-table>
              </b-container>
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

export default {
  name: "DashboardPengembang",
  data() {
    return {
      isLogin: false,
      items: [],
      fields: [
        {
          key: "namaPerumahan",
          label: "Nama Perumahan",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "CP",
          label: "Kontak Person",
          sortable: true,
          class: "text-center",
        },
        {
          key: "luasLahan",
          label: "Luas Lahan (m2)",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  components: {
    myheader,
    myfooter,
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  async created() {
    this.items = await this.getPerum();
    console.log();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    goEdit(x){
      this.$router.push({path:`edit_perumahan_pengembang/${x}`})
    },
    hapus(x){
      console.log(x)
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async getPerum() {
      let perum = await axios
        .get(ipBackEnd + "perumahan/listByPengembang", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(err);
        });
      let x = perum.data.data;
      console.log(x, "ini perum");
      return x;
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
</style>
