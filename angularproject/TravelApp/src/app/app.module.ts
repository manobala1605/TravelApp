import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';

import { SchoolRegisterComponent } from './school-register/school-register.component';
import { HomeTravelsComponent } from './home-travels/home-travels.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';
import { CarBookingComponent } from './car-booking/car-booking.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {path:'School-Register',component:SchoolRegisterComponent},
  {path:'Travels-Home',component:HomeTravelsComponent},
  {path:'Travel-Van-Booking',component:TravelRegisterComponent},
  {path:'Car-Booking',component:CarBookingComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SchoolRegisterComponent,
    HomeTravelsComponent,
    TravelRegisterComponent,
    CarBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,MatListModule,RouterModule.forRoot(routes),
    MatFormFieldModule,MatSelectModule,FormsModule,ReactiveFormsModule,MatProgressSpinnerModule,
    MatTabsModule,MatSliderModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
