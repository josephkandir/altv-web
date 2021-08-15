import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { HeaderMiddleComponent } from './header/header-middle/header-middle.component';
import { HeaderStandardComponent } from './header/header-standard/header-standard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './page-error/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderMiddleComponent,
    HeaderStandardComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
