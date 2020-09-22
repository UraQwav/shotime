import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouseComponent } from './shouse.component';

describe('ShouseComponent', () => {
  let component: ShouseComponent;
  let fixture: ComponentFixture<ShouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
