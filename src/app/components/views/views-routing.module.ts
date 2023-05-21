import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ViewsComponent } from './views.component';

import { MensWatchesComponent } from '../mens-watches/mens-watches.component';
import { WomensWatchesComponent } from '../womens-watches/womens-watches.component';
import { SmartWatchesAllComponent } from '../smart-watches-all/smart-watches-all.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'collections/mens-watches', component: MensWatchesComponent },
      { path: 'collections/womens-watches', component: WomensWatchesComponent },
      { path: 'collections/smart-watches-all', component: SmartWatchesAllComponent },
      { path: '', redirectTo: '/views/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
