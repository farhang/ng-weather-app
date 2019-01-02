import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnSwitcherComponent } from '../../shared/btn-switcher/btn-switcher.component';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BtnSwitcherComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BtnSwitcherComponent, HeaderComponent]
})
export class HeaderModule { }
