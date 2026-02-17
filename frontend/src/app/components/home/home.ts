import { Component } from '@angular/core';
import { ListarColono } from '../colonos/listar/listar';

@Component({
  selector: 'app-home',
  imports: [ListarColono],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeColono {}
