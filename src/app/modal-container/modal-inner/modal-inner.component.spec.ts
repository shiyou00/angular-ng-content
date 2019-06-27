import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInnerComponent } from './modal-inner.component';

describe('ModalInnerComponent', () => {
  let component: ModalInnerComponent;
  let fixture: ComponentFixture<ModalInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
