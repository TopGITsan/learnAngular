import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required, Validators.minLength(5)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      state: new FormControl('', [Validators.required, Validators.minLength(2)]),
      zip: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  });

  profileFormFB = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Top');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
