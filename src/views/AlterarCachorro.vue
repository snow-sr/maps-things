<script>
import CachorroCard from "@/components/cachorrada/CachorroCard.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { CachorroCard },
  name: "cachorros",
  props: ["id"],
  data() {
    return {
      cachorro:{
        cachorro: 0,
        peso: "",
        altura: "",
        descricao: "",
        nome: "",
        nome_responsavel: "",
        tel_responsavel: "",
        foto: {
          url: null,
      },
    },
  };
  },

  async created() {
    const res = await axios.get(`http://localhost:8000/cachorros/${this.id}/`);
    this.cachorro = res.data;
      // const user = await axios.get("http://localhost:8000/token/");
      // this.user = cachorros.data;
    },
    methods: {
      async alterarDog() {
        const info = {
          foto_attachment_key: this.cachorro.foto_attachment_key,
          nome: this.cachorro.nome,
          peso: this.cachorro.peso,
          altura: this.cachorro.altura,
          descricao: this.cachorro.descricao,
          nome_responsavel: this.cachorro.nome_responsavel, 
          tel_responsavel: this.cachorro.tel_responsavel,

        }
        try {
          await axios.put(
            `http://localhost:8000/cachorros/${this.id}/`,
            info)
          alert("Alterado com sucesso!")
          this.$router.push("/cachorrada");
         } catch {
          alert("Algo deu errado, tente novamente ");
        }
      },
      uploadFile() {
        this.Images = this.$refs.file.files[0];
      },
      async submitFile() {
        const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        const { data } = await  axios.post('http://localhost:8000/api/media/images/', formData, { headers })
        this.cachorro.foto_attachment_key = data.attachment_key
        alert("Foto adicionada!")
      }
    },
    computed: {
      ...mapStores(useAuthStore),
      ...mapState(useAuthStore, ["cachorros","username", "email", "id", "first_name"]),
    },
    mounted() {
      
    },
  };
</script>

<template>
  <div class="outer">
    <div class="form">
      <main>
        <form action="#">
          <div class="circle-primary"></div>
          <div class="container">
            <div class="form-header">
              <div class="title">
                <h1>Altere o(a) {{cachorro.nome}}:</h1>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Nome do cão</label>
                <input
                @keydown.enter="alterarDog()"
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="nome"
                  v-model="cachorro.nome"
                />
              </div>

              <div class="input-box">
                <label for="lastname">desc</label>
                <input
                @keydown.enter="alterarDog()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="cachorro.descricao"
                />
              </div>


              <div class="input-box">
                <label for="email">Peso</label>
                <input
                @keydown.enter="alterarDog()"
                  id="peso "
                  type="text"
                  name="peso"
                  placeholder="peso"
                  v-model="cachorro.peso"
                />
              </div>

              <div class="input-box">
                <label for="number">altura</label>
                <input
                @keydown.enter="alterarDog()"
                  id="altura"
                  type="text"
                  name="altura"
                  v-model="cachorro.altura"
                  placeholder="altura"
                />
              </div>

              <div class="input-box">
                <label for="password">responsavel</label>
                <input
                @keydown.enter="alterarDog()"
                  id="nome_responsavel"
                  type="text"
                  name="nome_responsavel"
                  placeholder="responsavel"
                  v-model="cachorro.nome_responsavel"
                />
              </div>

              <div class="input-box">
                <label for="confirmPassword">tel_responsavel</label>
                <input
                  @keydown.enter="alterarDog()"
                  id="tel_responsavel"
                  type="text"
                  name="tel_responsavel"
                  placeholder="tel_responsavel"
                  v-model="cachorro.tel_responsavel"
                />
              </div>
            </div>
            <div class="alterar-foto">
              <input type="file" @change="uploadFile" ref="file" >
              <button @click.prevent="submitFile">Upload!</button>
            </div>

            <div class="continue-button">
              <button @click.prevent="alterarDog" >Altere</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
  input {
    width: 350px;
    height: 40px;
    margin-top: 1rem;
    background-color: #161e35;
    border-radius: 6px;
    color: #fff;
    outline: none;
    padding: 3% 5%;
  }

  h1 {
    
    text-transform: uppercase;
    background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .user-email {
    color: #eef;
  }

  button {
    background: linear-gradient(to right, #0419d6, #00b7ff);
    color: #fff;
    width: 450px;
    height: 40px;
    border-radius: 40px;
    margin-top: 20px;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(to right, rgb(230, 108, 169), #970584);
    color: #fff;
    height: 40px;
    border-radius: 40px;
  }

  span {
    color: #eef;
  }



  label{
    margin-top: 10px;
    color: #eef;
  }
  
  .logout button {
    margin-top: 60px;
    width: 400px;
  }
  .nickname {
    display: flex;
  }

  .re-password {
    display: flex;
  }

  .circle-1 {
    position: absolute;
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(45deg, #212979, #3c88a6, #204486);
    clip-path: circle(40% at left 80%);
    z-index: 0;
  }

  .circle-2 {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    clip-path: circle(40% at right 80%);
    z-index: 0;
  }

  .outer {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    
    width: 20rem;
    border-radius: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .avatar img {
    width: 300px;
    border-radius: 200px;
    border: 6px solid #eef;
  }
</style>