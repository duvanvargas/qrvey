import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrveyHomeComponent } from './core/qrvey-home/qrvey-home.component';

const routes: Routes = [
  {
    path: '',
    component: QrveyHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
