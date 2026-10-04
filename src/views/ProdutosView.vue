<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  console.log('Submissão do formulário:', form)
  alert(`A iniciar sessão para o utilizador: ${form.username}`)
}

const goToRegister = () => {
  alert('A reencaminhar para a página de registo...')
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logótipo Clotho -->
      <div class="logo-wrapper">
        <div class="logo-box">
          <span class="logo-c">C</span>
        </div>
        <span class="logo-text">lotho</span>
      </div>

      <!-- Formulário de Autenticação -->
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Usuário</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            placeholder="Seu usuário"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Senha</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <div class="link-wrapper">
          <a href="#" @click.prevent="goToRegister" class="register-link">
            Não tem conta? Crie agora
          </a>
        </div>

        <button type="submit" class="btn-submit">
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Contentor principal escuro */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  margin: 0;
  padding: 16px;
}

/* Cartão do formulário */
.login-card {
  background-color: #f7f9fa;
  width: 100%;
  max-width: 400px;
  padding: 40px 36px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logótipo */
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
}

.logo-box {
  background-color: #8b0000;
  border: 2px solid #4a0000;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 2px;
}

.logo-c {
  color: #ffea00;
  font-weight: 900;
  font-size: 30px;
  font-family: Arial, sans-serif;
  line-height: 1;
}

.logo-text {
  font-size: 42px;
  font-weight: 800;
  color: #111111;
  letter-spacing: -1px;
}

/* Formulário e Inputs */
.login-form {
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 6px;
}

.form-group input {
  padding: 10px 12px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #eeeeee;
  font-size: 14px;
  color: #333333;
  outline: none;
  transition: border-color 0.2s ease;
}

.form-group input::placeholder {
  color: #a0a0a0;
}

.form-group input:focus {
  border-color: #ffd700;
  background-color: #ffffff;
}

/* Hiperligação inferior */
.link-wrapper {
  margin-top: 4px;
  margin-bottom: 24px;
}

.register-link {
  font-size: 12px;
  color: #cccc00;
  text-decoration: underline;
  transition: color 0.2s;
}

.register-link:hover {
  color: #aaaa00;
}

/* Botão de Submissão */
.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #ffd700;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.btn-submit:hover {
  background-color: #f0ca00;
}

.btn-submit:active {
  transform: scale(0.99);
}
</style>