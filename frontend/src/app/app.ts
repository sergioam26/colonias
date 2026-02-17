import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { InsertarColono } from './components/colonos/insertar/insertar';
import { ListarColono } from './components/colonos/listar/listar';
import { Header } from './components/shared/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ListarColono, InsertarColono, RouterModule, Header],
  templateUrl: 'app.html',
})
export class AppComponent {}
