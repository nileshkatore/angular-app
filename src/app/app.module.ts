import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

import { AlertPageComponent } from './alert-page/alert-page..component';
import { MlPageComponent } from './ml-page/ml-page.component';
import { ReportPageComponent } from './report-page/report-page.component';


const appRoutes : Routes = [
  { path: '' , component: AlertPageComponent },
  { path: 'alerts' , component: AlertPageComponent },
  { path: 'ml-predictions' , component: MlPageComponent },
  { path: 'report' , component: ReportPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AlertPageComponent,
    MlPageComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
