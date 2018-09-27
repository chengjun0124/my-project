import { Injector, Component } from "@angular/core";
import { Modal } from "carbon-components-angular/";


@Modal()
@Component({
	selector: "app-sample-modal",
	template: `
		<ibm-modal>
			<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
			<section class="bx--modal-content">
				<h1>Sample modal works.</h1>
				<p class="bx--modal-content__text">aa</p>
			</section>
			<ibm-modal-footer>
				<button class="bx--btn bx--btn--primary" (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
export class SampleModalComponent {
	modalText: string;
	constructor(private injector: Injector) {
		//this.modalText = this.injector.get("modalText");
	}
}