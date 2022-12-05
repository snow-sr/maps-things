<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <main :style="style">
    <div class="icn" :style="pos">
      <h1>{{ name }}</h1>
      <h3>{{ newPos }}</h3>
    </div>
  </main>
</template>

<script>
import { map } from "@/plugins/map.js";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      newPos: [],
      screenSizeX: window.innerWidth,
      screenSizeY: window.innerHeight,
    };
  },

  mounted() {
    if (this.position in map) {
      let newPos = map[this.position][this.screenSize];
      console.log("Position:" + this.position, "ScreenSize:" + this.screenSize);
      console.log(newPos);
      console.log(this.name);
      this.newPos = newPos;
    }
  },

  computed: {
    style() {
      return `transform: translate(${this.newPos[0]}em, ${this.newPos[1]}em)`;
    },
    screenSize() {
      if (this.screenSizeX < 500 && this.screenSizeY < 500) {
        return "sm";
      } else if (this.screenSizeX < 1000 && this.screenSizeY < 1000) {
        return "md";
      } else if (this.screenSizeX < 1500 && this.screenSizeY < 1500) {
        return "lg";
      } else {
        return "lg";
      }
    },
    pos() {
      return `content: "ourPosition: ${this.position}}"`;
    },
  },
};
</script>

<style scoped>
* {
  opacity: 1.1;
}
span {
  font-size: 14pt;
  margin-left: 5px;
}

.icn {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #7700ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

main {
  color: "black";
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  background-color: #0a020a;
  width: 30px;
  height: 30px;
}
/* 
main:hover {
  transition: 500ms;
  height: 70px;
  width: 200px;
  border-radius: 50px;
} */
</style>
