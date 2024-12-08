import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = environment.apiUrl + 'users/';
  constructor(private httpClient: HttpClient) { }


  create(user: User): Observable<User> {
    return this.httpClient.post<User>( UserService.URL, user )
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>( UserService.URL )
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(UserService.URL + id)
  }

  update(id: string, user: User): Observable<User> {
    return this.httpClient.patch<User>(UserService.URL + id, user )
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(UserService.URL  + id)
  }


}
