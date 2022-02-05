# Angular Reactive Forms

A Reactive based approach form control.

## Custom Validator

    new FormControl(null, [
      Validators.required, // built in Validator
      this.customValidator.bind(this), // custom Validator
    ]),

## StackBlitz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-spdomn)