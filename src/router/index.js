import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Perumahan from "../views/Perumahan.vue";
import DataPerumahan from "../views/DataPerumahan.vue";
import DataPerumahanByTipe from "../views/DataPerumahanByTipe.vue";
import DetailPerumahan from "../views/DetailPerumahan.vue";
import Pengembang from "../views/Pengembang.vue";
import DataPengembang from "../views/DataPengembang.vue";
import PetaPerumahan from "../views/PetaPerumahan.vue";
import DaftarPengembang from "../views/DaftarPengembang.vue";
import DashboardPengembang from "../views/DashboardPengembang.vue";
import EditProfilPengembang from "../views/EditProfilPengembang.vue";
import EditPasswordPengembang from "../views/EditPasswordPengembang.vue";
import PerumahanPengembang from "../views/PerumahanPengembang.vue";
import InputPerumahanPengembang from "../views/InputPerumahanPengembang.vue";
import EditPerumahanPengembang from "../views/EditPerumahanPengembang.vue";
import TipePerumahanPengembang from "../views/TipePerumahanPengembang.vue";
import EditTipePerumahanPengembang from "../views/EditTipePerumahanPengembang.vue";
import InputBacklogPengembang from "../views/InputBacklogPengembang.vue";
import EditBacklogPengembang from "../views/EditBacklogPengembang.vue";
import Csr from "../views/csr.vue";
import DetailCsr from "../views/DetailCsr.vue";
import DetailCsrByKegiatan from "../views/DetailCsrByKegiatan.vue";
import DaftarCsr from "../views/DaftarCsr.vue";
import DashboardCsr from "../views/DashboardCsr.vue";
import EditProfilCsr from "../views/EditProfilCsr.vue";
import EditPasswordCsr from "../views/EditPasswordCsr.vue";
import InputCsr from "../views/InputCsr.vue";
import EditCsr from "../views/EditCsr.vue";
import Rtlh from "../views/Rtlh.vue";
import DetailRtlh from "../views/DetailRtlh.vue";
import Magang from "../views/Magang.vue";
import DetailMagang from "../views/DetailMagang.vue";
import GabungMagang from "../views/GabungMagang.vue";
import DashboardPerbankan from "../views/DashboardPerbankan.vue";
import PV from "../views/PV.vue";
import DetailPV from "../views/PV_Detail";
import Login from "../views/Login.vue";
import Konsultasi from "../views/Konsultasi.vue";
import InputKonsultasi from "../views/InputKonsultasi.vue";
import DetailKonsultasi from "../views/DetailKonsultasi.vue";
import Usulan from "../views/Usulan.vue";
import UsulanPembangunan from "../views/UsulanPembangunan.vue";
import InputUsulanPembangunan from "../views/InputUsulanPembangunan.vue";
import EditUsulanPembangunan from "../views/EditUsulanPembangunan.vue";
import UsulanRTLH from "../views/UsulanRTLH.vue";
import InputUsulanRTLH from "../views/InputUsulanRTLH.vue";
import EditUsulanRTLH from "../views/EditUsulanRTLH.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   meta: {
  //     role: "all",
  //   },
  // },

  {
    path: "/",
    name: "Pengembang",
    component: Pengembang,
    meta: {
      role: "all",
    },
  },

  {
    path: "/data_pengembang",
    name: "DataPengembang",
    component: DataPengembang,
    meta: {
      role: "all",
    },
  },

  {
    path: "/peta_perumahan",
    name: "PetaPerumahan",
    component: PetaPerumahan,
    meta: {
      role: "all",
    },
  },

  {
    path: "/perumahan",
    name: "Perumahan",
    component: Perumahan,
    meta: {
      role: "all",
    },
  },

  {
    path: "/data_perumahan",
    name: "DataPerumahan",
    component: DataPerumahan,
    meta: {
      role: "all",
    },
  },

  {
    path: "/data_perumahan_by_tipe/:id",
    name: "DataPerumahanByTipe",
    component: DataPerumahanByTipe,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/data_perumahan_by_tipe/:id") {
        next({
          path: "/data_perumahan_by_tipe",
        });
      }
    },
  },

  {
    path: "/detail_perumahan/:id",
    name: "DetailPerumahan",
    component: DetailPerumahan,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/detail_perumahan/:id") {
        next({
          path: "/detail_perumahan",
        });
      }
    },
  },

  {
    path: "/konsultasi",
    name: "Konsultasi",
    component: Konsultasi,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/input_konsultasi",
    name: "InputKonsultasi",
    component: InputKonsultasi,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/detail_konsultasi/:id",
    name: "DetailKonsultasi",
    component: DetailKonsultasi,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/usulan",
    name: "Usulan",
    component: Usulan,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/usulan_pembangunan",
    name: "UsulanPembangunan",
    component: UsulanPembangunan,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/input_usulan_pembangunan",
    name: "InputUsulanPembangunan",
    component: InputUsulanPembangunan,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/edit_usulan_pembangunan/:id",
    name: "EditUsulanPembangunan",
    component: EditUsulanPembangunan,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/usulan_rtlh",
    name: "UsulanRTLH",
    component: UsulanRTLH,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/input_usulan_rtlh",
    name: "InputUsulanRTLH",
    component: InputUsulanRTLH,
    meta: {
      role: "Umum",
    },
  },

  {
    path: "/edit_usulan_rtlh/:id",
    name: "EditUsulanRTLH",
    component: EditUsulanRTLH,
    meta: {
      role: "Umum",
    },
  },

  // {
  //   path: "/pengembang",
  //   name: "Pengembang",
  //   component: Pengembang,
  //   meta: {
  //     role: "all",
  //   },
  // },

  {
    path: "/daftar_pengembang",
    name: "DaftarPengembang",
    component: DaftarPengembang,
    meta: {
      role: "all",
    },
  },

  {
    path: "/dashboard_pengembang",
    name: "DashboardPengembang",
    meta: {
      role: "Pengembang",
    },
    component: DashboardPengembang,
  },

  {
    path: "/edit_profil_pengembang",
    name: "EditProfilPengembang",
    component: EditProfilPengembang,
    meta: {
      role: "Pengembang",
    },
  },

  {
    path: "/edit_password_pengembang",
    name: "EditPasswordPengembang",
    component: EditPasswordPengembang,
    meta: {
      role: "all",
    },
  },

  {
    path: "/perumahan_pengembang/:id",
    name: "PerumahanPengembang",
    component: PerumahanPengembang,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/perumahan_pengembang/:id") {
        next({
          path: "/perumahan_pengembang",
        });
      }
    },
  },

  {
    path: "/input_perumahan_pengembang",
    name: "InputPerumahanPengembang",
    component: InputPerumahanPengembang,
    meta: {
      role: "Pengembang",
    },
  },

  {
    path: "/input_backlog_pengembang",
    name: "InputBacklogPengembang",
    component: InputBacklogPengembang,
    meta: {
      role: "Pengembang",
    },
  },

  {
    path: "/edit_backlog_pengembang/:id",
    name: "EditBacklogPengembang",
    component: EditBacklogPengembang,
    meta: {
      role: "Pengembang",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/edit_backlog_pengembang/:id") {
        next({
          path: "/edit_backlog_pengembang/",
        });
      }
    },
  },

  {
    path: "/edit_perumahan_pengembang/:id",
    name: "EditPerumahanPengembang",
    component: EditPerumahanPengembang,
    meta: {
      role: "Pengembang",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/edit_perumahan_pengembang/:id") {
        next({
          path: "/edit_perumahan_pengembang",
        });
      }
    },
  },

  {
    path: "/tipe_perumahan_pengembang/:id",
    name: "TipePerumahanPengembang",
    component: TipePerumahanPengembang,
    meta: {
      role: "Pengembang",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/tipe_perumahan_pengembang/:id") {
        next({
          path: "/tipe_perumahan_pengembang",
        });
      }
    },
  },

  {
    path: "/edit_tipe_perumahan_pengembang/:id",
    name: "EditTipePerumahanPengembang",
    component: EditTipePerumahanPengembang,
    meta: {
      role: "Pengembang",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/edit_tipe_perumahan_pengembang/:id") {
        next({
          path: "/edit_tipe_perumahan_pengembang",
        });
      }
    },
  },

  {
    path: "/csr",
    name: "Csr",
    component: Csr,
    meta: {
      role: "all",
    },
  },

  {
    path: "/detail_csr/:id",
    name: "DetailCsr",
    component: DetailCsr,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/detail_csr/:id") {
        next({
          path: "/detail_csr",
        });
      }
    },
  },

  {
    path: "/detail_csr_by_kegiatan/:id",
    name: "DetailCsrByKegiatan",
    component: DetailCsrByKegiatan,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/detail_csr_by_kegiatan/:id") {
        next({
          path: "/detail_csr_by_kegiatan",
        });
      }
    },
  },

  {
    path: "/daftar_csr",
    name: "DaftarCsr",
    component: DaftarCsr,
    meta: {
      role: "all",
    },
  },

  {
    path: "/edit_profil_csr",
    name: "EditProfilCsr",
    component: EditProfilCsr,
    meta: {
      role: "CSR",
    },
  },

  {
    path: "/edit_password_csr",
    name: "EditPasswordCsr",
    component: EditPasswordCsr,
    meta: {
      role: "CSR",
    },
  },

  {
    path: "/dashboard_csr",
    name: "DashboardCsr",
    component: DashboardCsr,
    meta: {
      role: "CSR",
    },
  },

  {
    path: "/input_csr",
    name: "InputCsr",
    component: InputCsr,
    meta: {
      role: "CSR",
    },
  },
  {
    path: "/edit_csr/:id",
    name: "EditCsr",
    component: EditCsr,
    meta: {
      role: "CSR",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/edit_csr/:id") {
        next({
          path: "/edit_csr",
        });
      }
    },
  },

  {
    path: "/rtlh",
    name: "Rtlh",
    component: Rtlh,
    meta: {
      role: "all",
    },
  },

  {
    path: "/detail_rtlh",
    name: "DetailRtlh",
    component: DetailRtlh,
    meta: {
      role: "all",
    },
  },

  {
    path: "/magang",
    name: "Magang",
    component: Magang,
    meta: {
      role: "all",
    },
  },

  {
    path: "/detail_magang/:id",
    name: "DetailMagang",
    component: DetailMagang,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/detail_magang/:id") {
        next({
          path: "/detail_magang",
        });
      }
    },
  },

  {
    path: "/gabung_magang/:id",
    name: "GabungMagang",
    component: GabungMagang,
    meta: {
      role: "all",
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/gabung_magang/:id") {
        next({
          path: "/gabung_magang",
        });
      }
    },
  },

  {
    path: "/dashboard_perbankan",
    name: "DashboardPerbankan",
    component: DashboardPerbankan,
    meta: {
      role: "Perbankan",
    },
  },
  {
    path: "/pameran_virtual",
    name: "PameranVirtual",
    component: PV,
    meta: {
      role: "all",
    },
    children: [
      {
        path: "/detail_pameran_virtual/:id",
        name: "DetailPameranVirtual",
        component: DetailPV,
        meta: {
          role: "all",
        },
        beforeRouteUpdate(to, from, next) {
          console.log(to);
          if (to.path == "/detail_pameran_virtual/:id") {
            next({
              path: "/detail_pameran_virtual",
            });
          }
        },
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      role: "all",
    },
  },
  {
    path: "/logout",
    name: "Logout",
    meta: {
      role: "all",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("role");
  if (to.path == "/logout") {
    localStorage.clear();
    next({
      path: "/",
    });
  } else {
    if (to.meta.role == "all") {
      next({});
    } else if (to.meta.role !== role) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  }
});

export default router;
