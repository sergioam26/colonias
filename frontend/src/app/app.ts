import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InsertarColono } from './components/colonos/insertar/insertar';
import { ListarColono } from './components/colonos/listar/listar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, ListarColono, InsertarColono],
  templateUrl: `app.html`,
})
export class AppComponent {}
