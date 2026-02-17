import { Routes } from '@angular/router';
import { InsertarColono } from './components/colonos/insertar/insertar';
import { ListarColono } from './components/colonos/listar/listar';
import { Home } from './components/shared/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'colonos/editar/:id', component: InsertarColono },

  {
    path: 'colonos/insertar',
    component: InsertarColono,
  },

  { path: 'colonos', component: ListarColono },
];
