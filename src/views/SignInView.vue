<template>
  <div class="outer">
    <main>
      <div class="circle-title"></div>
      <div class="container">
        <div class="titulo">
          <h1>O LUGAR</h1>
          <h1>PERFEITO</h1>
          <h1>PARA CUIDAR</h1>
          <h1>DE QUEM VOCÊ MAIS</h1>
          <div class="titulo2">
            <h1>AMA</h1>
          </div>
        </div>

        <div class="input-buttons">
          <a href="/login">
            <input type="button" value="Entrar" />
          </a>
        </div>
        <div class="alternative">
          <span> ou </span>
        </div>
        <div class="input-buttons">
          <a href="/cadastro">
          <input type="button" value="Cadastre-se" />
        </a>
        </div>
      </div>
    </main>
    <section class="images">
      <img src="@/assets/img/undraw_good_doggy_re_eet7 (1).svg" alt="image" />
      <div class="circle"></div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.outer {
  background: linear-gradient(#161e35, #3071e7);
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  z-index: 0;
}

main {
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input-buttons input {
  background: linear-gradient(to right, #0419d6, #00b7ff);
  color: #fff;
  width: 350px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 15px;
}

.input-buttons input:hover {
  background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  color: #fff;
  width: 350px;
  height: 40px;
  border-radius: 40px;
}

.input-buttons input:first-child {
  margin-bottom: 15px;
}

.alternative span {
  position: relative;
  color: #fff;
  margin-left: 10rem;
}

.alternative span::before,
.alternative span::after {
  position: absolute;
  content: "";
  height: 1px;
  width: 100px;
  bottom: 50%;
  right: 30px;
  background-color: #fff;
}

.alternative span::after {
  left: 30px;
  background-color: #fff;
}

.titulo h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-family: "Poppins", sans-serif;
}

.titulo2 h1 {
  font-family: "Pacifico", sans-serif;
  background: -webkit-linear-gradient(rgb(230, 108, 169), #970584);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

section.images {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

section.images img {
  margin-left: 0;
  height: 27rem;
  z-index: 1;
}

section.images .circle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  clip-path: circle(40% at right 80%);
  z-index: 0;
}

.container {
  /* align-items: center; */
  width: 27rem;
  height: 30rem;
  background-color: transparent;
  backdrop-filter: blur(50px);
  padding: 30px 35px;
  border-radius: 30px;
  box-shadow: 0px 5px 30px rgb(2, 48, 85);
}

.circle-title {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: -webkit-linear-gradient(45deg, #212979, #3c88a6, #204486);
  clip-path: circle(40% at left 80%);
  z-index: 0;
}

@media only screen and (min-width: 900px) and (max-width: 1200px) {
    section.images img {
      width: 110%;
    }

    section.images .circle {
      clip-path: circle(35% at right 80%);
    }
  }

  @media only screen and (max-width: 900px) {
    section.images {
      display: none;
      visibility: hidden;
    }

    main {
      width: 100vw;
    }
  }

  @media only screen and (max-width: 450px) {
    main h1 {
      font-size: 2rem;
    }

    main .alternative span {
      font-size: 0.8rem;
    }

    main form label span,
    main form input[type="submit"] {
      font-size: 1rem;
    }
  }
</style>
