import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTestComponent } from './setup-test.component';

describe('SetupTestComponent', () => {
  let component: SetupTestComponent;
  let fixture: ComponentFixture<SetupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
