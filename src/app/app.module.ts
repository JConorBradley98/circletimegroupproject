import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ConsentScreenComponent } from './components/consent-screen/consent-screen.component';
import { CircleTimeComponent } from './components/circle-time/circle-time.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsentScreenComponent,
    CircleTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
