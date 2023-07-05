<template>
  <div class="section white section scrollspy" id="information">
    <div class="row container">
      <div class="col m6 s12">
        <div class="card-image waves-effect waves-block waves-light">
          <img
            v-bind:data-aos="'slide-left'"
            v-bind:data-aos-offset="500"
            class="activator"
            src="components/sobreacademia/images/home-sobre-academia.png"
          />
        </div>
      </div>
      <div
        v-bind:data-aos="'fade-left'"
        v-bind:data-aos-duration="3000"
        class="col m6 s12"
        style="padding: 3em"
      >
        <br />
        <span><b>LO QUE SOMOS Y LO QUE OFRECEMOS</b></span>
        <h3 style="color: #ea1b2e">Academia <strong>Nodo</strong></h3>
        <p style="text-align: justify">
          Somos una academia de formación profesional que, a lo largo de 10
          años, ha tenido por objeto brindar las herramientas necesarias para
          complementar la educación tradicional, siendo referente formativo y
          logrando así los objetivos planteados por cada uno de los estudiantes
          de nuestra academia.
          <br />
          Ofrecemos diferentes capacitaciones en la rama de ingeniería y
          telecomunicaciones, obteniendo un mayor reconocimiento en la zona sur
          del país. Nuestros itinerarios formativos son realizados dentro y
          fuera de nuestro centro de formación. <br />
          Nuestro principal objetivo es brindar calidad en nuestros procesos de
          certificación, desarrollando un proceso de aprendizaje significativo y
          práctico, promoviendo así la buena práctica y mejora continua.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="scss" scoped>
/* Estilos CSS pueden ser añadidos aquí */
</style>
