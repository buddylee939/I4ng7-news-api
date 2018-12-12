import { BusinessService } from './../services/business.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  businessUrl: String;
  data: any;
  constructor(private businessService: BusinessService, private router: Router) { }

  ngOnInit() {
    this.businessUrl = 'top-headlines?country=us&category=business';
    this.businessService.getData(this.businessUrl)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  goToArticle(article) {
    this.businessService.currentArticle = article;
    this.router.navigate(['/business-detail']);
  }

}
