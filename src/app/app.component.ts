import { Component, ViewContainerRef } from '@angular/core';
import {ModalService} from 'carbon-components-angular/modal/modal.service';
import { SampleModalComponent } from './sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  constructor(private modal:ModalService, private viewContainerRef: ViewContainerRef){
    
  }

  aa(){
    this.modal.placeholder.viewContainerRef = this.viewContainerRef;
    this.modal.create({component:SampleModalComponent});
  }
}
