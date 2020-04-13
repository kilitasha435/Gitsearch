import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
// import { ProfileService } from './profile.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { DatecountPipe } from './datecount.pipe';
import { HighlightDirective } from './highlight.directive';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DatecountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
