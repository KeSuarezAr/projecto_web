<template>
  <div class="section demo" style="overflow: hidden">
    <div class="container-fluid">
      <div class="row center">
        <!-- AQUI VA EL TESTIMONIAL -->
        <div
          class="swiper-testimonial swiper-container-initialized swiper-container-horizontal"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper" :style="transformStyle">
            <!-- Slides -->
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="swiper-slide"
              :style="slideStyle"
            >
              <div class="testimonial">
                <div class="pic">
                  <img
                    :src="testimonial.image"
                    loading="lazy"
                    class="responsive-img"
                    :class="testimonialAnimation"
                    alt=""
                  />
                </div>
                <div
                  class="testimonial-content"
                  :class="testimonialAnimation"
                  :data-aos="testimonial.animation"
                  :data-aos-offset="300"
                  :data-aos-duration="500"
                >
                  <p class="description">
                    {{ testimonial.description }}
                  </p>
                  <br />
                  <h3 class="testimonial-title">
                    {{ testimonial.name }}
                    <small class="post">{{ testimonial.course }}</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <!-- If we need pagination -->
          <div
            class="swiper-pagination-testimonial swiper-pagination-clickable swiper-pagination-bullets"
          >
            <span
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="swiper-pagination-bullet"
              :class="{
                'swiper-pagination-bullet-active': index === activeSlideIndex,
              }"
              tabindex="0"
              role="button"
              :aria-label="'Go to slide ' + (index + 1)"
            ></span>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeSlideIndex: 0,
      testimonials: [
        {
          image: "assets/testimonial/images/josedavid.jpg",
          animation: "slide-right",
          description:
            "Mi mayor sueño es aportar con mis ideas para crear y producir proyectos que hagan más fácil la vida de las personas.",
          name: "José David",
          course: "Curso de Robótica",
        },
        {
          image: "assets/testimonial/images/stewart.jpg",
          animation: "slide-right",
          description:
            "Fue una experiencia única porque aprendí muchas cosas nuevas antes no había estudiado inglés con una profesora que me explique de una manera divertida.",
          name: "Stewart Troya",
          course: "Curso de Inglés",
        },
        {
          image: "assets/testimonial/images/jessica.jpeg",
          animation: "slide-right",
          description:
            "Los conocimientos teóricos y prácticos fueron comprendidos con gran sencillez, me atrevo a decir que se debe a la experiencia y el profesionalismo por parte de las personas que impartieron el curso. Debo resaltar que siempre trataban de resolver cualquier inquietud que pudiera surgir. Gracias a este curso pude complementar mi formación teórica con conocimientos prácticos, desde la seguridad que se debe tener en campo, y manipular los diferentes materiales, equipos y herramientas que se utilizan en fibra óptica.",
          name: "Jéssica Córdova",
          course: "Curso de GPON",
        },
      ],
    };
  },
  computed: {
    transformStyle() {
      return `transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;`;
    },
    slideStyle() {
      return `width: 1370px; margin-right: 30px;`;
    },
    testimonialAnimation() {
      return "aos-init aos-animate";
    },
  },
  methods: {},
};
</script>

<style>
.demo {
  background: linear-gradient(to right, #fe9040, #cf5d81);
}

.testimonial {
  margin: 5% 15px 0% 15px;
}

.testimonial .pic {
  width: 40%;
  float: left;
  margin-right: 15px;
  position: relative;
}

.testimonial .pic:after {
  content: "";
  display: block;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 5%;
  border: 2px solid #fff;
  clip-path: polygon(
    0 0%,
    0% 0,
    70% 0,
    100% 5%,
    100% 100%,
    90% 100%,
    0% 100%,
    0% 90%,
    0% 10%
  );
}

.testimonial .pic img {
  width: 100%;
  height: auto;
}

.testimonial .testimonial-content {
  padding: 0%;
  display: table;
}

.testimonial .description {
  font-size: 1.4em;
  color: #fff;
  line-height: 2rem;
  margin-left: 80px;
  padding-top: 5%;
  margin-right: 80px;
  text-align: justify;
}

.swiper-container {
  width: 100%;
  height: 100%;
  margin: 1em;
}

.swiper-slide {
  text-align: center;
  font-size: 1rem;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-img:hover {
  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.testimonial .description:before {
  content: "\f10d\A";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 62px;
  color: #f0f0f0;
  margin: 0 10px;
  margin-left: -40px;
  white-space: pre;
}

.testimonial .description::after {
  content: "\A\f10e";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 62px;
  color: #f0f0f0;
  margin: 0 10px;
  white-space: pre;
  float: right;
}

.testimonial .testimonial-title {
  font-size: 24px;
  color: #333;
  text-transform: capitalize;
  margin: 10px 50px 0 0;
  float: right;
}

.testimonial .post {
  font-size: 20px;
  color: #fff;
  display: block;
  margin-top: 10px;
}

.swiper-slide .card img {
  max-width: 525px;
  max-height: 265px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media only screen and (max-width: 480px) {
  .testimonial .description:before {
    font-size: 40px;
    color: #f0f0f0;
    margin: 0 10px;
  }
  .testimonial .description::after {
    font-size: 40px;
    margin: 0 10px;
  }
  .testimonial {
    margin: 0 10px;
  }
  .testimonial .description {
    font-size: 20px;
    color: #fff;
    line-height: 26px;
    margin-right: 20px;
    margin-left: 30px;
    text-align: left;
  }
  .testimonial .pic {
    float: none;
    width: 50%;
    margin: 0 auto;
  }
  .swiper-slide .card img {
    max-width: 200px;
  }
  .swiper-slide .card h5 {
    font-size: 1rem;
  }
  .swiper-slide .card p {
    font-size: 0.8rem;
  }
  .testimonial .testimonial-title {
    font-size: 24px;
    color: #333;
    text-transform: capitalize;
    margin: 10px 10px 0 0;
    float: right;
  }
}
</style>
