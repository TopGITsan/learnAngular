import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../records.service';
import { ApidataService } from '../apidata.service';

interface myData{
  username: string;
  ID: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  data = [
    {
      "name": "Top",
      "online": true
    },
    {
      "name": "camper",
      "online": true
    },
    {
      "name":"bot",
      "online": true
    },
    {
      "name": "XYZ",
      "online": false
    },
    {
      "name": "camper",
      "online": true
    },
    {
      "name":"bot",
      "online": true
    },
    {
      "name": "XYZ",
      "online": false
    }
  ];

  records = [];
  apiData: myData[] = [];

  constructor(private myFirstService: RecordsService, private dataAPI:ApidataService) { 
    
  }

  ngOnInit() {
    this.records = this.myFirstService.getData();
    this.dataAPI.getData()
    // use RxJS to handle asyncronous data req; is based on a pipe-line model
      .subscribe((datas:myData[]) =>{
        this.apiData = [...datas];
        // console.log("Data saved:", this.apiData)
      });
  }

}
