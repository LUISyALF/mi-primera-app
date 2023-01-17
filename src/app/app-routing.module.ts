import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FacturaComponent } from './factura/factura.component';
import { NominaComponent } from './nomina/nomina.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'empleados', component: EmpleadoComponent},
  {path: 'facturas', component: FacturaComponent},
  {path: 'nominas', component: NominaComponent},
  {path: 'comments', component: CommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
