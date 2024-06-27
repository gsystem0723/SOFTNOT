import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListarPermisoViajeComponent } from './components/extraprotocolar/permiso-viaje/listar-permiso-viaje/listar-permiso-viaje.component';
import { RegistrarPermisoViajeComponent } from './components/extraprotocolar/permiso-viaje/registrar-permiso-viaje/registrar-permiso-viaje.component';


const routes: Routes = [
  {
    path: 'navigation',
    component: NavigationComponent
  }, {
    path: 'extraprotocolar/listar-permiso-viaje',
    component: ListarPermisoViajeComponent
  }, {
    path: 'extraprotocolar/registrar-permiso-viaje',
    component: RegistrarPermisoViajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
