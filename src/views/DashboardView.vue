<script setup>
import { ref } from 'vue'
import {
  LayoutGrid,
  Shirt,
  Package,
  LogOut,
  Box,
  TrendingUp,
  AlertTriangle,
  Clock
} from '@lucide/vue'

const topProducts = ref([
  { name: 'Camisetas', percentage: 70 },
  { name: 'Calças', percentage: 50 },
  { name: 'Vestido', percentage: 38 },
  { name: 'Blusas', percentage: 24 },
  { name: 'Saias', percentage: 14 }
])
</script>

<template>
  <div class="dashboard-layout">
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
          <a href="#" class="nav-item active">
            <LayoutGrid :size="18" class="nav-icon" />
            <span>Dashboard</span>
          </a>
          <a href="#" class="nav-item">
            <Shirt :size="18" class="nav-icon" />
            <span>Produtos</span>
          </a>
          <a href="#" class="nav-item">
            <Package :size="18" class="nav-icon" />
            <span>Estoque</span>
          </a>
        </nav>
      </div>

      <!-- Botão Sair no Rodapé da Sidebar -->
      <div class="sidebar-footer">
        <button class="logout-button">
          <LogOut :size="18" class="nav-icon" />
          <span>Sair</span>
        </button>
      </div>
    </aside>

    <!-- Área de Conteúdo Principal -->
    <main class="main-content">
      <!-- Cabeçalho -->
      <header class="page-header">
        <h1 class="page-title">Dashboard</h1>
        <p class="page-subtitle">Visão geral da loja</p>
      </header>

      <!-- Cartões de Métricas (KPIs) -->
      <section class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-header">
            <Box :size="18" class="kpi-icon yellow-icon" />
          </div>
          <span class="kpi-label">Unidades em estoque</span>
          <div class="kpi-value">1.283</div>
          <span class="kpi-subtext">Total de peças disponíveis</span>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <TrendingUp :size="18" class="kpi-icon yellow-icon" />
          </div>
          <span class="kpi-label">Peças vendidas</span>
          <div class="kpi-value">186</div>
          <span class="kpi-subtext">No mês</span>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <AlertTriangle :size="18" class="kpi-icon red-icon" />
          </div>
          <span class="kpi-label">Estoque baixo</span>
          <div class="kpi-value">12</div>
          <span class="kpi-subtext">Produtos para verificar</span>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <Clock :size="18" class="kpi-icon red-icon" />
          </div>
          <span class="kpi-label">Produtos parados</span>
          <div class="kpi-value">8</div>
          <span class="kpi-subtext">Sem saídas há 60 dias</span>
        </div>
      </section>

      <!-- Gráfico Principal: Produtos Mais Vendidos -->
      <section class="card chart-card">
        <div class="card-header">
          <h2 class="card-title">Produtos Mais Vendidos</h2>
          <p class="card-subtitle">Unidades mais vendidas do mês</p>
        </div>

        <div class="bar-chart-container">
          <div class="y-axis">
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
          <div class="chart-content">
            <div class="grid-lines">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="bars-flex">
              <div
                v-for="item in topProducts"
                :key="item.name"
                class="bar-column"
              >
                <div class="bar-track">
                  <div
                    class="bar-fill"
                    :style="{ height: `${item.percentage}%` }"
                  ></div>
                </div>
                <span class="x-label">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="chart-legend">
          <span class="legend-box red-box"></span>
          <span class="legend-label">Vendas</span>
        </div>
      </section>

      <!-- Linha de Gráficos Secundários -->
      <div class="charts-row">
        <!-- Evolução das Vendas (Linha) -->
        <section class="card half-card">
          <div class="card-header">
            <h2 class="card-title">Evolução das vendas</h2>
            <p class="card-subtitle">Quantidade de peças vendidas por mês</p>
          </div>

          <div class="line-chart-container">
            <div class="y-axis">
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            <div class="chart-content">
              <div class="grid-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <svg class="line-svg" viewBox="0 0 300 100" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#ffea00"
                  stroke-width="2.5"
                  points="10,65 65,25 120,32 175,60 230,55 285,25"
                />
                <circle cx="10" cy="65" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
                <circle cx="65" cy="25" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
                <circle cx="120" cy="32" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
                <circle cx="175" cy="60" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
                <circle cx="230" cy="55" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
                <circle cx="285" cy="25" r="4" fill="#ffffff" stroke="#ffea00" stroke-width="2" />
              </svg>
              <div class="x-axis-row">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          <div class="chart-legend">
            <span class="legend-line-symbol"></span>
            <span class="legend-label">Vendas</span>
          </div>
        </section>

        <!-- Evolução das Vendas (Pizza / Donut) -->
        <section class="card half-card">
            <div class="card-header">
                <h2 class="card-title">Evolução das vendas</h2>
                <p class="card-subtitle">Quantidade de peças vendidas por mês</p>
            </div>

            <div class="pie-chart-container">
                <!-- Círculo com conic-gradient em CSS puro -->
                <div class="pie-chart"></div>
            </div>

            <div class="pie-legend">
                <div class="pie-legend-item"><span class="dot purple"></span> Blusas</div>
                <div class="pie-legend-item"><span class="dot teal"></span> Calças</div>
                <div class="pie-legend-item"><span class="dot coral"></span> Vestidos</div>
                <div class="pie-legend-item"><span class="dot light-blue"></span> Camisetas</div>
                <div class="pie-legend-item"><span class="dot blue"></span> Saias</div>
            </div>
        </section>
      </div>

      <!-- Tabela de Produtos para Reposição -->
      <section class="card replacement-card">
        <h2 class="card-title">Atenção: produtos para reposição</h2>

        <div class="replacement-list">
          <div class="replacement-item">
            <div class="item-info">
              <h3 class="item-title">Camiseta básica M</h3>
              <p class="item-subtitle">Estoque atual: 2 - Mínimo: 10</p>
            </div>
            <span class="badge badge-critical">Crítico</span>
          </div>

          <div class="replacement-item">
            <div class="item-info">
              <h3 class="item-title">Calça jeans 40</h3>
              <p class="item-subtitle">Estoque atual: 4 - Mínimo: 6</p>
            </div>
            <span class="badge badge-low">Baixo</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Reset local e Layout Desktop */
.dashboard-layout {
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

/* Cabeçalho da Página */
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

/* KPI Cards Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.kpi-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.kpi-header {
  margin-bottom: 6px;
}

.kpi-icon.yellow-icon {
  color: #eab308;
}

.kpi-icon.red-icon {
  color: #ef4444;
}

.kpi-label {
  font-size: 10px;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.kpi-value {
  font-size: 22px;
  font-weight: 800;
  color: #111111;
  line-height: 1.2;
}

.kpi-subtext {
  font-size: 10px;
  color: #888888;
  margin-top: 2px;
}

/* Cartões Gerais */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.card-title {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #111111;
}

.card-subtitle {
  font-size: 10px;
  color: #999999;
  margin: 2px 0 0 0;
}

/* Gráfico de Barras */
.bar-chart-container {
  display: flex;
  margin-top: 20px;
  height: 140px;
}

.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 11px;
  color: #666666;
  padding-right: 12px;
}

.chart-content {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
}

.grid-lines .line {
  border-top: 1px dashed #e5e7eb;
  width: 100%;
}

.bars-flex {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.bar-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 100%;
  justify-content: flex-end;
}

.bar-track {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.bar-fill {
  width: 100%;
  background-color: #a83232;
  border-radius: 2px 2px 0 0;
  transition: height 0.3s ease;
}

.x-label {
  font-size: 11px;
  color: #555555;
  margin-top: 8px;
}

.chart-legend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 16px;
}

.legend-box.red-box {
  width: 12px;
  height: 12px;
  background-color: #a83232;
}

.legend-label {
  font-size: 12px;
  color: #444444;
}

/* Gráficos Lado a Lado */
.charts-row {
  display: flex;
  gap: 16px;
}

.half-card {
  flex: 1;
}

/* Gráfico de Linha */
.line-chart-container {
  display: flex;
  margin-top: 20px;
  height: 110px;
}

.line-svg {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 80px;
}

.x-axis-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #555555;
  margin-top: 4px;
}

.legend-line-symbol {
  width: 16px;
  height: 2px;
  background-color: #ffea00;
  position: relative;
}

.legend-line-symbol::after {
  content: '';
  position: absolute;
  left: 4px;
  top: -3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1.5px solid #ffea00;
}

/* Gráfico de Pizza */
.pie-chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  height: 120px;
}

/* Gráfico em CSS Puro (substitui o SVG que ficava preto) */
.pie-chart {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: conic-gradient(
    #6366f1 0deg 110deg,
    #10b981 110deg 180deg,
    #f87171 180deg 240deg,
    #38bdf8 240deg 300deg,
    #3b82f6 300deg 360deg
  );
}

.pie-wrapper {
  width: 110px;
  height: 110px;
}

.pie-legend {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.pie-legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #555555;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.purple { background-color: #6366f1; }
.dot.teal { background-color: #10b981; }
.dot.coral { background-color: #f87171; }
.dot.light-blue { background-color: #38bdf8; }
.dot.blue { background-color: #3b82f6; }

/* Tabela de Reposição */
.replacement-list {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
}

.replacement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.replacement-item:last-child {
  border-bottom: none;
}

.item-title {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  color: #222222;
}

.item-subtitle {
  font-size: 10px;
  color: #777777;
  margin: 2px 0 0 0;
}

/* Badges de Estado */
.badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 700;
}

.badge-critical {
  background-color: #ff4d4d;
  color: #ffffff;
}

.badge-low {
  background-color: #ffeb00;
  color: #333333;
}
</style>