import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtenComponent } from './opdrachten.component';

describe('OpdrachtenComponent', () => {
  let component: OpdrachtenComponent;
  let fixture: ComponentFixture<OpdrachtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdrachtenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpdrachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
