import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { IPedidosService } from '../../services/ipedidos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos-pendientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos-pendientes.component.html',
  styleUrl: './pedidos-pendientes.component.css'
})
export class PedidosPendientesComponent  implements OnInit{

  oPedidosPendientes: Pedido[] = [];
  lBandera: boolean = false;
  oPedidosCocinados: Pedido[] = [];

  constructor(public pedidosService: IPedidosService) {}

  ngOnInit(): void {
    this.oPedidosPendientes = this.pedidosService.getPedidosPendientes();
    this.oPedidosCocinados = this.pedidosService.getPedidosCocinados();
  }

  cambiarEstado(pedido: Pedido): void {
    this.lBandera = true;
    this.pedidosService.addCocinado(pedido);
    this.pedidosService.deletePedidoPendiente(pedido);
  }

  //Pedidos en coccion

  terminarPedido(pedido: Pedido): void{

    this.lBandera = false;
    this.pedidosService.addDeliveryPoint(pedido);
    this.pedidosService.deletePedidoCocinado(pedido);

  }
  
}
