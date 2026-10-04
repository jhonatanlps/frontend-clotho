import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import CadastroView from '@/views/CadastroView.vue'
import DashboardView from '@/views/DashboardView.vue'
import EstoqueView from '@/views/EstoqueView.vue'
import ProdutosView from '@/views/ProdutosView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/cadastro', component: CadastroView },
  { path: '/dashboard', component: DashboardView },
  { path: '/estoque', component: EstoqueView },
  { path: '/produtos', component: ProdutosView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
