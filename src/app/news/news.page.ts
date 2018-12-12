import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsUrl: String;
  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsUrl = 'everything?q=bitcoin&from=2018-11-28&sortBy=publishedAt';
    this.newsService.getData(this.newsUrl)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  goToSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }

}
