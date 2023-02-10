import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPedidoFormComponent } from './consulta-pedido-form/consulta-pedido-form.component';
import { CrearPedidoFormComponent } from './crear-pedido-form/crear-pedido-form.component';
import { HomePedidoComponent } from './home/home-pedido/home-pedido.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'home-pedido'},
  {path: 'consulta-pedido-form', component:ConsultaPedidoFormComponent},
  {path: 'crear-pedido-form', component:CrearPedidoFormComponent},
  {path: 'home-pedido', component:HomePedidoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
