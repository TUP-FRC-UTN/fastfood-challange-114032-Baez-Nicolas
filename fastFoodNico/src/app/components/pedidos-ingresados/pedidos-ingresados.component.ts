import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { IPedidosService } from '../../services/ipedidos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos-ingresados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos-ingresados.component.html',
  styleUrl: './pedidos-ingresados.component.css'
})
export class PedidosIngresadosComponent implements OnInit{

  oListaPedidos: Pedido[] = [];

  constructor(public pedidosService: IPedidosService) {}

  ngOnInit(): void {
    this.oListaPedidos = this.pedidosService.getPedidos();
  }
}
