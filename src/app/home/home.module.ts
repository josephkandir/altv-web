import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [
    HomeComponent,
    BreakingNewsComponent,
    HomeHeaderComponent,
    HomeMainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }
