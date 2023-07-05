<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Inicio de Sesión</span>
            <div class="row">
              <div class="col s6">
                <form @submit.prevent="submitForm">
                  <div class="input-field">
                    <input type="text" v-model="username" required />
                    <label>Nombre de usuario</label>
                  </div>
                  <div class="input-field">
                    <input type="password" v-model="password" required />
                    <label>Contraseña</label>
                    <a style="font-size: 1rem" href="#"
                      >¿Olvidaste tu contraseña?</a
                    >
                  </div>
                  <button class="btn waves-effect waves-light" type="submit">
                    Iniciar Sesión
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Username:", this.username);
      console.log("Password:", this.password);
    },
  },
});
</script>

<style lang="scss" scoped>
body,
html {
  height: 100%;
  background-color: #ead1dc;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.container img {
  padding-top: 20px;
}

.card {
  margin-right: 400px;
  width: 400px;
}

.card-content {
  padding: 20px;
}
</style>
