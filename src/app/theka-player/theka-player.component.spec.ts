import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThekaPlayerComponent } from './theka-player.component';

describe('ThekaPlayerComponent', () => {
  let component: ThekaPlayerComponent;
  let fixture: ComponentFixture<ThekaPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThekaPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThekaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
