import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header/header/header.component';
import { RentalModule } from './rental/rental.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    RentalModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


