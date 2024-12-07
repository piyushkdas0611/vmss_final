import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVehicleInsuranceComponent } from './add-vehicle-insurance/add-vehicle-insurance.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdatepasswordService } from './services/updatepassword.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceHistoryComponent,
    AddVehicleInsuranceComponent,
    UpdatepasswordComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // Import Angular modules here
    RouterModule
  ],
  providers: [UserService, UpdatepasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }