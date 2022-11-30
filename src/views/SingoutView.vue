<script>
  import { mapState, mapStores } from "pinia";
  import { useAuthStore } from "@/stores/auth";
  import axios from "axios";
  export default {
    data() {
      return {
        user: {
          username: "",
          email: "",
          first_name: "",
          // password: "",
        },
      };
    },
    // async created() {
    //   // const user = await axios.get("http://localhost:8000/token/");
    //   // this.user = cachorros.data;
    // },
      async created() {
      const res = await axios.get(`http://localhost:8000/usuarios/${this.id}/`);
      this.user = res.data;
      console.log(this.user)
  },
    methods: {
      async editarPerfil() {
        const info = {
          foto_attachment_key: this.user.foto_attachment_key,
          username: this.user.username,
          email: this.user.email,
          first_name: this.user.first_name,
          // password: this.user.password,
        }
        try {
          await axios.patch(
            `http://localhost:8000/usuarios/${this.id}/`,
            info)
          alert("por favor deslogar para salvar as informações")
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
        this.user.foto_attachment_key = data.attachment_key
        alert("Foto adicionada!")
      }
    },
    computed: {
      ...mapStores(useAuthStore),
      ...mapState(useAuthStore, ["username", "email", "id", "first_name"]),
    },
  };
  // app.$mount("#content");
</script>

<template>
  <div>
    <div class="outer">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="container">
        <div class="avatar">
          <img v-if="user.foto != null" :src="user.foto.url" />
          <img
            v-if="user.foto == null"
            src="../assets/img/semfoto.png"
            alt="teste"
          />
        </div>
        <!-- <div class="avatar">       
          <img :src="user.foto.url" />
        </div> -->

        <div class="alterar-foto">
          <input type="file" @change="uploadFile" ref="file">
        <button @click="submitFile">Upload!</button>
        </div>
        <div class="user-name">
          <div>
            <h1>{{ username }}</h1>
          </div>
        </div>
        <div class="user-email">
          <div>
            <i><h3>{{ email }}</h3></i>
          </div>
        </div>
        <span>Nova nome:</span>
        <div class="new">
          <input
            type="text"
            v-model="user.username"
            @keydown.enter="editarPerfil"
          />
          <div class="btn"></div>
        </div>
        <span>Nova email:</span>
        <div class="new">
          <input
            type="text"
            v-model="user.email"
            @keydown.enter="editarPerfil"
          />
          <div class="btn"></div>
        </div>
    
        <!-- <div class="new">
          <span>Confirme a senha:</span>
        </div> -->
        <!-- <div class="re-password">
          <input type="text" @keydown.enter="editarPerfil()" />
          <div class="btn"></div>
        </div> -->
        <div class="logout">
          <a href="/signin">
            <button>Sair</button>
            <button @click="editarPerfil">Alterar</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.inputs{
  margin-top: 2rem;
}
.change-foto{
  display: flex;
  align-items: center;
  justify-content: center;
}

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

  .user-name {
    background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .user-email i {
    color: #eef;
  }

  button {
    background: linear-gradient(to right, #0419d6, #00b7ff);
    color: #fff;
    width: 150px;
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
    background: rgba(22, 30, 53, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(12.5px);
    -webkit-backdrop-filter: blur(12.5px);
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

 .avatar img {
  width: 15rem;
  height: 15rem;
  border-radius: 100%;
  border: 6px solid #eef;
}
</style>