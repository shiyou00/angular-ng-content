import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDomComponent } from './child-dom.component';

describe('ChildDomComponent', () => {
  let component: ChildDomComponent;
  let fixture: ComponentFixture<ChildDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
