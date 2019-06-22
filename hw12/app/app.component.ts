import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<app-counter-component counterValue = "5" (counterEvent) = "counterChange($event)"></app-counter-component>
		<app-counter-component counterValue = "10" (counterEvent) = "counterChange($event)"></app-counter-component>
		<app-counter-component counterValue = "15" (counterEvent) = "counterChange($event)"></app-counter-component>
	`,
	styles: []
})
export class AppComponent {
	title = 'MyApp';

	counterChange(num : number) {
		console.log(num);
		console.log("CHANGING");
	}	
}
