
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleInsuranceComponent } from './add-vehicle-insurance/add-vehicle-insurance.component';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UnderwriterComponent } from './underwriter/underwriter.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'add-insurance', component: AddVehicleInsuranceComponent },
  // { path: '', redirectTo: '/add-insurance', pathMatch: 'full' },
  {
    path: 'insurance-history',
    component: InsuranceHistoryComponent
  },
  { path: 'updatepassword', component: UpdatepasswordComponent },
  { path: 'underwriter', component: UnderwriterComponent},
  {path: 'about-us', component: AboutUsComponent}
  // { path: '', redirectTo: '/insurance-history', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }