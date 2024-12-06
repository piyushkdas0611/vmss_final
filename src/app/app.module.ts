import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    InsuranceHistoryComponent,
    AddVehicleInsuranceComponent,
    UpdatepasswordComponent,
    NavBarComponent,
    FooterComponent // Declare components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // Import Angular modules here
  ],
  providers: [UserService, UpdatepasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }