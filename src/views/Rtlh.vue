<template>
  <div id="rtlh">
    <myheader></myheader>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="m-t-0 m-b-0 text-center">
              <strong>RTLH</strong>
            </h2>
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
          </b-col>
        </b-row>

        <b-table
          :items="listRTLH"
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
          <template #cell(No)="item"> {{ item.index + 1 }}. </template>
          <template #cell(actions)="item">
            <b-button variant="primary" v-b-modal.modal-fotortlh size="sm">Lihat Foto {{item.nama}}</b-button>
            
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

    <b-modal id="modal-fotortlh" centered hide-header hide-footer>
      <center>
        <div style="width:100%;height:100px;position:relative;background-color:red;">
          
          <div style="width:40px;height:40px;background-color:yellow;position:absolute;left:-30px;top:0;bottom:0;margin:auto"></div>
          <div style="width:40px;height:40px;background-color:yellow;position:absolute;right:-30px;top:0;bottom:0;margin:auto"></div>
        </div>
      </center>
      
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import ipBackEnd from "@/ipBackEnd";
import axios from "axios";
import myheader from "../components/header";
import myfooter from "../components/footer";

export default {
  name: "rtlh",
  data() {
    return {
      isLogin: false,
      index: null,
      listRTLH: [],
      fields: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "Kab/kota",
          label: "Kabupaten / Kota",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "nama",
          label: "Nama",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "NIK",
          label: "NIK",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
    };
  },
  components: {
    myheader,
    myfooter,
  },
  created() {
    this.getRTLH();
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
    getRTLH() {
      axios
        .get(ipBackEnd + "RTLH/listAll")
        .then((res) => {
          let x = res.data.data;
          this.listRTLH = x.map((item) => {
            item.display = [];
            item.display.push(ipBackEnd + item.foto1);
            item.display.push(ipBackEnd + item.foto2);
            item.display.push(ipBackEnd + item.foto3);
            item.display.push(ipBackEnd + item.foto4);
            item.display.push(ipBackEnd + item.fotoSelfie);
            return { ...item };
          });
          console.log(this.listRTLH)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cek(x){
      console.log(x)
    },
    cekcek(x){
      console.log(x)
    }
  },
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}

</style>
