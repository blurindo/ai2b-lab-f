import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsList } from './items-list';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'https://labjwt.zecer.wi.zut.edu.pl/api';

  constructor(
    private http: HttpClient,
  ) { }

  public items(): Observable<ItemsList> {
    return this.http.get<ItemsList>(`${this.baseURL}/items`)
  }

  public users(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`)
  }
}
