<script>
  export default {
    props: ["cachorro"],
  };
</script>

<template>
  <div class="card">
    <img
      :src= " cachorro.foto.url "/> 
    <h1>{{ cachorro.nome }}</h1>
    <div class="descricao">
      <p>{{ cachorro.descricao }} </p>
    </div>

    <div class="button">
      <RouterLink :to="`/cachorro/${cachorro.id}`"
        ><button>clique aqui</button></RouterLink
      >
      <div class="help-link">
        <span><a href="#">Estou em apuros? Clique aqui</a></span>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
  .descricao {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 306px;
  }
</style>
