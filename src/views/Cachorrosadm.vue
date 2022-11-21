<script>
import CachorroCard from "@/components/cachorrada/CachorroCard.vue";
import Carousel from "@/components/Carrosel.vue";
import axios from "axios";
import Carrosel from "../components/Carrosel.vue";
export default {
  components: { CachorroCard, Carrosel },
  data() {
    return {
      cachorros: [],
      Carousel,
    };
  },
  async created() {
    const cachorros = await axios.get("http://localhost:8000/cachorros/");
    this.cachorros = cachorros.data;
  },
};
</script>
<template>
  <div class="carrossel">
    <Carrosel />
  </div>
  <div class="card-group">
    <CachorroCard
      v-for="cachorro in cachorros"
      :key="cachorro.id"
      :cachorro="cachorro"
    />
  </div>
</template>

<style scoped></style>
