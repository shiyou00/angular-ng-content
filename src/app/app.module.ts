import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalInnerComponent } from './modal-container/modal-inner/modal-inner.component';
import { ModalContentComponent } from './modal-container/modal-content/modal-content.component';
import { ModalTitleComponent } from './modal-container/modal-title/modal-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    ModalInnerComponent,
    ModalContentComponent,
    ModalTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
