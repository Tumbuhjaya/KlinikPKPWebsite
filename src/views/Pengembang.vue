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

        <!-- <b-row class="m-t-15">
          <b-col md="12">
            <b-table-simple bordered>
              <b-thead>
                <b-tr>
                  <b-th>No.</b-th>
                  <b-th>Nama</b-th>
                  <b-th>Alamat</b-th>
                  <b-th>Option</b-th>
                </b-tr>
              </b-thead>

              <b-tbody>
                <b-tr>
                  <b-td>1.</b-td>
                  <b-td>Adikarya</b-td>
                  <b-td
                    >Jalan Raya Pasar Minggu KM. 18 Jakarta Selatan 12510
                    Indonesia</b-td
                  >
                  <b-td>
                    <center>
                      <b-button variant="success" size="sm" class="m-r-15"
                        >Chat Via WA</b-button
                      >
                      <b-button variant="warning" size="sm">Detail</b-button>
                    </center>
                  </b-td>
                </b-tr>

                <b-tr>
                  <b-td>2.</b-td>
                  <b-td>Wijayakarya</b-td>
                  <b-td>JL. D.I. Panjaitan Kav. 9-10, Jakarta 13340</b-td>
                  <b-td>
                    <center>
                      <b-button variant="success" size="sm" class="m-r-15"
                        >Chat Via WA</b-button
                      >
                      <b-button variant="warning" size="sm">Detail</b-button>
                    </center>
                  </b-td>
                </b-tr>

                <b-tr>
                  <b-td>3.</b-td>
                  <b-td>Agung Sedayu Grup</b-td>
                  <b-td
                    >ASG Tower, Jl. Pantai Indah Kapuk, Boulevard Kamal Muara
                    Penjaringan, Jakarta Utara 14470</b-td
                  >
                  <b-td>
                    <center>
                      <b-button variant="success" size="sm" class="m-r-15"
                        >Chat Via WA</b-button
                      >
                      <b-button variant="warning" size="sm">Detail</b-button>
                    </center>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-col>
        </b-row> -->
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
          <template #cell(No)="item">
            {{ item.index + 1 }}
          </template>
          <template #cell(actions)>
            <!-- <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
            >
              Edit
            </b-button> -->
            <center>
              <b-button variant="success" size="sm" class="m-r-15"
                > WA</b-button
              >
              <b-button variant="warning" size="sm" class="m-r-15">Detail</b-button>
              <b-button variant="danger" size="sm">Hapus</b-button>
            </center>
            <!-- <b-button size="sm" @click="row.toggleDetails">
              {{ row.detailsShowing ? "Hide" : "Show" }} Details
            </b-button>
          </template>

          <template #row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">
                  {{ key }}: {{ value }}
                </li>
              </ul>
            </b-card>-->
          </template>
        </b-table>

        <!-- Info modal -->
        <!-- <b-modal
          :id="infoModal.id"
          :title="infoModal.title"
          ok-only
          @hide="resetInfoModal"
        >
          <pre>{{ infoModal.content }}</pre>
        </b-modal> -->
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
        },
        {
          key: "namaPerusahaan",
          label: "Nama Perusahaan",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          sortDirection: "desc",
          class: "text-center",
        },
        {
          key: "asosiasi",
          label: "Asosiasi",
          sortable: true,
          class: "text-center",
        },
        {
          key: "noHp",
          label: "Kontak",
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
