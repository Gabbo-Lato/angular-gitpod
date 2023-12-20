import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponenteComponent } from './secondo-componente.component';

describe('SecondoComponenteComponent', () => {
  let component: SecondoComponenteComponent;
  let fixture: ComponentFixture<SecondoComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondoComponenteComponent]
    });
    fixture = TestBed.createComponent(SecondoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
