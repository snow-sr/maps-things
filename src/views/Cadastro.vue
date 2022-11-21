<script>
  import axios from "axios";
  export default {
    data() {
      return {
        user: {},
      };
    },
    methods: {
      async register() {
        try {
          const createdUser = await axios.post(
            "http://localhost:8000/usuarios/",
            this.user,
            alert("Usuario registrado com sucesso")
          );
          this.$router.push("/login");
        } catch (e) {
          console.log(e);
          alert("As credenciais não batem.");
        }
      },
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
                <h1>Cadastre-se</h1>
              </div>
              <div class="login-button">
                <button><a href="/login">Login</a></button>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Primeiro Nome</label>
                <input
                  @keydown.enter="register()"
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Digite seu primeiro nome"
                  v-model="user.first_name"
                  required
                />
              </div>

              <div class="input-box">
                <label for="lastname">Sobrenome</label>
                <input
                  @keydown.enter="register()"
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Digite seu sobrenome"
                  v-model="user.last_name"
                  required
                />
              </div>
              <div class="input-box">
                <label for="email">E-mail</label>
                <input
                  @keydown.enter="register()"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  v-model="user.email"
                  required
                />
              </div>

              <div class="input-box">
                <label for="number">Username</label>
                <input
                  @keydown.enter="register()"
                  id="number"
                  type="tel"
                  name="number"
                  v-model="user.username"
                  required
                  placeholder="Digite seu username"
                />
              </div>

              <div class="input-box">
                <label for="password">Senha</label>
                <input
                  @keydown.enter="register()"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  v-model="user.password"
                  required
                />
              </div>

              <div class="input-box">
                <label for="confirmPassword">Confirme sua Senha</label>
                <input
                  @keydown.enter="register()"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Digite sua senha novamente"
                  v-model="user.password_confirmation"
                  required
                />
              </div>
            </div>

            <div class="continue-button">
              <button @click.prevent="register">Continuar</button>
            </div>
          </div>
        </form>
      </main>
      <section class="images">
        <img src="@/assets/img/image-3.svg" alt="image" />
        <div class="circle"></div>
      </section>
    </div>
  </div>
</template>

<script></script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    border: none;
  }

  main {
    display: flex;
    width: 50%;
  }

  .form-header {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
  }

  .title h1 {
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .login-button {
    display: flex;
    align-items: center;
  }

  .login-button button {
    border: none;
    background: linear-gradient(to right, #0419d6, #00b7ff);
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .login-button button:hover {
    border: none;
    background: linear-gradient(to right, rgb(230, 108, 169), #970584);
    padding: 0.4rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .login-button button a {
    text-decoration: none;
    color: #fff;
  }

  .input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
  }

  .input-box input {
    width: 250px;
    height: 40px;
    margin-top: 1rem;
    background-color: #161e35;
    border-radius: 6px;
    color: #fff;
    outline: none;
    padding: 3% 5%;
    margin-left: 5%;
  }

  .input-box label,
  .gender-title h6 {
    color: #ffff;
    margin-left: 5%;
  }

  .gender-group {
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 0.5rem;
  }

  .gender-input {
    display: flex;
    align-items: left;
  }

  .gender-input input {
    margin-right: 0.35rem;
  }

  .continue-button button {
    margin-top: 2rem;
    padding: 0.62rem;
    background: linear-gradient(to right, #0419d6, #00aeff);
    cursor: pointer;
    color: white;
    border-radius: 40px;
    font-family: "Poppins", sans-serif;
    width: 100%;
    border: none;
  }

  .continue-button button:hover {
    background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  }

  .continue-button button a {
    text-decoration: none;
    color: #fff;
  }

  section.images {
    margin-left: 0;
    height: 9rem;
    z-index: 1;
  }

  section.images {
    width: 100%;
    margin-left: 0px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 0;
  }

  section.images .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
    clip-path: circle(40% at right 80%);
    z-index: -2;
  }

  .container {
    margin-top: 19%;
    margin-left: 10%;
    width: 63rem;
    height: 32rem;
    background-color: transparent;
    backdrop-filter: blur(50px);
    padding: 30px 35px;
    border-radius: 30px;
    box-shadow: 0px 5px 30px rgb(2, 48, 85);
  }

  .circle-primary {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(45deg, #212979, #3c88a6, #204486);
    clip-path: circle(40% at left 80%);
    z-index: -1;
  }
</style>
