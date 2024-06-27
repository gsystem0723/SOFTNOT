import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPermisoViajeComponent } from './listar-permiso-viaje.component';

describe('ListarPermisoViajeComponent', () => {
  let component: ListarPermisoViajeComponent;
  let fixture: ComponentFixture<ListarPermisoViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPermisoViajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPermisoViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
