<template>
  <div class="outer">
    <div class="container">
      <div class="break">
        <div class="title">
          <h1>Estou em apuros?</h1>
        </div>
        <div class="text">
          <span>Explique a Situação</span>
          <div class="input-field">
            <input type="text" placeholder="Escreva sobre o acontecido" />
          </div>
        </div>
      </div>
      <div class="id-dog">
        <img
          src="https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.text {
  display: flex;
  flex-direction: column;
}

.container {
    width: 300px;
    height: 150px;
background: rgba(22, 30, 53, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  display: flex;
}

.id-dog img {
  width: 300px;
  border-radius: 200px;
  border: 6px solid #eef;
}

</style>
