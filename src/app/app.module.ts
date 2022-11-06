import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppService} from './app.service';
// import {app}
//import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,ProfileComponent,SearchHistoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
