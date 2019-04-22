import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubviewComponent } from './pubview.component';

describe('PubviewComponent', () => {
  let component: PubviewComponent;
  let fixture: ComponentFixture<PubviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
