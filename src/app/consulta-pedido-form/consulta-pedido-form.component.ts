import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-pedido-form',
  templateUrl: './consulta-pedido-form.component.html',
  styleUrls: ['./consulta-pedido-form.component.css']
})
export class ConsultaPedidoFormComponent {
  addressForm = this.fb.group({
    idCliente: null,
    idAgente: null,
    nomAgente: null,
    nomCliente: null,
    proveedor: null,
    folio: ["", Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)
    ])
    ],
    lastName: [null, Validators.required],
    state: [null, Validators.required],
  });

  hasUnitNumber = false;

  panelOpenState = false;

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    alert('Thanks!');
  }
}
