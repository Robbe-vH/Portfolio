import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwikkelingsgesprekkenComponent } from './ontwikkelingsgesprekken.component';

describe('OntwikkelingsgesprekkenComponent', () => {
  let component: OntwikkelingsgesprekkenComponent;
  let fixture: ComponentFixture<OntwikkelingsgesprekkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntwikkelingsgesprekkenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntwikkelingsgesprekkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
