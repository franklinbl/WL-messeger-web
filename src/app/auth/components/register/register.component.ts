import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/core/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countries: any[] = [];

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.registerService.getCountires().subscribe(data => {
      // console.log(data);
      this.countries = data;
    })
  }

}
