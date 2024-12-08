import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {


  form: FormGroup;


  constructor(private userService: UserService,
              private fb: FormBuilder,
  ) {

    this.form = fb.group({
      name: new FormControl(''),
      age: new FormControl(''),
      desc: new FormControl(''),
    })

  }

  title = 'test-crud';

  create() {

    const user = new User();

    user.name = this.form.controls['name'].value;
    user.age = this.form.controls['age'].value;
    user.desc = this.form.controls['desc'].value;

    this.userService.create(user).subscribe({
      next: (resp) => {
        console.log('criado com sucesso', resp);
      }, error: (error) => {
        console.log('error', error);
      }
    })

    console.log('send', user);
    

  }

}
