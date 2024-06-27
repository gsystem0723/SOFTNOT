import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(
    private router: Router
  ) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  vista(vista: string) {
    if (vista == "listar_pv")
      this.router.navigate(['/extraprotocolar/listar-permiso-viaje']);
    else if (vista == "registrar_pv")
      this.router.navigate(['/extraprotocolar/registrar-permiso-viaje']);

  }
}
