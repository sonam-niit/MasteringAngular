import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyComponent } from './trackby.component';

describe('TrackbyComponent', () => {
  let component: TrackbyComponent;
  let fixture: ComponentFixture<TrackbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
