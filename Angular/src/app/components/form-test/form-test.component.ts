import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  formTest = new FormGroup({
    name: new FormControl('Ale',
      [
        Validators.minLength(6),
        Validators.required,
        this.noHeck
      ]
    ),
    age: new FormControl(19,
      [
        Validators.min(21),
        Validators.max(65)
      ]
    )
  });

  ageNm: string = 'age';
  btnSubmitTxt: string = 'Submit';
  btnDisplayTxt: string = 'Hide age ( & console.log)';
  ageFldDisabled: boolean = false;

  constructor() {
  }

  noHeck(control: AbstractControl): null | object {
    return control.value.includes('heck') ? {noHeck: 'contains "heck" word!'} : null
  }

  ngOnInit(): void {
  }

  display() {
    console.log(this.formTest);
    console.log(this.formTest.getRawValue());
    this.ageFldDisabled = ! this.ageFldDisabled;
    this.btnDisplayTxt = this.ageFldDisabled ? 'Display age ( & console.log)' : 'Hide age ( & console.log)';
  }

  submit() {
    this.btnSubmitTxt += ' done!';
    console.log('Form SUBMITTED!');
  }

}
