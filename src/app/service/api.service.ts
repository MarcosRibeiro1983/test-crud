import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  create(user: User): Observable<User> {
    return this.httpClient.post<User>( this.baseUrl + 'user', user  )
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>( this.baseUrl + 'users' )
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + 'user/' + id)
  }

  update(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + 'user/' + id, user )
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl + 'user/' + id)
  }


}
