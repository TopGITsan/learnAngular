import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent implements OnInit {
  myVar = "Top";
  bitwiseOR = 2 | 5; // 10 | 101 => 1|0=1 then 1|0=1 then 0|1=1; 111
  // i = 0;
  myVariable = "app";
  myDisabled = false;
  myButton = "Disable";
  text = "text to mirror";
  ngText = "ngModel";

  private actualAmountInEUR = 128;
  EUR = true;
  currency = "USD";

  checkVar = true;

  data = [
    {
      lang: "JavaScript",
      usedOn: "web development"
    },
    {
      lang: "Swift",
      usedOn: "IOS"
    }
  ];

  public contactForm: FormGroup;
  public forbiddenUserNames = ["Mack", "John"];

  constructor() {
    setInterval(() => {
      this.checkVar = !this.checkVar;
    }, 10000);
  }

  myFunction() {
    this.myDisabled = !this.myDisabled;
    this.myButton = this.myDisabled ? "Enable" : "Disable";
    console.log("Button clicked!");
  }

  updateValue(event) {
    // console.log(event);
    this.text = event.target.value;
  }

  get amount() {
    return this.EUR ? this.actualAmountInEUR : this.actualAmountInEUR * 1.12;
  }

  get format() {
    return this.EUR ? "EUR" : "USD";
  }

  toggleCurrency() {
    this.EUR = !this.EUR;
    this.currency = this.EUR ? "USD" : "EUR";
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        this.forbiddenNames.bind(this)
      ]),
      email: new FormControl(null, [
        Validators.email,
        Validators.pattern("[a-z0-9.@]*")
      ]),
      subject: new FormControl(null, Validators.minLength(10)),
      message: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });
  }

  public forbiddenNames(formControl: FormControl): any {
    if (this.forbiddenUserNames.indexOf(formControl.value)) {
      return { nameForbidden: true };
    }
  }

  public addHobby() {
    (<FormArray>this.contactForm.get("hobbies")).push(new FormControl(null));
  }

}
