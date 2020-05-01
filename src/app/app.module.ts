import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ImgComponent } from './components/logo/img.component';
import { TergetRosa } from './components/targetas/rosa.component';
import { TargetGris } from './components/targetas/gris.component';
import { WhiteTarget } from './components/targetas/white.component';
import { GreenTarget } from './components/targetas/green.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ImgComponent,
    TergetRosa,
    TargetGris,
    WhiteTarget,
    GreenTarget,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
