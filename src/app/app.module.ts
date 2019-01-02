import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DevModule } from './dev/dev.module';
import { ToastrModule } from 'ngx-toastr';
import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Main Modules
    BrowserModule,
    CoreModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    DevModule,
    // forRoot() modules
    ToastrModule.forRoot(),
    // Features Modules
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
