<template>
  <div class="section indigo lighten-5 scrollspy" id="course-pro">
    <div class="row container">
      <h6 data-aos-duration="1000" data-aos="zoom-in-up" class="center-align">
        CAPACITACIÓN PROFESIONAL Y CONTINUA
      </h6>
      <h3
        data-aos-duration="2000"
        data-aos="zoom-in-left"
        class="center-align"
        style="color: #ea1b2e; margin: auto"
      >
        <strong>OFERTA DE CURSOS</strong>
      </h3>
      <h6
        data-aos-duration="1000"
        data-aos="zoom-in-right"
        class="center-align"
        style="margin: 2em 0"
      >
        Conoce más sobre nuestros cursos profesionales, relacionados al área
        tecnológica y de telecomunicaciones.
      </h6>
      <div class="gallery-grid container">
        <div
          v-for="(course, index) in courses"
          :key="index"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="card hoverable"
        >
          <a :href="course.link">
            <img
              :src="course.image"
              class="responsive-img"
              loading="lazy"
              :alt="course.title"
            />
          </a>
          <div class="container">
            <span class="new badge red" data-badge-caption="">ONLINE</span>
            <h5 class="card-title">
              <b>{{ course.title }}</b>
            </h5>
            <p class="card-text-body">
              <span>{{ course.description }}</span>
              <a :href="course.link">Leer más</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="center-align"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="500"
    >
      <div class="wrap">
        <a
          href="https://wa.me/c/593980590333"
          id="buttonWHA"
          class="animated bounceOutLeft"
        >
          <span
            >Escríbenos <i class="fab fa-whatsapp" aria-hidden="true"></i
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      courses: [
        {
          title: "Redes GPON",
          image: "components/cursos/images/gpon.png",
          description:
            "Esta capacitación brinda a los participantes los conocimientos y herramientas necesarias...",
          link: "https://academia.nodo.com.ec/redesgpon",
        },
        {
          title: "Certificación Mikrotik MTCNA",
          image: "components/cursos/images/mikrotik.png",
          description:
            "Obtendrás sólidos conocimientos para poder solventar problemas de...",
          link: "https://academia.nodo.com.ec/mikrotik",
        },
        {
          title: "Curso Online De Robótica",
          image: "components/cursos/images/portadaROBO.png",
          description: "Este Curso te permitirá dominar nociones básicas de...",
          link: "/robotica",
        },
        {
          title: "Curso Online De Inglés",
          image: "components/cursos/images/portadaingles.png",
          description:
            "Este curso comprende un programa completo de inglés con el que cada...",
          link: "/ingles",
        },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-grid {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  column-gap: 5%;
  margin-left: 0px;
}

.gallery-grid .card {
  overflow: hidden;
  height: 500px;
}
.card img {
  width: 90%;
  background-color: #d1d8e0;
  box-shadow: 9px 5px 5px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1020px) and (orientation: landscape) {
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    column-gap: 5%;
  }
  .gallery-grid .card {
    height: 600px;
    overflow: hidden;
  }
}

@media screen and (max-width: 1020px) {
  .contenedor {
    display: none;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 3%;
  }
  .gallery-grid .card {
    height: auto;
    overflow: hidden;
  }
  .caption h3 {
    word-break: break-word;
  }
}

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#buttonWHA {
  min-width: 300px;
  min-height: 60px;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #25d366;
  background: linear-gradient(
    90deg,
    rgba(37, 211, 102, 1) 0%,
    rgba(95, 252, 123, 1) 100%
  );
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

#buttonWHA::before {
  content: "";
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #25d366;
  box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}

#buttonWHA:hover,
#buttonWHA:focus {
  color: #313133;
  transform: translateY(-6px);
}

#buttonWHA:hover::before,
#buttonWHA:focus::before {
  opacity: 1;
}

#buttonWHA::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid #25d366;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

#buttonWHA:hover::after,
#buttonWHA:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

.fab {
  font-size: 2rem;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fab:hover {
  opacity: 0.7;
}

.fa-whatsapp {
  color: white;
}
</style>
