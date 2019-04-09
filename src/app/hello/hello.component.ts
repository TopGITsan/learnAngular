import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myVar = "Top";
  bitwiseOR = 2 | 5; // 10 | 101 => 1|0=1 then 1|0=1 then 0|1=1; 111
  i = 0;
  someVar = Math.random()
  constructor() { }

  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`)
  }

  ngOnInit() {
    // setInterval(()=>{
    //   this.someVar = Math.random()
    // },500);
  }

}
