import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultStyleMode = 'dark';
  private themeWrapper = document.querySelector('body');

  ngOnInit() {
    /* TODO get default colors from theme config */
    this.themeWrapper.style.setProperty('--headerColor', this.defaultStyleMode === 'light' ? '#999' : '#555');
  }

  getCurrentStyle(currentStyle) {
    this.themeWrapper.style.setProperty('--headerColor', currentStyle === 'light' ? '#999' : '#555');
  }

}
