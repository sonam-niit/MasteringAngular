import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirectiveuseComponent } from './ifdirectiveuse.component';

describe('IfdirectiveuseComponent', () => {
  let component: IfdirectiveuseComponent;
  let fixture: ComponentFixture<IfdirectiveuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdirectiveuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfdirectiveuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
