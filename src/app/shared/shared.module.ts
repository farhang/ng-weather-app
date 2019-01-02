import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ToastrModule,
    FormsModule,
  ]
})
export class SharedModule {}
