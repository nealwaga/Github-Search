import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RepositoryComponent } from './repository/repository.component';
import { DatePipe } from './date.pipe';
import { FormSearchComponent } from './form-search/form-search.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './user-service/user.service';
import{ RepositoryService } from './repository-service/repository-service.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FormSearchComponent,
    RepositoryComponent,
    DatePipe,
  ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [ UserService,RepositoryService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
