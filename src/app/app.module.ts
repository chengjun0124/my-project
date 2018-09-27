import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import {ButtonModule} from 'carbon-components-angular/button/button.module';
import {ModalModule} from 'carbon-components-angular/modal/modal.module';
import { SampleModalComponent } from './sample.component';
import { DialogModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    ButtonModule,
    ModalModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SampleModalComponent]
})
export class AppModule { }
