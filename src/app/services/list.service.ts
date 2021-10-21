import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqResResponse } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  cargarList() {
    const url = 'https://reqres.in/api/users';
    return this.http.get<ReqResResponse>(url).pipe(
      map((resp) => {
        return resp.data;
      })
    );
  }
}
