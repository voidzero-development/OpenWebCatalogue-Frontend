import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubeditComponent } from './pubedit.component';

describe('PubeditComponent', () => {
  let component: PubeditComponent;
  let fixture: ComponentFixture<PubeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
