import { provideHttpClient, withFetch } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { provideClientHydration } from '@angular/platform-browser';
import { Router } from '@angular/router';


export interface PeriodicElement {
  position: number;
  condicion: string;
  participante: string;
  tipodoc: string;
  documento: string;
}



const ELEMENT_DATA: PeriodicElement[] = [/*
  { position: 1, condicion: 'PADRE', participante: 'Al Interior', tipodoc: 'H', documento: 'Piura' },
  { position: 2, condicion: 'MADRE', participante: 'Al Exterior', tipodoc: 'He', documento: 'Chile' },*/
];


@Component({
  selector: 'app-registrar-permiso-viaje',
  templateUrl: './registrar-permiso-viaje.component.html',
  styleUrl: './registrar-permiso-viaje.component.css'

})
export class RegistrarPermisoViajeComponent {

  displayedColumns: string[] = ['position', 'condicion', 'participante', 'tipodoc', 'documento'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: Router
  ) { }

  onClkVolver() {
    this.router.navigate(['/extraprotocolar/listar-permiso-viaje']);
  }

}



