import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Country } from '../../models/countries.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  getCountires() {
    return this.http.get<Country>(`${environment.url_api}/countries`)
      .pipe(
        map((res) => {
          return res.data;
        })
      )
  }

  emailExist(email) {
    return this.http.post<any>(`${environment.url_api}/users/validate/email`, email);
  }

  usernameExist(username) {
    return this.http.post<any>(`${environment.url_api}/users/validate/username`, username);
  }

  createUser(user) {
    return this.http.post<User>(`${environment.url_api}/auth/register`, user);
  }
}
