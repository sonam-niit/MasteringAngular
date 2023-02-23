import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutchildBComponent } from './aboutchild-b.component';

describe('AboutchildBComponent', () => {
  let component: AboutchildBComponent;
  let fixture: ComponentFixture<AboutchildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutchildBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutchildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
