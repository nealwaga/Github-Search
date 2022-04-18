import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhUserComponent } from './gh-user/gh-user.component';
import { GhReposComponent } from './gh-repos/gh-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GhUserComponent,
    GhReposComponent,
  ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
