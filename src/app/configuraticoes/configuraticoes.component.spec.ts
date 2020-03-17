import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguraticoesComponent } from './configuraticoes.component';

describe('ConfiguraticoesComponent', () => {
  let component: ConfiguraticoesComponent;
  let fixture: ComponentFixture<ConfiguraticoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguraticoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguraticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
