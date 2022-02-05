import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpForm: FormGroup;
  genders=['male','female'];
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,Validators.required),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    });
  }
  submitForm() {
    console.log(this.signUpForm.value);

  }
  setDefault(e) {
    e.preventDefault();
    this.signUpForm.patchValue({
      userData:{username: 'test',
      email: 'test@test.com'},
      gender:'male'
    });
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

}