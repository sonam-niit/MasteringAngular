import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutchildAComponent } from './aboutchild-a.component';

describe('AboutchildAComponent', () => {
  let component: AboutchildAComponent;
  let fixture: ComponentFixture<AboutchildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutchildAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutchildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
