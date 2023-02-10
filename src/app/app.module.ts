import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CrearPedidoFormComponent } from './crear-pedido-form/crear-pedido-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ConsultaPedidoFormComponent } from './consulta-pedido-form/consulta-pedido-form.component';
import { HomePedidoComponent } from './home/home-pedido/home-pedido.component';
import { AvisoPrivacidadComponent } from './footer/aviso-privacidad/aviso-privacidad.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CrearPedidoTableComponent } from './table/crear-pedido-table/crear-pedido-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CrearPedidoFormComponent,
    ConsultaPedidoFormComponent,
    HomePedidoComponent,
    AvisoPrivacidadComponent,
    CrearPedidoTableComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
