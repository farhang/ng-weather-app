import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-switcher',
  templateUrl: './btn-switcher.component.html',
  styleUrls: ['./btn-switcher.component.scss']
})

export class BtnSwitcherComponent implements OnInit {
  @Input() switcherStyleMode: SwitcherStyleMode;
  @Output() styleChange = new EventEmitter<string>();
  currentStyleMode: boolean;

  ngOnInit() {
    this.currentStyleMode = this.switcherStyleMode === 'dark';
  }

  setCurrentStyle(currentStyle) {
    this.switcherStyleMode = currentStyle ? 'light' : 'dark';
    this.styleChange.emit(this.switcherStyleMode);
  }
}

type SwitcherStyleMode = 'dark' | 'light';
