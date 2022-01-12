import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }

  submit() {
    console.log(this.categoryForm.value);
  }
}
