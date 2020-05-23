import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { dataCountry } from 'src/app/core/models/countries.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countries: dataCountry[];
  form: FormGroup;
  sex: string[] = ['male', 'famale']

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.registerService.getCountires().subscribe(data => {
      // console.log('data', data);
      this.countries = data;
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  nombreUsuarioExiste() {
    const username = { username: this.form.value.username };
    this.registerService.usernameExist(username).subscribe(data => {
      console.log(data.data.isExist);
    })
  }

  emailUsuarioExiste() {
    const email = { email: this.form.value.email };
    this.registerService.emailExist(email).subscribe(data => {
      console.log(data.data.isExist);
    })
  }

  confirmasClave() {
    if (this.form.value.password === this.form.value.password_confirm) {
      console.log('clave confirmada')
    } else {
      console.log('clave no confirmada')
    }
  }

  registrarUsuario() {
    if (this.form.valid) {
      let user = this.form.value;
      user.birthday = new Date(user.birthday);
      delete user['password_confirm'];
      // console.log(user);
      this.registerService.createUser(user).subscribe(data => {
        // console.log(data);
        this.form.reset();
      })
    }
  }

}
