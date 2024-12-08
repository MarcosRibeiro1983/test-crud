import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static URL = environment.apiUrl + 'product/';
  constructor(private httpClient: HttpClient) { }


  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>( ProductService.URL + 'create', product  )
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>( ProductService.URL + 'find/all' )
  }

  getById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(ProductService.URL + id)
  }

  update(id: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(ProductService.URL + id, product )
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(ProductService.URL  + id)
  }


}
