<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  // Lógica de autenticação desktop aqui
  const href = '/dashboard' // Redireciona para o dashboard após login
  window.location.href = href
}

</script>

<template>
  <div class="login">
    <main class="login-card">
      <!-- Cabeçalho / Logo Clotho -->
      <header class="logo-container">
        <img 
            src="../assets/clotho_fundo_claro.png" 
            alt="Logo Clotho"
            class="logo"
        />
      </header>

      <!-- Formulário de Login -->
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Usuário</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            placeholder="Seu usuário"
            autocomplete="username"
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
            autocomplete="current-password"
            required
          />
        </div>

        <div class="link-container">
          <a href="/cadastro" class="create-account-link">
            Não tem conta? Crie agora
          </a>
        </div>

        <button type="submit" class="submit-button">
          Entrar
        </button>
      </form>
    </main>
  </div>
</template>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1b;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
}

.login-card {
  width: 480px;
  background-color: #f7f9fa;
  border-radius: 10px;
  padding: 56px 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Logótipo Clotho */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
  user-select: none;
}

img.logo {
  width: 200px;
  height: auto;
  object-fit: contain;
}

/* Formulário */
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.form-group label {
  font-size: 15px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #d5d8dc;
  border-radius: 5px;
  background-color: #efefef;
  font-size: 14px;
  color: #222222;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.form-group input::placeholder {
  color: #a0a0a0;
}

/* Efeito de foco no desktop */
.form-group input:focus {
  border-color: #ffea00;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(255, 234, 0, 0.25);
}

/* Link Amarelo */
.link-container {
  margin-top: 2px;
  margin-bottom: 28px;
}

.create-account-link {
  font-size: 12px;
  color: #d2c800;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.15s ease;
}

.create-account-link:hover {
  color: #b5ac00;
}

/* Botão Amarelo de Login */
.submit-button {
  width: 100%;
  height: 48px;
  background-color: #ffea00;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.submit-button:hover {
  background-color: #f2de00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.submit-button:active {
  transform: translateY(1px);
}
</style>