import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';

import { RecordsService } from './records.service';
import { ApidataService } from './apidata.service';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataComponent,
    HomeComponent
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
        path: '',
        component: HomeComponent
      }
    ])
    // modules are independent piece of code, which run independent of each other
  ],
  providers: [RecordsService,ApidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
