import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    NavBarComponent
  ],
  providers: []
})
export class AppModule {}

