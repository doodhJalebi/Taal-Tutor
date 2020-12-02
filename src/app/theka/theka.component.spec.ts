import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekaComponent } from './theka.component';

describe('ThekaComponent', () => {
  let component: ThekaComponent;
  let fixture: ComponentFixture<ThekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThekaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
