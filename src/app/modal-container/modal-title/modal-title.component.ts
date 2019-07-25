import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: ['./modal-title.component.css']
})
export class ModalTitleComponent implements OnInit {
  title = '传入标题组件';
  constructor() { }

  ngOnInit() {
    let i = 0;
    setInterval(() => {
      i++;
      this.title = `传入标题组件${i}`;
    }, 1000 );
  }

}
