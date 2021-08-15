import { NgModule, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule implements OnInit { 
  
  ngOnInit(): void {
  }
}
