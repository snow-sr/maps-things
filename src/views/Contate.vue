<template>
  <div></div>
  <div class="outer">
    <div class="container">
      <div class="card-resp">

      <div class="cards">
        <div class="avatar">
          <img src="../assets/img/guga.png" alt="" />
        </div>
        <div class="title-1">
          <h1>Gustavo</h1>
        </div>
        <div class="desc">
          <span> Desenvolvedor Back-end do Projeto Integrador IFDOG. </span>
          <a href="https://github.com/gustavorteuber"
            ><button>GitHub</button></a
          >
        </div>
      </div>
      </div>
      <div class="card-resp">
      <div class="cards">
        <div class="avatar">
          <img src="../assets/img/vini.png" alt="" />
        </div>
        <div class="title-2">
          <h1>Vini</h1>
        </div>
        <div class="desc">
          <span> Desenvolvedor Front-end do Projeto Integrador IFDOG. </span>
          <a href="https://github.com/vinirteuber"><button>GitHub</button></a>
        </div>
      </div>
         </div>
        <div class="card-resp"> 

      <div class="cards">
        <div class="avatar">
          <img src="../assets/img/bryann.png" alt="" />
        </div>
        <div class="title-3">
          <h1>Bryann</h1>
        </div>
        <div class="desc">
          <span> Desenvolvedor Front-end do Projeto Integrador IFDOG. </span>
          <a href="https://github.com/LocatelliBryann"
            ><button>GitHub</button></a
          >
        </div>
      </div>
        </div>
        <div class="card-resp"> 

      <div class="cards">
        <div class="avatar">
          <img src="../assets/img/maros.png" alt="" />
        </div>
        <div class="title-4">
          <h1>Maros</h1>
        </div>
        <div class="desc">
          <span> Desenvolvedor Back-end do Projeto Integrador IFDOG. </span>
          <a href="https://github.com/marosleo"><button>GitHub</button></a>
        </div>
      </div>
        </div>

        <div class="card-resp"> 
  
    </div>
  </div>
        </div>
</template>



<style scoped>
h1 {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-resp{
  display: flex;
    flex-wrap:wrap ;
    justify-content: center;
}

span {
  margin-top: 1rem;
}

.title-1 {
  color: #ee38d6;
}
.title-2 {
  color: #394979;
}
.title-3 {
  color: #00b7ff;
}
.title-4 {
  color: yellow;
}
.title-5 {
  color: red;
}

span {
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 307px;
}

.cards img {
  width: 350px;
  height: 350px;
  border-radius: 16px 16px 0 0;
}

button {
  width: 300px;
  height: 50px;

  border-radius: 15px;
  background: linear-gradient(to right, #0419d6, #00b7ff);
  color: #fff;
  margin: 0;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 3rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
}

button:hover {
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(to right, rgb(230, 108, 169), #970584);
  font-weight: 700;
}

.desc {
  margin: 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.outer {
  color: #eef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  background-repeat: no-repeat;
}

.cards {
  margin-top: 20px;
  flex-direction: column;
  background-color: #161e35;
  width: 350px;
  margin-right: 15px;
  border-radius: 16px;
}

.container {
  display: flex;
}

@media only screen and (min-width: 900px) and (max-width: 1200px) {
  .container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 450px) {
  .container {
    flex-direction: column;
  }
}
</style>
