import { Component } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  destino: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'PV0001', weight: 'Al Interior', symbol: 'H', destino: 'Piura' },
  { position: 2, name: 'PV0002', weight: 'Al Exterior', symbol: 'He', destino: 'Chile' },
  { position: 3, name: 'PV0003', weight: 'Al Exterior', symbol: 'Li', destino: 'México' }
];


@Component({
  selector: 'app-listar-permiso-viaje',
  templateUrl: './listar-permiso-viaje.component.html',
  styleUrl: './listar-permiso-viaje.component.css'
})
export class ListarPermisoViajeComponent {

  constructor(
    private router: Router
  ) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'destino'];
  dataSource = ELEMENT_DATA;


  onClkNuevoRegistro() {
    this.router.navigate(['/extraprotocolar/registrar-permiso-viaje']);
  }
}
