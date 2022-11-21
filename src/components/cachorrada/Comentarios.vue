<script>
export default {
  props: ["comentarios"],
};
</script>

<template>
  <div class="full">
    <div class="comentarios">
      <RouterLink to="/singout"
        ><h1>{{ comentarios.autor.username }}</h1></RouterLink
      >
      <h2>{{ comentarios.texto }}</h2>
    </div>
  </div>
</template>

<style scoped>
.comentarios {
  border-radius: 0px 10px 10px 10px;
  border: 1px solid #eef;
  background-color: #161e35;
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
  width: 200px;
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
