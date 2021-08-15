import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private article: ArticleService) { }

  ngOnInit(): void {
  }

}
