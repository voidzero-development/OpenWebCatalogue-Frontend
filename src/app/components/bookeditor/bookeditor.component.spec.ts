import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeditorComponent } from './bookeditor.component';

describe('BookeditorComponent', () => {
  let component: BookeditorComponent;
  let fixture: ComponentFixture<BookeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
