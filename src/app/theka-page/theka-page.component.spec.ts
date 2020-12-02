import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekaPageComponent } from './theka-page.component';

describe('ThekaPageComponent', () => {
  let component: ThekaPageComponent;
  let fixture: ComponentFixture<ThekaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThekaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
