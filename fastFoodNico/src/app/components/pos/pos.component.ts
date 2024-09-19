import { Component } from '@angular/core';
import { Pedido } from '../../models/Pedido';
import { IPedidosService } from '../../services/ipedidos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidosIngresadosComponent } from "../pedidos-ingresados/pedidos-ingresados.component";
import { PedidosPendientesComponent } from "../pedidos-pendientes/pedidos-pendientes.component";
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule, PedidosIngresadosComponent, PedidosPendientesComponent, DeliveryPointComponent],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  number?: number;
  name: string = '';
  description? : string;
  date = new Date();

  limpiarCampos()
  {
    this.number = undefined;
    this.name = "";
    this.description = "";
  }

  ultimoId()
  {
    return this.pedidosService.getPedidos().length + 1;
  }

  constructor(public pedidosService: IPedidosService){}

  enviarForm()
  {
    if(this.ultimoId() > 0 && this.name != null && this.description != null)
    {
      const nuevoPedido: Pedido = 
      {
        number: this.ultimoId(),
        name: this.name,
        description: this.description,
        date: this.date,
      }

      alert("Pedido N°" + this.ultimoId() + " agregado éxitosamente");
      this.pedidosService.addPedido(nuevoPedido);
      this.limpiarCampos();
    }
  }
}
