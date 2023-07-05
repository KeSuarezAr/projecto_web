<template>
  <div class="home">
    <h1>UIDE</h1>
    <NavComponent />
    <SobreAcademia />
    <CursosCom />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CursosCom from "@/components/CursosCom.vue";
import NavComponent from "@/components/NavComponent.vue";
import SobreAcademia from "@/components/SobreAcademia.vue";

@Options({
  components: { NavComponent, SobreAcademia, CursosCom },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
