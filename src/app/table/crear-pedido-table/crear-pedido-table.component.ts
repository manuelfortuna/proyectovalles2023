import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  clave: number;
  desc: string;
  empaque: number;
  precio_iva: number;
  precio_especial: number;
  bonificacion: number;
  pedido_cajas: number;
  bonificacion_total: number;
  venta_neta: number;
  comentarios: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},
  {position: 2, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},
  {position: 3, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},
  {position: 4, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},
  {position: 5, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-crear-pedido-table',
  templateUrl: './crear-pedido-table.component.html',
  styleUrls: ['./crear-pedido-table.component.css']
})
export class CrearPedidoTableComponent {
  displayedColumns: string[] = ['position', 'clave', 'desc', 'empaque', 'precio_iva', 'precio_especial', 'bonificacion','pedido_cajas','bonificacion_total','venta_neta','comentarios'];
  dataSource = ELEMENT_DATA;

}
