<template>
  <div class="home">
    <div class="uide-logo">
      <img src="../assets/uide-fondo.jpg" alt="logo" />
    </div>
    <NavComponent />
    <TestimonialComponent />
    <CursosCom />
    <SobreAcademia />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CursosCom from "@/components/CursosCom.vue";
import NavComponent from "@/components/NavComponent.vue";
import SobreAcademia from "@/components/SobreAcademia.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";

@Options({
  components: { NavComponent, SobreAcademia, CursosCom, TestimonialComponent },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.uide-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
