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
    // usersArr: this.fb.array([])
  });

  user_form = this.fb.group({
    id: { value: '', disabled: true},
    name: '',
    username: '',
    email: '',
  });

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      this.users = data['users'];
      // fill FormArray controls
      // for (let user of this.users) {
      //   const usersArrHnd = (this.chooseUser_form.get('usersArr') as FormArray);
      //   usersArrHnd.push(this.fb.control(user.username));
      // }
    });
    this.chooseUser_form.controls['userSelector'].valueChanges.subscribe(
      val => {
        val = + val;
        console.log(val);
        if (!val) return; else val -= 1;
        this.user_form.setValue(
          { id: this.users[val].id,
            username: this.users[val].username,
            name: this.users[val].name,
            email: this.users[val].email
          }
        );
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
    this.users[1].name = 'Winfried Scotter';
    this.user_form
  }

  onArrFld(i: number) {
    console.log('ArrFld:', <IUser>this.chooseUser_form.value['usersArr'][i],
                `users[${i}]:`, this.users[i].username
    );
  }
}
