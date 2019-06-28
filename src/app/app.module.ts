import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalInnerComponent } from './modal-container/modal-inner/modal-inner.component';
import { ModalContentComponent } from './modal-container/modal-content/modal-content.component';
import { ModalTitleComponent } from './modal-container/modal-title/modal-title.component';
import { OperationDomComponent } from './operation-dom/operation-dom.component';
import { ChildDomComponent } from './operation-dom/child-dom/child-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    ModalInnerComponent,
    ModalContentComponent,
    ModalTitleComponent,
    OperationDomComponent,
    ChildDomComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContainerComponent]
})
export class AppModule { }
