import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhUserComponent } from './gh-user/gh-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GhUserComponent,
  ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
