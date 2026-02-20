import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { InsertarColono } from './components/colonos/insertar/insertar';
import { ListarColono } from './components/colonos/listar/listar';
import { Footer } from './components/shared/footer/footer';
import { Header } from './components/shared/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ListarColono, InsertarColono, RouterModule, Header, Footer],
  templateUrl: 'app.html',
})
export class AppComponent {}
