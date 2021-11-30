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

  users: IUser[];
  // userSel = new FormControl(1);

  chooseUser_form = new FormGroup({
    userSelector: new FormControl( 0),
    usersArr: this.fb.array([
    ])

  });


  selUser: IUser = <IUser>{};

  user_form = new FormGroup({
    selUserId: new FormControl(this.selUser.id),
    selUserName: new FormControl(this.selUser.name),
    selUserUsername: new FormControl(this.selUser.username),
    selUserEmail: new FormControl(this.selUser.email),
  });

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      this.users = data['users'];
      for (let user of this.users) {
        const usersArrHnd = (this.chooseUser_form.get('usersArr') as FormArray);
        usersArrHnd.push(this.fb.control(user.username));
      }
    });

    this.selUser.id = 1;

  }

  btnSet() {
    this.chooseUser_form.patchValue({userSelector: 5});
  }

  selChange(e: any) {
    console.log(e);
  }

  btnShow(): void {
    console.log(this.chooseUser_form.controls['userSelector'].value);
    console.log(this.chooseUser_form.controls);
  }
  onArrFld(i: number) {
    console.log('ArrFld:', <IUser>this.chooseUser_form.controls['usersArr'].value[i],
                `users[${i}]:`, this.users[i].username
    );
  }
}
