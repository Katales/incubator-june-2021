import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

import {IUser} from "../../interface";
import {USERNAME} from "../../constants";

@Component({
  selector: 'app-form-react',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})


export class UserFormComponent implements OnInit {

  users: IUser[] = [];
  selUserId: number = 3;
  isEditMode: boolean = false;

  chooseUser_form = new FormGroup({
    userSelector: new FormControl(this.selUserId),
    // usersArr: this.fb.array([])
  });

  // using FormBuilder
  user_form = this.fb.group({
    id:       [ {value: '', disabled: true}, [Validators.required]],
    name:     [ {value: '', disabled: true}, [Validators.required]],
    username: [ {value: '', disabled: true}, [
      Validators.required,
      Validators.minLength(4),
      this.chkUsername()]
    ],
    email:    [ {value: '', disabled: true}, [Validators.required]],
  });
  // -----
  // user_form = new FormGroup({
  //   id: new FormControl({value: '', disabled: true}, [
  //     Validators.required]
  //   ),
  //   name: new FormControl({value: '', disabled: true}, [
  //     Validators.required]
  //   ),
  //   username: new FormControl({value: '', disabled: true}, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     this.chkUsername()]
  //   ),
  //   email: new FormControl({value: '', disabled: true}, [
  //     Validators.required]
  //   )
  // });


  constructor(
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      data['users'].forEach((user: any, i: number) => {
        delete user.address;
        delete user.company;
        delete user.phone;
        delete user.website;
        this.users.push(<IUser>user);
      });
      this.fillUser_form(this.selUserId);
    });

    this.chooseUser_form.controls['userSelector'].valueChanges.subscribe(
      (selUserId) => {
        // PREVIOUS VALUE of control is stored on a form level before event bubbled there
        // console.log('prev.value:', this.chooseUser_form.value['userSelector']);
        this.selUserId = +selUserId;
        this.fillUser_form(this.selUserId);
      }
    );


  }

  btnSet() {
    this.chooseUser_form.patchValue({userSelector: 5});
  }

  btnShow(): void {
    console.log(this.chooseUser_form.value);
    console.log(this.user_form);
    console.log('>>', this.user_form.value['id'], '<<');
    console.log(this.users[1]);
    this.users[1].name = 'Winfried Scotter';
    this.user_form
  }

  btnEdit(): void {
    this.enterEditMode();
  }

  btnSave(): void {
    if (this.user_form.invalid) {
      return;
    }
    if (!this.user_form.pristine) {
      this.users[this.selUserId - 1] = this.user_form.getRawValue();
      this.user_form.markAsPristine();
    }
    this.leaveEditMode();
  }

  btnCancel(): void {
    if (this.user_form.dirty) {
      this.fillUser_form(this.selUserId);
    }
    this.leaveEditMode();
  }

  submitStub(): boolean {
    console.log('submit strangled');
    return false;
  }

  getErrorText(controlNm: string): string | null {
    if (!this.user_form.controls[controlNm].errors) {
      return null;
    }
    let ret: string = '';
    const controlErrs: ValidationErrors | null = this.user_form.controls[controlNm].errors;
    // @ts-ignore
    const errKeys = Object.keys(controlErrs as Object);
    // console.log('Control\'s errors', controlErrs);
    // console.log(errKeys);
    for (const errKey of errKeys) {
      switch (errKey) {
        case 'required':
          ret += 'This field is required.'
          break;
        case 'minlength':
          // @ts-ignore
          ret += ` Can't be shorter than ${controlErrs[errKey]['requiredLength']} characters.`;
          break;
        case 'startsNonCap':
          ret += ' Should start with capital letter.';
          break;
        case 'inclForbSymbols':
          ret += ' Only letters are allowed.'
          break;
        case 'isForbName':
          // @ts-ignore
          ret += ` Word "${controlErrs[errKey]}" is forbidden.`
          break;
        default:
          ret += 'Error.'
      }
    }
    this.user_form.setErrors({error: "This form can't be saved"});
    return ret.trim();
  }

  private chkUsername(): ValidatorFn {
    // checks:
    // 1. starts with capital letter (startsNonCap:)
    // 2. includes letters and digits (inclForbSymbols:)
    // 3. doesn't equal to forbidden name 'ales' (isForbName:)
    return (control: AbstractControl): ValidationErrors | null => {
      let ret: Object = {};
      if (!control.value || control.value.length === 0)
        return null;
      if (!USERNAME.startsCapLetter.test(control.value)) {
        ret = {...ret, startsNonCap: true};
      }
      if (!USERNAME.allowedSymbols.test(control.value)) {
        ret = {...ret, inclForbSymbols: true};
      }
      if ( 'ales' === control.value.toLowerCase()) {
        ret = {...ret, isForbName: 'ales'};
      }
      return JSON.stringify(ret) !== '{}' ? ret : null;
    }
  }

  private fillUser_form(userId: number): void {
    if (userId) {
      userId -= 1;
      this.user_form.setValue(
        <IUser>this.users[userId]
      );
    } else {
      this.user_form.setValue(
        {id: '', username: '', name: '', email: ''}
      );
    }
  }

  private enterEditMode() {
    this.user_form.controls['name'].enable();
    this.user_form.controls['username'].enable();
    this.user_form.controls['email'].enable();
    this.isEditMode = true;
    this.chooseUser_form.controls['userSelector'].disable();
    // console.log('Edit mode:', this.isEditMode);
  }

  private leaveEditMode() {
    this.user_form.controls['name'].disable();
    this.user_form.controls['username'].disable();
    this.user_form.controls['email'].disable();
    this.isEditMode = false;
    this.chooseUser_form.controls['userSelector'].enable();
    // console.log('Edit mode:', this.isEditMode);
  }

  // btnShowUserForm(): void {
  //   console.log(this.user_form);
  // }

}

