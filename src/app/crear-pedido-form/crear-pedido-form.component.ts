import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { FormBuilder, Validators } from '@angular/forms';
import {Observable, ReplaySubject} from 'rxjs';


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
    {position: 6, clave: 123456, desc: 'LECHE ALPURA CLASICA 1 LT', empaque: 12, precio_iva: 291.78, precio_especial:258.00, bonificacion:33.78, pedido_cajas:3, bonificacion_total: 56.60, venta_neta: 453.00,comentarios: 'El pedido se encuentra pendiente de surtir'},
  
  ];


@Component({
  selector: 'app-crear-pedido-form',
  templateUrl: './crear-pedido-form.component.html',
  styleUrls: ['./crear-pedido-form.component.css']
})

export class CrearPedidoFormComponent {
  displayedColumns: string[] = ['position', 'clave', 'desc', 'empaque', 'precio_iva', 'precio_especial', 'bonificacion','pedido_cajas','bonificacion_total','venta_neta','comentarios'];
  dataSource = ELEMENT_DATA;


  nuevoPedidoForm = this.fb.group({
    nomCliente: null,
    nomAgente: null,
    proveedor: null,
    clave: null,
    descripcion: null,
    empaque: null,
    precio: null,
    preEspecial: null,
    bonificacion: null,
    pedidoCajas: null,
    boniTotal: null,
    ventaNeta: null,
    comentarios: null,

    folio: ["00001", Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)
    ])
    ],
    idCliente: [null, Validators.required],
    idAgente: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    let datosArticulos: string[];
    

    if (this.nuevoPedidoForm.valid) {

      alert("TODOS LOS DATOS SON CORRECTOS" + 
      this.nuevoPedidoForm.value.clave + '\n'+ 
      this.nuevoPedidoForm.value.descripcion+ '\n'+ 
      this.nuevoPedidoForm.value.empaque+ '\n'+ 
      this.nuevoPedidoForm.value.preEspecial+ '\n'+ 
      this.nuevoPedidoForm.value.bonificacion+ '\n'+ 
      this.nuevoPedidoForm.value.pedidoCajas+ '\n'+ 
      this.nuevoPedidoForm.value.boniTotal+ '\n'+ 
      this.nuevoPedidoForm.value.ventaNeta+ '\n'+ 
      this.nuevoPedidoForm.value.comentarios);

    } else {
      alert("HAY DATOS INVALIDOS EN EL FORMULARIO");
    }

  }
}
