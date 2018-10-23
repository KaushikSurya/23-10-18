import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './ourservices/home/home.component';
import { OrderFormComponent } from './ourservices/order-form/order-form.component';
import { SuccessComponent } from './ourservices/success/success.component';
import { InternationalCourierServicesComponent } from './ourservices/international-courier-services/international-courier-services.component';
import { DomesticCourierServicesComponent } from './ourservices/domestic-courier-services/domestic-courier-services.component';
import { SeaFreightComponent } from './ourservices/sea-freight/sea-freight.component';
import { LogisticsComponent } from './ourservices/logistics/logistics.component';
import { AirFreightComponent } from './ourservices/air-freight/air-freight.component';
import { TrackingComponent } from './tracking/tracking/tracking.component';
import { ResultComponent } from './tracking/result/result.component';

const paths: Routes = [
  { path: 'ourservices', component: HomeComponent, children : [
      { path: 'of', component: OrderFormComponent },
      { path: 'success/:oid', component: SuccessComponent },
      { path: 'ic', component: InternationalCourierServicesComponent },
      { path: 'dc', component: DomesticCourierServicesComponent },
      { path: 'sf', component: SeaFreightComponent },
      { path: 'lo', component: LogisticsComponent },
      { path: 'af', component: AirFreightComponent }
    ]
  },
  { path : 'tracking', component : TrackingComponent },
  { path : 'track/:oid', component : ResultComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessComponent,
    OrderFormComponent,
    InternationalCourierServicesComponent,
    DomesticCourierServicesComponent,
    SeaFreightComponent,
    LogisticsComponent,
    AirFreightComponent,
    HeaderComponent,
    TrackingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
