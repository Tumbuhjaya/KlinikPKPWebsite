import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Perumahan from "../views/Perumahan.vue";
import DataPerumahan from "../views/DataPerumahan.vue";
import DataPerumahanByTipe from "../views/DataPerumahanByTipe.vue";
import DetailPerumahan from "../views/DetailPerumahan.vue";
import Pengembang from "../views/Pengembang.vue";
import DaftarPengembang from "../views/DaftarPengembang.vue";
import DashboardPengembang from "../views/DashboardPengembang.vue";
import EditProfilPengembang from "../views/EditProfilPengembang.vue";
import EditPasswordPengembang from "../views/EditPasswordPengembang.vue";
import PerumahanPengembang from "../views/PerumahanPengembang.vue";
import InputPerumahanPengembang from "../views/InputPerumahanPengembang.vue";
import EditPerumahanPengembang from "../views/EditPerumahanPengembang.vue";
import TipePerumahanPengembang from "../views/TipePerumahanPengembang.vue";
import EditTipePerumahanPengembang from "../views/EditTipePerumahanPengembang.vue";
import Csr from "../views/csr.vue";
import DetailCsr from "../views/DetailCsr.vue";
import DaftarCsr from "../views/DaftarCsr.vue";
import DashboardCsr from "../views/DashboardCsr.vue";
import EditProfilCsr from "../views/EditProfilCsr.vue";
import EditPasswordCsr from "../views/EditPasswordCsr.vue";
import InputCsr from "../views/InputCsr.vue";
import EditCsr from "../views/EditCsr.vue";
import Magang from "../views/Magang.vue";
import DetailMagang from "../views/DetailMagang.vue";
import DashboardPerbankan from "../views/DashboardPerbankan.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      role: "all",
    }
  },

  {
    path: "/perumahan",
    name: "Perumahan",
    component: Perumahan,
    meta:{
      role: "all",
    }
  },

  {
    path: "/data_perumahan",
    name: "DataPerumahan",
    component: DataPerumahan,
    meta:{
      role: "all",
    }
  },

  {
    path: "/data_perumahan_by_tipe/:id",
    name: "DataPerumahanByTipe",
    component: DataPerumahanByTipe,
    meta:{
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
    meta:{
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
    path: "/pengembang",
    name: "Pengembang",
    component: Pengembang,
    meta:{
      role: "all",
    }
    
  },

  {
    path: "/daftar_pengembang",
    name: "DaftarPengembang",
    component: DaftarPengembang,
    meta:{
      role: "all",
    }
  },

  {
    path: "/dashboard_pengembang",
    name: "DashboardPengembang",
    meta:{
      role: "pengembang",
    },
    component: DashboardPengembang,
  },

  {
    path: "/edit_profil_pengembang",
    name: "EditProfilPengembang",
    component: EditProfilPengembang,
    meta:{
      role: "pengembang",
    },
  },

  {
    path: "/edit_password_pengembang",
    name: "EditPasswordPengembang",
    component: EditPasswordPengembang,
    meta:{
      role: "pengembang",
    },
  },

  {
    path: "/perumahan_pengembang",
    name: "PerumahanPengembang",
    component: PerumahanPengembang,
    meta:{
      role: "pengembang",
    },
  },

  {
    path: "/input_perumahan_pengembang",
    name: "InputPerumahanPengembang",
    component: InputPerumahanPengembang,
    meta:{
      role: "pengembang",
    },
  },
  {
    path: "/edit_perumahan_pengembang/:id",
    name: "EditPerumahanPengembang",
    component: EditPerumahanPengembang,
    meta:{
      role: "pengembang",
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
    meta:{
      role: "pengembang",
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
    meta:{
      role: "pengembang",
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
    meta:{
      role: "all",
    }
  },

  {
    path: "/detail_csr/:id",
    name: "DetailCsr",
    component: DetailCsr,
    meta:{
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
    path: "/daftar_csr",
    name: "DaftarCsr",
    component: DaftarCsr,
    meta:{
      role: "all",
    }
  },

  {
    path: "/edit_profil_csr",
    name: "EditProfilCsr",
    component: EditProfilCsr,
    meta:{
      role: "CSR",
    }
  },

  {
    path: "/edit_password_csr",
    name: "EditPasswordCsr",
    component: EditPasswordCsr,
    meta:{
      role: "CSR",
    }
  },

  {
    path: "/dashboard_csr",
    name: "DashboardCsr",
    component: DashboardCsr,
    meta:{
      role: "CSR",
    }
  },

  {
    path: "/input_csr",
    name: "InputCsr",
    component: InputCsr,
    meta:{
      role: "CSR",
    }
  },

  {
    path: "/edit_csr/:id",
    name: "EditCsr",
    component: EditCsr,
    meta:{
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
    path: "/magang",
    name: "Magang",
    component: Magang,
    meta:{
      role: "all",
    }
  },

  {
    path: "/detail_magang",
    name: "DetailMagang",
    component: DetailMagang,
    meta:{
      role: "all",
    }
  },

  {
    path: "/dashboard_perbankan",
    name: "DashboardPerbankan",
    component: DashboardPerbankan,
    meta:{
      role: "perbankan",
    },
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      role: "all",
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("role");
    if (to.meta.role == "all") {
      next({
      });
    } else if (to.meta.role !== role) {
      next({
        path: "/",
      });
    }
  else{
    next()
  }
});

export default router;
