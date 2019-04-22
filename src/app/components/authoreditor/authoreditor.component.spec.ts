import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoreditorComponent } from './authoreditor.component';

describe('AuthoreditorComponent', () => {
  let component: AuthoreditorComponent;
  let fixture: ComponentFixture<AuthoreditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoreditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
