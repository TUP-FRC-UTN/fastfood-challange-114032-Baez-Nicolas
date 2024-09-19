import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { IPedidosService } from '../../services/ipedidos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnInit{

  oPedidosDelivery: Pedido[] = [];

  constructor(public pedidosService: IPedidosService){}

  ngOnInit(): void {
    this.oPedidosDelivery = this.pedidosService.getDeliveryPoint();
  }
  
  entregarPedido(pedido: Pedido): void {
    alert("Pedido N°" + pedido.number + " entregado exitosamente!");
    this.pedidosService.deleteDeliveryPoint(pedido);
  }
}
