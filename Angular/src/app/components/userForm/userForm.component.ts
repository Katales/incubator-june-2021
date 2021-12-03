import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interface";
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, FormArray} from "@angular/forms";

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

  user_form = this.fb.group({
    id: {value: '', disabled: true},
    name: '',
    username: '',
    email: '',
  });

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      data['users'].forEach( (user: any, i: number) => {
        delete user.address;
        delete user.company;
        delete user.phone;
        delete user.website;
        this.users.push(<IUser>user);
      });
      this.fillUser_form(this.selUserId);
    });

    this.chooseUser_form.controls['userSelector'].valueChanges.subscribe(
      selUserId => {
        this.selUserId = + selUserId;
        this.fillUser_form(this.selUserId);
      }
    );


  }

  btnSet() {
    this.chooseUser_form.patchValue({userSelector: 5});
  }

  selChange(e: any) {
    console.log(e);
  }

  btnShow(): void {
    console.log(this.chooseUser_form.value);
    console.log(this.user_form.value);
    console.log('>>', this.user_form.value['id'], '<<');
    console.log(this.users[1]);
    this.users[1].name = 'Winfried Scotter';
    this.user_form
  }

  btnEdit(): void {
    this.isEditMode = true;
    console.log('Edit mode:', this.isEditMode);
  }

  btnSave(): void {
    this.isEditMode = false;
    console.log('Edit mode:', this.isEditMode);
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
}
