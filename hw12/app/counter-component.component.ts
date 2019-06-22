import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-counter-component',
	template: `
    <div> 
		<button (click) = "decrease()"> - </button>
		{{counterValue}}
		<button (click) = "increase()"> + </button>
    </div>
  `,
	styles: []
})
export class CounterComponentComponent {
	@Input() counterValue: number;
	@Output() counterEvent = new EventEmitter();

	increase() {
		this.counterValue ++;
		this.counterEvent.emit(this.counterValue);
		return false;
	}

	decrease() {
		this.counterValue--;
		this.counterEvent.emit(this.counterValue);
		return false;
	}

}
