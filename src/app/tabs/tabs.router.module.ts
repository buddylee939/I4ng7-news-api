
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
// import { HomePage } from '../home/home.page';
// import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { NewsPage } from '../news/news.page';
import { BusinessPage } from './../business/business.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'bitcoin',
        outlet: 'bitcoin',
        component: NewsPage
      },
      {
        path: 'business',
        outlet: 'business',
        component: BusinessPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(bitcoin:bitcoin)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
