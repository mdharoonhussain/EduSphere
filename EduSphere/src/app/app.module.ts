import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasaiEduComponent } from './masai-edu/masai-edu.component';

@NgModule({
  declarations: [
    AppComponent,
    MasaiEduComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
