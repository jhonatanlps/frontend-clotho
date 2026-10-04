<script setup>
import { reactive } from 'vue'

const form = reactive({
  fullname: '',
  username: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = () => {
  if (form.password !== form.confirmPassword) {
    alert('As senhas não coincidem!')
    return
  }
  console.log('Dados de registo:', form)
  alert(`Conta criada com sucesso para o utilizador: ${form.username}`)
  window.location.href = '/' // Redireciona para a página de login após registro
}
</script>

<template>
  <div class="login">
    <main class="register-card">
      <!-- Logótipo Clotho -->
      <header class="logo-container">
        <img 
            src="../assets/clotho_fundo_claro.png" 
            alt="Logo Clotho"
            class="logo"
        />
      </header>

      <!-- Formulário de Registo -->
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="fullname">Nome completo</label>
          <input
            id="fullname"
            v-model="form.fullname"
            type="text"
            placeholder="Seu usuário"
            required
          />
        </div>

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
            autocomplete="new-password"
            required
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmar senha</label>
          <input
            id="confirmPassword"
            v-model="form.confirmPassword"
            type="password"
            placeholder="********"
            autocomplete="new-password"
            required
          />
        </div>

        <button type="submit" class="submit-button">
          Criar
        </button>
      </form>
    </main>
  </div>
</template>



<style scoped>
/* Contentor Desktop */
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

/* Cartão do Formulário */
.register-card {
  width: 480px;
  background-color: #f7f9fa;
  border-radius: 10px;
  padding: 48px 48px;
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
  margin-bottom: 32px;
  user-select: none;
}

img.logo {
  width: 200px;
  height: auto;
  object-fit: contain;
}

/* Formulário e Inputs */
.register-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.form-group label {
  font-size: 15px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 6px;
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

.form-group input:focus {
  border-color: #ffea00;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(255, 234, 0, 0.25);
}

/* Botão Criar */
.submit-button {
  width: 100%;
  height: 48px;
  margin-top: 12px;
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