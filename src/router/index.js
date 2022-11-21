import { createRouter, createWebHistory } from "vue-router";
import CachorrosView from "../views/CachorrosView.vue";
import Especificacoes from "@/views/Especificacoes.vue";
import Login from "@/views/Login.vue";
import SignInView from "@/views/SignInView.vue";
import Cadastro from "@/views/Cadastro.vue";
import Contate from "@/views/Contate.vue";
import Comentarios from "@/views/Comentarios.vue";
import Carrosel from "@/components/Carrosel.vue";
import Singout from "@/views/SingoutView.vue";
import Emergencia from "@/views/EmergenciaView.vue";
import PostCachorro from "@/views/PostCachorro.vue";
import Loginadm from "@/views/Loginadm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: Login,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },

        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },

        {
          path: "/cadastro",
          name: "cadastro",
          component: Cadastro,
        },
        {
          path: "/signin",
          name: "signin",
          component: SignInView,
        },
      ],
    },
    {
      path: "",
      component: () => import("@/layouts/FullLayout.vue"),
      children: [
        {
          path: "/cachorrada",
          name: "home",
          component: CachorrosView,
        },
        {
          path: "/singout",
          name: "singout",
          component: Singout,
        },
        {
          path: "/cachorro/:id",
          name: "especificacoes",
          component: Especificacoes,
          props: true,
        },
        {
          path: "/contate",
          name: "contate",
          component: Contate,
        },
        {
          path: "/emergencia",
          name: "emergencia",
          component: Emergencia,
        },
        {
          path: "/teste",
          name: "carrosel",
          component: Carrosel,
        },
        {
          path: "/comentarios",
          name: "comentarios",
          component: Comentarios,
        },
        {
          path: "/postcachorro",
          name: "postcachorro",
          component: PostCachorro,
        },
      ],
    },
  ],
});

export default router;
