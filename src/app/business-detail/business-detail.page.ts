import { BusinessService } from './../services/business.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.page.html',
  styleUrls: ['./business-detail.page.scss'],
})
export class BusinessDetailPage implements OnInit {
  article;
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    console.log(this.businessService.currentArticle);
    this.article = this.businessService.currentArticle;
  }

}
