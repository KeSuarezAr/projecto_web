<template>
  <header>
    <ul class="nav">
      <li class="navlink"><a href="#">Inicio</a></li>
      <li class="navlink"><a href="#sobreNosotros">BBC</a></li>
      <li class="navlink"><a href="#nuestroEquipo"></a></li>
      <li class="navlink"><a href="#cursos">Cursos Profesionales</a></li>
      <li class="navlink"><a href="#contacto">Contacto</a></li>
      <li class="navlink"><a href="login.php">Acceder</a></li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ea1b2e;
  color: #ffff;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}

.navlink {
  list-style: none;
  margin: 0;
  padding-left: 10px;
  margin-left: 10px;
}

.navlink a {
  color: #ffff;
  text-decoration: none;
  font-size: 1.2em;
}

.burger {
  font-size: 1.2em;
  display: none;
}

@media screen and (max-width: 678px) {
  .burger {
    display: block;
  }
  .nav {
    margin: 0;
    background: #343434;
    position: absolute;
    left: -100%;
    top: 70px;
    width: 50%;
    height: calc(100% - 70px);
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    transition: all 400ms;
  }
  .navlink {
    text-align: center;
  }

  .nav-active {
    left: 0;
  }
}
</style>
