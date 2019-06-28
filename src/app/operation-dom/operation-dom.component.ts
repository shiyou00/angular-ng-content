import { Component, OnInit, ElementRef, TemplateRef, ViewChild, AfterViewInit, Injector, ComponentFactoryResolver, ViewContainerRef , ApplicationRef, EmbeddedViewRef} from '@angular/core';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-operation-dom',
  templateUrl: './operation-dom.component.html',
  styleUrls: ['./operation-dom.component.css']
})
export class OperationDomComponent implements OnInit, AfterViewInit {
  @ViewChild('tpl') tpl: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  _container;
  constructor(
    private hostElement: ElementRef,
    private injector: Injector,
    private r: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private overlay: Overlay
  ) {
    // console.log('hostElement', this.hostElement);
    this.addDynamicComponent();
    // const overlayPane = this.overlay.create().overlayElement;
    // overlayPane.style.zIndex = '1010';
    // overlayPane.appendChild((this._container as EmbeddedViewRef<{}>).rootNodes[ 0 ] as HTMLElement);
  }
  // 生成了一个动态组件 + 监听该组件
  addDynamicComponent() {
    const factory = this.r.resolveComponentFactory(ModalContainerComponent);
    const componentRef = factory.create(this.injector);

    this._container = componentRef.hostView;
    console.log('创建宿主视图', componentRef , this._container);

    // componentRef.changeDetectorRef.detectChanges();
    this.appRef.attachView(this._container);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const view = this.tpl.createEmbeddedView(null);
    document.getElementById('container').appendChild(this._container.rootNodes[0]);
    // 实现了组件动态插入功能
    // this.vc.insert(this._container);
    // this.vc.createEmbeddedView(this.tpl);
    // this.addDynamicComponent();
    console.log('tpl', view);
  }
}
