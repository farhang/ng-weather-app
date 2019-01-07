import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-switcher',
  template: `
    <span class="labels">{{firstValueLabel}}</span>
    <label class="switch">
      <input type="checkbox" (change)="changeValue()" [checked]="isFirstValue()">
      <span class="slider round"></span>
    </label>
    <span class="labels">{{secondValueLabel}}</span>
  `,
  styleUrls: ['./btn-switcher.component.scss']
})

export class BtnSwitcherComponent {
  @Input() firstValue: any;
  @Input() secondValue: any;
  @Input() firstValueLabel: string;
  @Input() secondValueLabel: string;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  changeValue() {
    this.value = this.isFirstValue() ? this.secondValue : this.firstValue;
    this.valueChange.emit(this.value);
  }

  isFirstValue() {
    return this.value === this.firstValue;
  }

}
