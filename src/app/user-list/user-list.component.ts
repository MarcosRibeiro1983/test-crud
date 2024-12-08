import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  userList: User[] = []
  user = new User();
  form: FormGroup;
  isVisible = false;

  constructor(private userService: UserService,
              private fb: FormBuilder,
  ) {

    this.form = fb.group({
      name: new FormControl(''),
      age: new FormControl(''),
      desc: new FormControl(''),
    })

  }


  ngOnInit(): void {
      this.fetch();
  }

  setForm(user: User) {

    this.user = user;
    this.form.controls['name'].setValue(user.name);
    this.form.controls['age'].setValue(user.age);
    this.form.controls['desc'].setValue(user.desc);

  }

  fetch() {
    this.userService.getAll().subscribe({
      next: (res) => {
        this.userList = res;
      }, error: (err) => {
        console.log('err', err);
      }
    })

  }

  update() {

    this.user.name = this.form.controls['name'].value;
    this.user.age = this.form.controls['age'].value;
    this.user.desc = this.form.controls['desc'].value;

    this.userService.update(this.user.id, this.user).subscribe({
      next: (resp) => {
        this.user = resp;
        this.isVisible = false;
        this.fetch();
      }, error: (err) => {
        console.log('err', err);
      }
    })

  }

  delete(id: string) {

    this.userService.delete(id).subscribe({
      next: (res) => {
        this.fetch();
      }
    })
  }

  

}
