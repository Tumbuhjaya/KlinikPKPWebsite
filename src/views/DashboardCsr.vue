<template>
  <div id="dashboard_csr">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Dashboard CSR</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="m-t-30">
          <b-col md="12">
            <router-link :to="'input_csr'" style="text-decoration:none"
              ><b-button variant="primary" class="m-r-15"
                ><b-icon-plus></b-icon-plus> Tambah Data</b-button
              ></router-link
            >
          </b-col>
        </b-row>

        <b-row class="m-t-30">
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
                      <b-button :disabled="!filter" @click="filter = ''"
                        >Clear</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <b-table
                  :items="items"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  @filtered="onFiltered"
                  class="m-t-15"
                  bordered
                  small
                  show-empty
                >
                  <template #cell(no)="item">
                    {{ item.index + 1 }}
                  </template>
                  <template #cell(actions)="item">
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="m-r-15"
                        v-b-tooltip.hover.top="'Edit'"
                        @click="editCsr(item.item.id)"
                        ><b-icon-pencil-square></b-icon-pencil-square
                      ></b-button>

                      <b-button
                        variant="danger"
                        size="sm"
                        v-b-tooltip.hover.top="'Hapus'"
                        @click="hapusCsr(item.item.id)"
                        class="m-r-15"
                        ><b-icon-trash></b-icon-trash
                      ></b-button>
                    </center>
                  </template>
                </b-table>
              </b-col>
            </b-row>

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
import axios from "axios";
import ipBackEnd from "@/ipBackEnd";
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "DashboardCsr",
  data() {
    return {
      isLogin: false,
      items: [],
      fields: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center",
        },

        {
          key: "kabKota",
          label: "Kabupaten/Kota",
          sortable: true,
          class: "text-center",
        },
        {
          key: "kegiatan",
          label: "Kegiatan",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "deskripsi",
          label: "Deskripsi",
          sortable: true,
          sortDirection: "desc",
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
  created() {
    this.getCsrs();
  },
  methods: {
    getCsrs() {
      axios
        .get(ipBackEnd + "CSR/listByUsersLogin", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.items = res.data.data;
          this.totalRows = this.items.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    hapusCsr(x) {
      console.log(x)
      // axios
      //   .post(
      //     ipBackEnd + "CSR/delete",
      //     {
      //       id: x,
      //     },
      //     {
      //       headers: {
      //         token: localStorage.getItem("token"),
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    editCsr(x) {
      console.log(x)
      this.$router.push({ path: "/edit_csr/" + x });
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}
</style>
