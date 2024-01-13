import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectieComponent } from './reflectie.component';

describe('ReflectieComponent', () => {
  let component: ReflectieComponent;
  let fixture: ComponentFixture<ReflectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
