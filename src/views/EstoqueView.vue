<script setup>
import { ref, computed } from 'vue'
import { LayoutGrid, Shirt, Package, LogOut } from '@lucide/vue'

// Filtros reativos
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')

// Dados da lista de estoque
const inventoryItems = ref([
  {
    name: 'Camiseta básica M',
    category: 'Camisetas',
    color: 'Pretas',
    size: 'Tam. M',
    price: '39,90',
    quantity: 2,
    status: 'baixo',
    statusText: 'Estoque baixo',
    minStock: 10,
    code: '001'
  },
  {
    name: 'Calça jeans',
    category: 'Calças',
    color: 'Azul',
    size: 'Tam. 40',
    price: '119,90',
    quantity: 18,
    status: 'disponivel',
    statusText: 'Disponível',
    minStock: 6,
    code: '002'
  },
  {
    name: 'Vestido Floral',
    category: 'Vestidos',
    color: 'Rosa',
    size: 'Tam. M',
    price: '89,90',
    quantity: 0,
    status: 'esgotado',
    statusText: 'Esgotado',
    minStock: 4,
    code: '003'
  },
  {
    name: 'Blusa canelada',
    category: 'Blusas',
    color: 'Branca',
    size: 'Tam. G',
    price: '49,90',
    quantity: 14,
    status: 'disponivel',
    statusText: 'Disponível',
    minStock: 5,
    code: '004'
  }
])

// Classe dinâmica para a badge de status
const getBadgeClass = (status) => {
  switch (status) {
    case 'baixo':
      return 'badge-warning'
    case 'disponivel':
      return 'badge-success'
    case 'esgotado':
      return 'badge-danger'
    default:
      return ''
  }
}

// Filtro computado em tempo real
const filteredItems = computed(() => {
  return inventoryItems.value.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.color.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.size.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      !selectedCategory.value || item.category === selectedCategory.value

    const matchesStatus =
      !selectedStatus.value || item.status === selectedStatus.value

    return matchesSearch && matchesCategory && matchesStatus
  })
})
</script>

<template>
  <div class="inventory-layout">
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
          <a href="/produtos" class="nav-item">
            <Shirt :size="18" class="nav-icon" />
            <span>Produtos</span>
          </a>
          <a href="/estoque" class="nav-item active">
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
        <h1 class="page-title">Estoque</h1>
        <p class="page-subtitle">Estoque completo da loja</p>
      </header>

      <!-- Secção de Filtros -->
      <section class="card filters-card">
        <h2 class="card-title">Filtros</h2>

        <div class="filters-form">
          <!-- Campo de Busca -->
          <div class="input-wrapper">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Busca por nome, cor ou tamanho"
              class="filter-input"
            />
          </div>

          <!-- Selects de Categoria e Status -->
          <div class="selects-row">
            <div class="select-wrapper">
              <select v-model="selectedCategory" class="filter-select">
                <option value="">Todas as categorias</option>
                <option value="Camisetas">Camisetas</option>
                <option value="Calças">Calças</option>
                <option value="Vestidos">Vestidos</option>
                <option value="Blusas">Blusas</option>
              </select>
            </div>

            <div class="select-wrapper">
              <select v-model="selectedStatus" class="filter-select">
                <option value="">Todos os status</option>
                <option value="disponivel">Disponível</option>
                <option value="baixo">Estoque baixo</option>
                <option value="esgotado">Esgotado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!-- Lista de Itens do Estoque -->
      <section class="inventory-list">
        <div
          v-for="item in filteredItems"
          :key="item.code"
          class="card item-card"
        >
          <div class="item-main">
            <!-- Miniatura do Produto -->
            <div class="item-thumbnail">
              <Shirt :size="28" class="thumbnail-icon" />
            </div>

            <!-- Detalhes do Produto -->
            <div class="item-details">
              <h3 class="item-title">{{ item.name }}</h3>
              <p class="item-specs">
                {{ item.category }} - {{ item.color }} - {{ item.size }}
              </p>
              <p class="item-price">R$ {{ item.price }}</p>
            </div>

            <!-- Quantidade e Badge de Estado -->
            <div class="item-status">
              <span class="stock-qty">{{ item.quantity }} un.</span>
              <span class="badge" :class="getBadgeClass(item.status)">
                {{ item.statusText }}
              </span>
            </div>
          </div>

          <!-- Rodapé do Card -->
          <div class="item-footer">
            <span class="min-stock">Estoque mínimo: {{ item.minStock }} un.</span>
            <span class="item-code">Código: {{ item.code }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Reset e Estrutura Principal Desktop */
.inventory-layout {
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

/* Área Conteúdo */
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

/* Cartão Genérico */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Cartão de Filtros */
.filters-card {
  padding: 20px 24px;
}

.card-title {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 14px 0;
  color: #111111;
}

.filters-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-wrapper {
  width: 100%;
}

.filter-input {
  width: 100%;
  height: 38px;
  padding: 0 14px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  color: #333333;
  outline: none;
  box-sizing: border-box;
}

.filter-input::placeholder {
  color: #a1a1aa;
}

.selects-row {
  display: flex;
  gap: 16px;
}

.select-wrapper {
  flex: 1;
}

.filter-select {
  width: 100%;
  height: 38px;
  padding: 0 14px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  color: #666666;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666666' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
}

/* Lista de Estoque */
.inventory-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item-card {
  padding: 20px 24px 14px 24px;
  display: flex;
  flex-direction: column;
}

.item-main {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Miniatura */
.item-thumbnail {
  width: 52px;
  height: 52px;
  background-color: #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  flex-shrink: 0;
}

/* Detalhes do Produto */
.item-details {
  margin-left: 16px;
  flex: 1;
}

.item-title {
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  color: #111111;
}

.item-specs {
  font-size: 12px;
  color: #666666;
  margin: 3px 0;
}

.item-price {
  font-size: 14px;
  font-weight: 700;
  color: #111111;
  margin: 0;
}

/* Status e Quantidade */
.item-status {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.stock-qty {
  font-size: 16px;
  font-weight: 700;
  color: #111111;
}

/* Badges */
.badge {
  padding: 4px 14px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.badge-warning {
  background-color: #ffea00;
  color: #333333;
}

.badge-success {
  background-color: #4ade80;
  color: #ffffff;
}

.badge-danger {
  background-color: #f87171;
  color: #ffffff;
}

/* Rodapé do Card do Produto */
.item-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
  color: #333333;
}

.min-stock, .item-code {
  font-weight: 500;
}
</style>