<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <main :style="style">
    <div class="icn">
      <h1>{{ name }}</h1>
    </div>
    <span>Esteve aqui !!</span>
  </main>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: Array,
      required: true,
    },
  },

  computed: {
    style() {
      return `transform: translate(${this.position[0]}px, ${this.position[1]}px)`;
    },
  },
};
</script>

<style scoped>
span {
  font-size: 14pt;
  margin-left: 5px;
}

.icn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7700ff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
}

main {
  border-radius: 50%;
  color: #eef;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ff00ff79;
  width: 70px;
  height: 70px;
}

main:hover {
  transition: 500ms;
  height: 70px;
  width: 200px;
  border-radius: 50px;
}
</style>
