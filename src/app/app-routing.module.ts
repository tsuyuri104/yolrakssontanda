import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/conversion', pathMatch: 'full'
  }, {
    path: 'conversion', component: ConversionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
