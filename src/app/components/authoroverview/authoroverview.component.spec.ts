import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoroverviewComponent } from './authoroverview.component';

describe('AuthoroverviewComponent', () => {
  let component: AuthoroverviewComponent;
  let fixture: ComponentFixture<AuthoroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
