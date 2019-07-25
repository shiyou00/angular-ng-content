import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import { ModalContainerComponent } from '../modal-container/modal-container.component';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.css']
})
export class InsertModalComponent implements OnInit {

  _container = null;

  constructor(
    private r: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
  ) { }

  ngOnInit() {
    this.addDynamicComponent();
  }

  addDynamicComponent() {
    const factory = this.r.resolveComponentFactory(ModalContainerComponent);
    const componentRef = factory.create(this.injector);
    this._container = componentRef.hostView;
    this.appRef.attachView(this._container);
    document.body.appendChild(this._container.rootNodes[0]);
  }

}
