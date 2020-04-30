import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ImgComponent } from './logoComponent/img.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavBarComponent, ImgComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
