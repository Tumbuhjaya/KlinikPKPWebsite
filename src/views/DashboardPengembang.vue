<template>
  <div id="dashboard_pengembang">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>Dashboard Pengembang</strong>
            </h2>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col md="12">
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Data Perumahan" active>
                <b-row class="m-t-30">
                  <b-col md="12">
                    <router-link
                      :to="'input_perumahan_pengembang'"
                      style="text-decoration: none"
                      ><b-button variant="primary" class="m-r-15"
                        ><b-icon-plus></b-icon-plus> Tambah Data</b-button
                      ></router-link
                    >
                  </b-col>

                  <b-col md="12" class="m-t-30">
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
                      <template #cell(No)="item">
                        {{ item.index + 1 }}.
                      </template>
                      <template #cell(actions)="item">
                        <center>
                          <b-button
                            variant="warning"
                            size="sm"
                            class="m-r-15"
                            @click="goEdit(item.item.perumahanId)"
                            v-b-tooltip.hover.top="'Edit'"
                            ><b-icon-pencil-square></b-icon-pencil-square
                          ></b-button>

                          <b-button
                            variant="danger"
                            size="sm"
                            @click="hapus(item.item.perumahanId)"
                            v-b-tooltip.hover.top="'Hapus'"
                            class="m-r-15"
                            ><b-icon-trash></b-icon-trash
                          ></b-button>
                          <b-button
                            variant="info"
                            size="sm"
                            @click="goTipeRumah(item.item)"
                            ><b-icon-plus></b-icon-plus> Tipe Rumah</b-button
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
              </b-tab>
              <b-tab title="Data Permohonan Pembelian Rumah">
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
                          v-model="filter2"
                          type="search"
                          placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                          <b-button :disabled="!filter2" @click="filter2 = ''"
                            >Clear</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-table
                  :items="listPengajuan"
                  :fields="fields2"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter2"
                  :filter-included-fields="filterOn"
                  @filtered="onFiltered"
                  class="m-t-15"
                  bordered
                  small
                  show-empty
                >
                  <template #cell(no)="item">
                    <center>
                      {{ item.index + 1 }}
                    </center>
                  </template>
                  <template #cell(harga)="item">
                    <center>
                      {{ "Rp" + " " + formHarga(parseInt(item.item.harga)) }}
                    </center>
                  </template>
                  <template #cell(actions)="item">
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="m-r-15"
                        v-b-modal.modal-permohonan
                        v-b-tooltip.hover.top="'Edit'"
                        @click="setValue(item.item)"
                        ><b-icon-pencil-square></b-icon-pencil-square
                      ></b-button>
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
              </b-tab>
              <b-tab title="Data Backlog">
                <b-row>
                  <b-col md="12">
                    <router-link
                      :to="'input_backlog_pengembang'"
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
                  :items="listBacklog"
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
                  {{item.index + 1}}
                </template>
                  <template #cell(actions)="item">
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="m-r-15"
                        @click="$router.push({path:'/edit_backlog_pengembang/' + item.item.id})"
                        v-b-tooltip.hover.top="'Edit'"
                        ><b-icon-pencil-square></b-icon-pencil-square
                        ></b-button
                      >

                      <b-button
                        variant="danger"
                        size="sm"
                        v-b-tooltip.hover.top="'Hapus'"
                        class="m-r-15"
                        @click="hapusJP(item.item.id)"
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
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
        <!--  -->
      </b-container>
    </section>

    <myfooter></myfooter>

    <!-- modal -->
    <b-modal
      id="modal-permohonan"
      size="lg"
      title="Detail Permohonan"
      hide-footer
    >
      <b-row>
        <b-col md="12">
          <b-tabs content-class="mt-3" align="center">
            <b-tab title="Data Pemohon" active>
              <b-row>
                <b-col md="12">
                  <b-table-simple borderless table-sm>
                    <b-tbody>
                      <b-tr>
                        <b-td style="width: 200px">NIK</b-td>
                        <b-td style="width: 5px">:</b-td>
                        <b-td>{{ value.NIK }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Nama</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.nama }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Alamat</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.alamat }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>No. Hp</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.noHp }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Email</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.email }}</b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Data Rumah">
              <b-row>
                <b-col md="12">
                  <b-table-simple borderless table-sm>
                    <b-tbody>
                      <b-tr>
                        <b-td style="width: 200px">Nama Pengembang</b-td>
                        <b-td style="width: 5px">:</b-td>
                        <b-td>{{ namaPerusahaan }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Nama Perumahan</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.namaPerumahan }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Alamat Perumahan</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.alamatPerumahan }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Kabupaten/Kota</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.kabKotaPerumahan }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Jenis </b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.jenis }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Tipe </b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.type }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Harga </b-td>
                        <b-td>:</b-td>
                        <b-td>Rp {{ formHarga(parseInt(value.harga)) }}</b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Data Lembaga Pembiayaan">
              <b-row>
                <b-col md="12">
                  <b-table-simple borderless table-sm>
                    <b-tbody>
                      <b-tr>
                        <b-td style="width: 200px">Nama Lembaga</b-td>
                        <b-td style="width: 5px">:</b-td>
                        <b-td>{{ value.namaLembaga }}</b-td>
                      </b-tr>

                      <b-tr>
                        <b-td>Deskripsi Program Pembiayaan</b-td>
                        <b-td>:</b-td>
                        <b-td>{{ value.deskripsiProgram }}</b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Verifikasi & Simpan Data">
              <b-row>
                <b-col md="12">
                  <b-table-simple borderless table-sm>
                    <b-tbody>
                      <b-tr>
                        <b-td style="width: 200px">Status Permohonan</b-td>
                        <b-td style="width: 5px">:</b-td>
                        <b-td
                          ><b-form-select
                            :options="status"
                            v-model="value.statusPengajuan"
                          ></b-form-select
                        ></b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </b-col>

                <b-col md="12">
                  <b-button variant="primary" @click="confirm(value)"
                    >Simpan</b-button
                  >
                </b-col>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-modal>
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
      value: [],
      isLogin: false,
      items: [],
      namaPerusahaan: "",
      listPengajuan: [],
      listBacklog:[],
      fields: [
        {
          key: "No",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPerumahan",
          label: "Nama Perumahan",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "alamatPerumahan",
          label: "Alamat",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "CPPerumahan",
          label: "Kontak Person",
          sortable: true,
          class: "text-center",
        },
        {
          key: "luasLahanPerumahan",
          label: "Luas Lahan (m2)",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],

      fields2: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "nama",
          label: "Nama Pemohon",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "noHp",
          label: "No. Telepon Pemohon",
          sortable: true,
          class: "text-center",
        },
        {
          key: "email",
          label: "Email Pemohon",
          sortable: true,
          class: "text-center",
        },

        {
          key: "namaPerumahan",
          label: "Nama Perumahan",
          sortable: true,
          class: "text-center",
        },

        {
          key: "jenis",
          label: "Jenis Perumahan",
          sortable: true,
          class: "text-center",
        },

        {
          key: "type",
          label: "Tipe Perumahan",
          sortable: true,
          class: "text-center",
        },
        {
          key: "harga",
          label: "Harga Perumahan",
          sortable: true,
          class: "text-center tabel-harga",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],

      fields3: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "kabKotaJP",
          label: "Kabupaten/Kota",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "terbangunJP",
          label: "Pembangunan",
          sortable: true,
          class: "text-center",
        },
        {
          key: "terjualJP",
          label: "Terjual",
          sortable: true,
          class: "text-center",
        },

        {
          key: "dihuniJP",
          label: "Ditempati",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filter2: null,
      filter3: null,
      filterOn: [],

      status: [
        { value: 0, text: "Belum Diverifikasi" },
        { value: 1, text: "Lanjutkan ke lembaga pembiayaan" },
        { value: 2, text: "Ditolak" },
      ],
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
    this.getPerum();
    this.getCalon();
    this.getBacklog()
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    formHarga(x) {
      let y = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&.");
      return y;
    },
    setValue(x) {
      this.value = x;
      console.log(this.value);
    },
    goEdit(x) {
      this.$router.push({ path: `edit_perumahan_pengembang/${x}` });
    },
    goTipeRumah(x) {
      console.log(x, "ini x");
      localStorage.setItem("dataPerum", JSON.stringify(x));
      this.$router.push({ path: `tipe_perumahan_pengembang/${x.perumahanId}` });
    },
    hapusJP(x){
      axios.post(ipBackEnd + 'jumlahPerumahanKabKota/delete',{
        id : x
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      }).then(res=>{
        console.log(res)
        if(res.data.message == 'sukses'){
          this.getBacklog()
        }
      })
    },
    hapus(x) {
      axios
        .post(
          ipBackEnd + "perumahan/delete",
          {
            id: x,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.getPerum();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async getBacklog(){
      let id = localStorage.getItem('id')
      let back = await axios.get(ipBackEnd + 'jumlahPerumahanKabKota/listByPengembang/' + id,{
        headers:{
          token: localStorage.getItem('token')
        }
      })
      this.listBacklog = back.data.data
      console.log(this.listBacklog)
    },
    getPerum() {
      axios
        .get(ipBackEnd + "perumahan/listByPengembangLogin", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.items = res.data.data;
          this.namaPerusahaan = this.items[0].namaPerusahaan;
          this.totalRows = this.items.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCalon() {
      axios
        .get(ipBackEnd + "pengajuan/listByPengembangYangLogin", {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let x = res.data.data;
          this.listPengajuan = x.map((item) => {
            return { ...item };
          });
          console.log(this.listPengajuan, "ini pengajuan");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    confirm(x) {
      console.log(x, " ini value");
      if (x.statusPengajuan == 1) {
        this.terima(x);
        this.getCalon();
      } else if (x.statusPengajuan == 2) {
        this.tolak(x);
        this.getCalon();
      } else {
        console.log("test");
      }
      this.$bvModal.hide("modal-permohonan");
    },
    terima(x) {
      axios
        .post(
          ipBackEnd + "pengajuan/penerimaanPengajuan",
          {
            id: x.pengajuanId,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tolak(x) {
      axios
        .post(
          ipBackEnd + "pengajuan/penolakanPengajuan",
          {
            id: x.pengajuanId,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
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
