import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {appRoutes} from './routerConfig';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ApiComponent } from './api/api.component';
import { ApiService } from './api.service';
import { FreeApiService } from './services/service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { WordDetailsComponent } from './word-details/word-details.component';
import { CarouseComponent } from './carouse/carouse.component';
import { SearchComponent } from './search/search.component';
 import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
 import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
 import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiComponent,
    WordDetailsComponent,
    CarouseComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,NgxPaginationModule,ProgressBarModule,
    RouterModule.forRoot(appRoutes),ScrollToModule.forRoot(),
    HttpClientModule,FormsModule

  ],
  providers: [ApiService,FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
