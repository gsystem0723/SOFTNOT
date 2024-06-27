import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPermisoViajeComponent } from './registrar-permiso-viaje.component';

describe('RegistrarPermisoViajeComponent', () => {
  let component: RegistrarPermisoViajeComponent;
  let fixture: ComponentFixture<RegistrarPermisoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarPermisoViajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPermisoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
