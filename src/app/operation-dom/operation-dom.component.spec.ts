import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDomComponent } from './operation-dom.component';

describe('OperationDomComponent', () => {
  let component: OperationDomComponent;
  let fixture: ComponentFixture<OperationDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
