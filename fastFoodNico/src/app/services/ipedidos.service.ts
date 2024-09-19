import { Injectable } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class IPedidosService {

  private lPedido: Pedido[] = [];
  private lPedidoPendiente: Pedido[] = [];
  private lPedidoCocinado: Pedido[] = [];
  private lDeliveryPoint: Pedido[] = [];

  constructor() { }

  //1) Añadir un pedido
  addPedido(pedido: Pedido): void {
    this.lPedido.push(pedido);
    this.lPedidoPendiente.push(pedido);
  }

  //2) Mostrar Pedidos
  getPedidos(): Pedido[] {
    return this.lPedido;
  }

  //3) Mostrar pedidos pendientes
  getPedidosPendientes(): Pedido[] {
    return this.lPedidoPendiente;
  }


  //SECTOR "Cocina"

  //4) Añadir pedido Cocinado
  addCocinado(pedido: Pedido): void {
    this.lPedidoCocinado.push(pedido);
    console.log(this.lPedidoCocinado);
  }
  //5) Eliminar pedido Pendiente
  deletePedidoPendiente(pedido: Pedido): void {
    const index = this.lPedidoPendiente.indexOf(pedido);
    this.lPedidoPendiente.splice(index, 1);
  }
  
  //Pedidos Coccion

  //6) Listar pedidos cocinados
  getPedidosCocinados(): Pedido[] {
    return this.lPedidoCocinado;
  }

  //SECTOR "DELIVERY-POINT"

  //7) Añadir pedido pendiente
  addDeliveryPoint(pedido: Pedido): void {
    this.lDeliveryPoint.push(pedido);
  }

  //8) Eliminar pedido Cocinado
  deletePedidoCocinado(pedido: Pedido): void {
    const index = this.lPedidoCocinado.indexOf(pedido);
    this.lPedidoCocinado.splice(index, 1);
  }

  //9) Mostrar pedidos delivery
  getDeliveryPoint(): Pedido[] {
    return this.lDeliveryPoint;
  }

  //10) Eliminar Pedido Delivery
  deleteDeliveryPoint(pedido: Pedido): void {
    const index = this.lDeliveryPoint.indexOf(pedido);
    this.lDeliveryPoint.splice(index, 1);
  }
}
