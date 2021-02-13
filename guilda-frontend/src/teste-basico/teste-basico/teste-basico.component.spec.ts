import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteBasicoComponent } from './teste-basico.component';

describe('TesteBasicoComponent', () => {
  let component: TesteBasicoComponent;
  let fixture: ComponentFixture<TesteBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
