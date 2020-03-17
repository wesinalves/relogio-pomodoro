import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDuvidasComponent } from './pagina-duvidas.component';

describe('PaginaDuvidasComponent', () => {
  let component: PaginaDuvidasComponent;
  let fixture: ComponentFixture<PaginaDuvidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDuvidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDuvidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
