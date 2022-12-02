<script>
import Comentarios from "@/components/cachorrada/Comentarios.vue";
import dog from "@/components/cachorrada/dog.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { Comentarios, dog },
  data() {
    return {
      comentarios: [],
      comentario: {
        texto: "",
        autor: 0,
      },
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["id"]),
  },
  methods: {
    async addComment() {
      if (this.comentario.texto.trim() === "") {
        return;
      }

      this.comentario.autor = this.id;
      await axios.post("http://localhost:8000/coments/", this.comentario);
      await this.getAllComments();
    },
    async getAllComments() {
      const comentarios = await axios.get("http://localhost:8000/coments/");
      this.comentarios = comentarios.data;
    },
  },
  async created() {
    await this.getAllComments();
  },
};
</script>
<template>
  <div class="all">
    <!-- main -->
    <main class="mapa">
      <dog name="FMÇ" :position="[100, 360]"></dog>
      <dog name="MAI" :position="[740, 600]"></dog>
    </main>
    <!-- main -->
    <div class="corpo">
      <div class="comentarios">
        <Comentarios
          v-for="comentario in comentarios"
          :key="comentario.id"
          :comentarios="comentario" />
      </div>
    </div>
  </div>
  <div class="texts">
    <div class="enviar">
      <input
        @keydown.enter="addComment()"
        type="text"
        style="padding: 4px"
        placeholder="escreva seu comentario
          "
        v-model="comentario.texto" />
      <div class="submit">
        <button
          v-on:click.prevent="addComment"
          type="submit"
          class="btn btn-primary">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.all {
  display: flex;
}
.mapa {
  border-radius: 20px 20px 0 0;
  background-image: url("../assets/img/ifcmapatt.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  width: 50vw;
}

.outer {
  margin-top: 3rem;
}
.texts {
  margin-top: 10px;
}
.comentarios {
  height: 90px;
}

h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.enviar {
  display: flex;
  height: 40px;
}

input {
  margin-left: 63rem;
  color: #eef;
  background: rgba(22, 30, 53, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  width: 900px;
  border-radius: 15px;
  outline: 0;
}

button {
  margin: 0;
  border-radius: 15px;
  background: linear-gradient(to right, #0419d6, #00b7ff);
  color: #fff;
  font-weight: 50 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 100;
  width: 70px;
  height: 40px;
}

button:hover {
  border-radius: 15px;
  background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  font-weight: 100;
}

.map img {
  border-radius: 20px 20px 0 0;
  height: 840px;
}

.corpo {
  overflow: auto;
  display: flex;
  background: #161e35a6;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 0px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0px 5px 30px #232733;
  height: 90vh;
  width: 50vw;
}
</style>
