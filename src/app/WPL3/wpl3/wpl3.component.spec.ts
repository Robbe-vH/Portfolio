import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wpl3Component } from './wpl3.component';

describe('Wpl3Component', () => {
  let component: Wpl3Component;
  let fixture: ComponentFixture<Wpl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wpl3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wpl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
