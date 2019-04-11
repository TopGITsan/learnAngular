import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
        "name": "Top",
        "online": true
      },
      {
        "name": "camper",
        "online": true
      },
      {
        "name": "bot",
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
        "name": "bot",
        "online": true
      },
      {
        "name": "XYZ",
        "online": false
      }
    ]
  };
}
