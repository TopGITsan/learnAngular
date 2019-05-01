import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import { RecordsService } from './records.service';
import { ApidataService } from './apidata.service';
import { AuthService } from "./auth.service";

import { AuthGuard } from "./auth.guard";



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataComponent,
    HomeComponent,
    LoginComponent,
    // AdminComponent,
    DashboardComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'hello',
        component: HelloComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      // {
      //   path: 'admin',
      //   component: AdminComponent,
      //   canActivate: [AuthGuard]
      //   // canActivate: [AuthGuard && SomeOtherRouteGuard && ...]
      //   // can be added multiple routes, so if one fails others will check
      // },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
    // modules are independent piece of code, which run independent of each other
  ],
  providers: [RecordsService,ApidataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
