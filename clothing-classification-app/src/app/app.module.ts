import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; // Import NavBarComponent

@NgModule({
  declarations: [
    AppComponent,    // Declare the AppComponent
    NavBarComponent  // Declare the NavBarComponent here
  ],
  imports: [
    BrowserModule,   // Import necessary modules
    // Other modules can be imported here
  ],
  bootstrap: [AppComponent]  // Set the root component to bootstrap
})
export class AppModule { }
