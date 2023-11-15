import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountingModule } from './accounting/accounting.module';

/*
  Ne pas faire ça, car il appartient à un module différent
  import { MainComponent } from './accounting/main/main.component';
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
