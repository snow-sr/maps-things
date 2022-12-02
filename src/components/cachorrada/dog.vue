<script>
export default {
  props: ["cachorro"],
};
</script>
<template>
  <div class="full">
    <div class="comentarios">
      <RouterLink to="/singout"
        ><h1>{{ cachorro.nome }}</h1>
        <h2>Esteve aqui!</h2>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
  color: #eff;
  height: 30px;
  width: 60px;
  border-radius: 16px;
  background: red;
}
.comentarios {
  max-height: 500px;
  max-width: 750px;
  border-radius: 0px 10px 10px 10px;
  border: 1px solid #eef;
  background-color: #a31aaf;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}

h1 {
  background: -webkit-linear-gradient(45deg, #8a93e4, #00b7ff, #3071e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16pt;
}

h2 {
  word-break: break-all;
  margin-top: 7px;
  margin-left: 10px;
  font-size: 10pt;
}

.full {
  max-width: 500px;
  margin-left: 5%;
  display: flex;
  color: #eff;
}
</style>
