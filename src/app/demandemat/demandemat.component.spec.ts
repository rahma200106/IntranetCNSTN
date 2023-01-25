import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandematComponent } from './demandemat.component';

describe('DemandematComponent', () => {
  let component: DemandematComponent;
  let fixture: ComponentFixture<DemandematComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandematComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
