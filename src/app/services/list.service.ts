import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group, ListResponse } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  getURL = 'http://api.tate.com.ar:8083/api/ABMConfig/ABMConfigListar';
  postURL = 'http://api.tate.com.ar:8083/api/ABMConfig/ABMConfigGuardar';
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRlc2EiLCJuYmYiOjE2MzUxNjYwNjEsImV4cCI6MTYzNTE3NTY2MSwiaWF0IjoxNjM1MTY2MDYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUzNzA1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MzcwNSJ9.wQCpDmMBzv0LJh52RBN04Eyp0y3Qo4ToC7nzPA-VIXY';
  constructor(private http: HttpClient) {}

  cargarList() {
    const headers = new HttpHeaders({
      Authorization: this.token,
      'content-Type': 'application/json',
    });
    const url = this.getURL;
    return this.http.get<ListResponse>(url, { headers }).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  // TODO: Hacer el post
  guardar(groups: Group[]) {
    const headers = new HttpHeaders({
      Authorization: this.token,
      'content-Type': 'application/json',
    });
    const url = this.postURL;
    return this.http.post<ListResponse>(url, groups, { headers });
  }
}
