import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myVar = "Top";
  bitwiseOR = 2 | 5; // 10 | 101 => 1|0=1 then 1|0=1 then 0|1=1; 111
  // i = 0;
  myVariable = 'app';
  myDisabled = false;
  text = 'text to mirror';
  ngText = 'ngModel';

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

  constructor() { 
    
  }

  // doSomeHeavyTask() {
  //   console.log(`Called ${this.i++} times`)
  // }

  myFunction(){
    this.myDisabled = !this.myDisabled;
    console.log("Button clicked!")
  }

  updateValue(event){
    // console.log(event);
    this.text = event.target.value;
  }

  ngOnInit() {
  }

}
