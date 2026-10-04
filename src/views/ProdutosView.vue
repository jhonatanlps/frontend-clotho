<script setup>
import { reactive, ref } from 'vue'
import {
  LayoutGrid,
  Shirt,
  Package,
  LogOut,
  Pencil,
  Trash2
} from '@lucide/vue'

// Estado do Formulário
const initialFormState = {
  name: '',
  category: '',
  brand: '',
  supplier: '',
  description: '',
  color: '',
  size: '',
  material: '',
  audience: '',
  collection: '',
  costPrice: '',
  salePrice: '',
  initialQty: '',
  minStock: ''
}

const form = reactive({ ...initialFormState })

// Lista de Produtos
const products = ref([
  {
    id: 1,
    name: 'Camiseta básica M',
    currentStock: 2,
    minStock: 10
  },
  {
    id: 2,
    name: 'Calça jeans 40',
    currentStock: 4,
    minStock: 6
  }
])

// Ações do Formulário
const resetForm = () => {
  Object.assign(form, initialFormState)
}

const handleRegister = () => {
  console.log('Produto registado:', form)
  alert(`Produto "${form.name}" cadastrado com sucesso!`)
  
  // Adiciona item à lista local
  products.value.push({
    id: Date.now(),
    name: form.name,
    currentStock: Number(form.initialQty) || 0,
    minStock: Number(form.minStock) || 0
  })

  resetForm()
}

// Ações dos Produtos da Lista
const editProduct = (product) => {
  console.log('Editar produto:', product)
}

const deleteProduct = (id) => {
  products.value = products.value.filter((p) => p.id !== id)
}
</script>

<template>
  <div class="products-layout">
    <!-- Barra Lateral (Sidebar) -->
    <aside class="sidebar">
      <div>
        <!-- Logótipo Clotho -->
        <div class="logo-container">
            <img 
                src="../assets/clotho_fundo_escuro.png" 
                alt="Logo Clotho"
                class="logo"
            />
        </div>

        <!-- Menu de Navegação -->
        <nav class="sidebar-nav">
          <a href="/dashboard" class="nav-item">
            <LayoutGrid :size="18" class="nav-icon" />
            <span>Dashboard</span>
          </a>
          <a href="/produtos" class="nav-item active">
            <Shirt :size="18" class="nav-icon" />
            <span>Produtos</span>
          </a>
          <a href="/estoque" class="nav-item">
            <Package :size="18" class="nav-icon" />
            <span>Estoque</span>
          </a>
        </nav>
      </div>

      <!-- Botão Sair no Rodapé -->
      <div class="sidebar-footer">
        <a href="/" class="logout-button">
          <LogOut :size="18" class="nav-icon" />
          <span>Sair</span>
        </a>
      </div>
    </aside>

    <!-- Área de Conteúdo Principal -->
    <main class="main-content">
      <!-- Cabeçalho da Página -->
      <header class="page-header">
        <h1 class="page-title">Produtos</h1>
        <p class="page-subtitle">Visão geral da loja</p>
      </header>

      <!-- Cartão do Formulário de Cadastro -->
      <section class="card form-card">
        <h2 class="card-title">Cadastro de produto</h2>

        <form @submit.prevent="handleRegister" class="product-form">
          <!-- Nome do produto -->
          <div class="form-group full-width">
            <label for="name">Nome do produto *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Ex.: Camiseta básica de algodão"
              required
            />
          </div>

          <!-- Categoria e Marca -->
          <div class="form-row">
            <div class="form-group">
              <label for="category">Categoria *</label>
              <select id="category" v-model="form.category" required>
                <option value="" disabled selected>Selecione</option>
                <option value="camisetas">Camisetas</option>
                <option value="calcas">Calças</option>
                <option value="vestidos">Vestidos</option>
                <option value="blusas">Blusas</option>
              </select>
            </div>

            <div class="form-group">
              <label for="brand">Marca</label>
              <input
                id="brand"
                v-model="form.brand"
                type="text"
                placeholder="Nome da marca"
              />
            </div>
          </div>

          <!-- Fornecedor -->
          <div class="form-row">
            <div class="form-group">
              <label for="supplier">Fornecedor</label>
              <input
                id="supplier"
                v-model="form.supplier"
                type="text"
                placeholder="Nome do fornecedor"
              />
            </div>
            <div class="form-group empty-group"></div>
          </div>

          <!-- Descrição -->
          <div class="form-group full-width">
            <label for="description">Descrição</label>
            <textarea
              id="description"
              v-model="form.description"
              rows="4"
              placeholder="Descreva o modelo, o caimento e outros detalhes..."
            ></textarea>
          </div>

          <!-- Cor e Tamanho -->
          <div class="form-row">
            <div class="form-group">
              <label for="color">Cor</label>
              <input
                id="color"
                v-model="form.color"
                type="text"
                placeholder="Ex.: Preto"
              />
            </div>

            <div class="form-group">
              <label for="size">Tamanho</label>
              <select id="size" v-model="form.size">
                <option value="" disabled selected>Selecione</option>
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
            </div>
          </div>

          <!-- Material e Público -->
          <div class="form-row">
            <div class="form-group">
              <label for="material">Material / Tecido</label>
              <input
                id="material"
                v-model="form.material"
                type="text"
                placeholder="Ex.: 100% algodão"
              />
            </div>

            <div class="form-group">
              <label for="audience">Público</label>
              <select id="audience" v-model="form.audience">
                <option value="" disabled selected>Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="unissex">Unissex</option>
                <option value="infantil">Infantil</option>
              </select>
            </div>
          </div>

          <!-- Coleção / Estação -->
          <div class="form-group full-width">
            <label for="collection">Coleção / Estação</label>
            <select id="collection" v-model="form.collection">
              <option value="" disabled selected>Selecione uma opção</option>
              <option value="verao">Verão</option>
              <option value="inverno">Inverno</option>
              <option value="outono-inverno">Outono / Inverno</option>
              <option value="primavera-verao">Primavera / Verão</option>
            </select>
          </div>

          <!-- Preço de custo e Preço de venda -->
          <div class="form-row">
            <div class="form-group">
              <label for="costPrice">Preço de custo (R$) *</label>
              <input
                id="costPrice"
                v-model="form.costPrice"
                type="text"
                placeholder="0,00"
                required
              />
            </div>

            <div class="form-group">
              <label for="salePrice">Preço de venda (R$) *</label>
              <input
                id="salePrice"
                v-model="form.salePrice"
                type="text"
                placeholder="0,00"
                required
              />
            </div>
          </div>

          <!-- Quantidade inicial e Estoque mínimo -->
          <div class="form-row">
            <div class="form-group">
              <label for="initialQty">Quantidade inicial (un.) *</label>
              <input
                id="initialQty"
                v-model="form.initialQty"
                type="number"
                placeholder="Ex.: 20"
                required
              />
            </div>

            <div class="form-group">
              <label for="minStock">Estoque mínimo (un.) *</label>
              <input
                id="minStock"
                v-model="form.minStock"
                type="number"
                placeholder="Ex.: 5"
                required
              />
            </div>
          </div>

          <!-- Botões do Formulário -->
          <div class="buttons-row">
            <button type="button" class="btn-clear" @click="resetForm">
              Limpar formulário
            </button>
            <button type="submit" class="btn-submit">
              Cadastrar produto
            </button>
          </div>
        </form>
      </section>

      <!-- Cartão da Lista de Produtos -->
      <section class="card products-list-card">
        <h2 class="card-title">Produtos</h2>

        <div class="products-list">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-item"
          >
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-stock">
                Estoque atual: {{ product.currentStock }} - Mínimo: {{ product.minStock }}
              </p>
            </div>

            <div class="product-actions">
              <button class="action-btn edit-btn" title="Editar" @click="editProduct(product)">
                <Pencil :size="18" />
              </button>
              <button class="action-btn delete-btn" title="Excluir" @click="deleteProduct(product.id)">
                <Trash2 :size="18" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Reset e Layout Principal Desktop */
.products-layout {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
  box-sizing: border-box;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px 24px 16px;
  flex-shrink: 0;
}

/* Logótipo Clotho */
.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  padding-left: 8px;
  user-select: none;
}

img.logo {
  width: 160px;
  height: auto;
  object-fit: contain;
}

/* Navegação Sidebar */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 6px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.15s ease;
}

.nav-item.active {
  background-color: #ffea00;
  color: #000000;
}

.nav-item:not(.active):hover {
  background-color: #262626;
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 14px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.15s ease;
  text-decoration: none;
}

.logout-button:hover {
  background-color: #262626;
}

/* Conteúdo Principal */
.main-content {
  flex: 1;
  padding: 32px 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Cabeçalho */
.page-title {
  font-size: 26px;
  font-weight: 800;
  margin: 0;
  color: #000000;
}

.page-subtitle {
  font-size: 12px;
  color: #888888;
  margin: 2px 0 0 0;
}

/* Estilo Base para Cartões */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.card-title {
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 18px 0;
  color: #111111;
}

/* Estilos do Formulário */
.product-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group.empty-group {
  visibility: hidden;
}

.form-group.full-width {
  width: 100%;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0 12px;
  height: 38px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  color: #333333;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

.form-group textarea {
  height: auto;
  padding: 10px 12px;
  resize: vertical;
  font-family: inherit;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #a1a1aa;
}

.form-group select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666666' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #ffea00;
  background-color: #ffffff;
}

/* Linha de Botões */
.buttons-row {
  display: flex;
  gap: 16px;
  margin-top: 12px;
}

.btn-clear,
.btn-submit {
  flex: 1;
  height: 44px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s ease, opacity 0.15s ease;
}

.btn-clear {
  background-color: #e50000;
  color: #ffffff;
}

.btn-submit {
  background-color: #ffea00;
  color: #ffffff;
}

.btn-clear:hover,
.btn-submit:hover {
  opacity: 0.9;
}

.btn-clear:active,
.btn-submit:active {
  transform: translateY(1px);
}

/* Lista de Produtos (Cartão Inferior) */
.products-list-card {
  padding: 20px 24px;
}

.products-list {
  display: flex;
  flex-direction: column;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.product-item:last-child {
  border-bottom: none;
}

.product-name {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #111111;
}

.product-stock {
  font-size: 11px;
  color: #666666;
  margin: 3px 0 0 0;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.15s ease;
}

.edit-btn {
  color: #111111;
}

.delete-btn {
  color: #ef4444;
}

.action-btn:hover {
  background-color: #f3f4f6;
}
</style>