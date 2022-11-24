<script>
import CachorroCard from "@/components/cachorrada/CachorroCard.vue";
import axios from "axios";
import { mapStores, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  components: { CachorroCard },
  data() {
    return {
      cachorro:{},
    };
  },
  async created() {
      // const user = await axios.get("http://localhost:8000/token/");
      // this.user = cachorros.data;
    },
    methods: {
      async alterarDog() {
        try {
          await axios.patch(
            "(`http://localhost:8000/cachorros/${this.id}/`);",
            this.cachorro,);
            alert("Cachorro registrado com sucesso!"),
            this.$router.push("/cachorrada");
        } catch {
          alert("Erro 2222");
        }
      },
      uploadFile() {
        this.Images = this.$refs.file.files[0];
      },
      async submitFile() {
        const formData = new FormData();
        formData.append('file', this.Images);
        const headers = { 'Content-Type': 'multipart/form-data' };
        const { data } = await  axios.patch('http://localhost:8000/api/media/images/', formData, { headers })
        this.cachorro.foto_attachment_key = data.attachment_key
        await axios.patch(
            "(`http://localhost:8000/cachorros/${this.id}/`);",
            this.cachorro
          )
          alert("Cachorro alterado com sucesso!"),
            this.$router.push("/cachorrada");
      },
    },
    computed: {
      ...mapStores(useAuthStore),
      ...mapState(useAuthStore, ["id"]),
    },
  //   async sendFile() {
  //     let dataForm = new FormData();
  //     for (let file of this.$refs.files.files) {
  //       dataForm.append(`file`, file);
  //     }
  //     let res = await fetch(`http://localhost:8000/media/images`, {
  //       method: 'POST',
  //       body: dataForm,
  //     });
  //     let data = await res.json();
  //     console.log(data);
  //   },
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
                @keydown.enter="submitFile()"
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="nome"
                  v-model="cachorro.nome"
                  required
                />
              </div>

              <div class="input-box">
                <label for="lastname">desc</label>
                <input
                @keydown.enter="submitFile()"
                  id="descricao"
                  type="text"
                  name="descricao"
                  placeholder="desc"
                  v-model="cachorro.descricao"
                  required
                />
              </div>


              <div class="input-box">
                <label for="email">Peso</label>
                <input
                @keydown.enter="submitFile()"
                  id="peso "
                  type="text"
                  name="peso"
                  placeholder="peso"
                  v-model="cachorro.peso"
                  required
                />
              </div>

              <div class="input-box">
                <label for="number">altura</label>
                <input
                @keydown.enter="submitFile()"
                  id="altura"
                  type="text"
                  name="altura"
                  v-model="cachorro.altura"
                  required
                  placeholder="altura"
                />
              </div>

              <div class="input-box">
                <label for="password">responsavel</label>
                <input
                @keydown.enter="submitFile()"
                  id="nome_responsavel"
                  type="text"
                  name="nome_responsavel"
                  placeholder="responsavel"
                  v-model="cachorro.nome_responsavel"
                  required
                />
              </div>

              <div class="input-box">
                <label for="confirmPassword">tel_responsavel</label>
                <input
                  @keydown.enter="submitFile()"
                  id="tel_responsavel"
                  type="text"
                  name="tel_responsavel"
                  placeholder="tel_responsavel"
                  v-model="cachorro.tel_responsavel"
                  required
                />
              </div>
            </div>
            <div class="alterar-foto">
              <input type="file" @change="uploadFile" ref="file" >
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