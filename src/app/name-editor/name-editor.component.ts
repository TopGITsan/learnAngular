import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl("");
  profileForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(4)
    ]),
    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl("", [Validators.required, Validators.minLength(3)]),
      state: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      zip: new FormControl("", [Validators.required, Validators.minLength(5)])
    })
  });

  profileFormFB = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  heroForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    alterEgo: new FormControl(""),
    power: new FormControl("", Validators.required)
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  updateName() {
    this.name.setValue("Top");
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }

  get aliases() {
    return this.profileFormFB.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  get heroName() {
    return this.heroForm.get("name");
  }

  get heroPower() {
    return this.heroForm.get("power");
  }
}
