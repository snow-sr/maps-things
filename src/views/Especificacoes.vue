<script>
import { mapState } from "pinia";
import axios from "axios";
export default {
  name: "cachorros",
  props: ["id"],
  data() {
    return {
      value: 1,
      cachorros: [],
      cachorro: {
        cachorro: 0,
        peso: "",
        altura: "",
        descricao: "",
        nome: "",
        nome_responsavel: "",
        tel_responsavel: "",
      },
    };
  },
  methods: {
    async getAllCachorros(id) {
      await this.$get(
        `especificacoes/cachorros/${id}/`,
        this.especificacoes.cachorros
      );
    },
    async postEspecificacoes() {
      this.especificacoes.cachorros = this.$route.params.id;
      await this.$post("cachorros/", this.especificacoes);
      await this.getAllEspecificacoes();
    },
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/cachorros/${this.id}/`);
    this.cachorro = res.data;
  },
  computed: {
    ...mapState("auth", ["cachorros"]),
  },
};
</script>

<template>
  <div class="all">
    <div class="menu1">
      <div id="main-banner">
        <img :src="cachorro.foto.url" />

        <div id="main-banner-content"></div>
      </div>

      <div class="infos">
        <div class="camps">
          <div class="nome">
            <h1>Nome:</h1>
            <span> {{ cachorro.nome }}</span>
          </div>
          <div class="peso">
            <h1>Peso:</h1>
            <span>{{ cachorro.peso }} KG</span>
          </div>
          <div class="altura">
            <h1>Altura:</h1>
            <span> {{ cachorro.altura }} CM</span>
          </div>
          <div class="Descrição">
            <h1>Descrição:</h1>
            <span> {{ cachorro.descricao }}</span>
          </div>
          <div class="Responsável">
            <h1>Responsável:</h1>
            <span> {{ cachorro.nome_responsavel }}</span>
          </div>
          <div class="button">
            <i class="fa-brands fa-whatsapp"></i>
            <a target="_blank" :href="cachorro.tel_responsavel">Contato</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #ffffff !important;
  font-size: 18pt;
}

i {
  font-size: 18pt;
  margin-right: 10px;
}
.button {
  margin-left: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 300px;
  height: 60px;
  background-color: #128c7e;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  margin-left: 10px;
  margin-top: 14px;
}

.Descrição,
.Responsável,
.Telefone {
  display: flex;
}

#main-banner {
  border-radius: 30px 30px 0 0;
  width: 1000px;
  height: 330px;
  overflow: hidden;
  background: linear-gradient(rgb(0, 102, 255), rgb(0, 214, 221));
}

#main-banner img {
  margin-top: 10px;
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}

.menu1 {
  border-radius: 30px;
  box-shadow: 7px 7px 13px 0px rgba(226, 226, 226, 0.22);
  background-color: #161e35;
  width: 1000px;
  color: #f7f7f7;
  text-align: center;
}

.menu1 img {
  border-radius: 25px 25px 0 0;
  margin-right: 15px;
  height: 300px;
  width: 800px;
  margin-bottom: 3rem;
}

.camps {
  margin-top: 10px;
  margin-left: 10px;
}

.nome {
  display: flex;
}

.peso {
  display: flex;
}

.altura {
  display: flex;
}

.avatar {
  align-items: center;
  justify-content: center;
  display: flex;
}

.avatar img {
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}
.all {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container {
  width: 50%;
  background-color: transparent;
  backdrop-filter: blur(50px);
  padding: 30px 35px;
  border-radius: 30px;
  box-shadow: 0px 5px 30px rgb(2, 48, 85);
}

.infos h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.infos span {
  color: #eef;
}
</style>
