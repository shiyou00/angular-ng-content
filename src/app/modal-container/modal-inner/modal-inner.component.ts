import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-inner',
  templateUrl: './modal-inner.component.html',
  styleUrls: ['./modal-inner.component.css']
})
export class ModalInnerComponent implements OnInit, AfterContentInit {
  @ContentChild(ModalContentComponent) contentCom: ModalContentComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.contentCom); // 可以正确的打印出`ModalContentComponent`实例
  }
}
