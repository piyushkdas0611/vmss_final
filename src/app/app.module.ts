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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterUnderWriterComponent } from './register-under-writer/register-under-writer.component';
import { DeleteComponent } from './delete/delete.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceHistoryComponent,
    AddVehicleInsuranceComponent,
    UpdatepasswordComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegisterUnderWriterComponent,
    DeleteComponent,
    SuccessComponent
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