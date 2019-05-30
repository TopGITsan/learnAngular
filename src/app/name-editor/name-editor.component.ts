import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Top');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
