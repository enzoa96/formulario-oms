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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRlc2EiLCJuYmYiOjE2MzUyNTk2MDEsImV4cCI6MTYzNTI2OTIwMSwiaWF0IjoxNjM1MjU5NjAxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUzNzA1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MzcwNSJ9.9vnE-cFU3VObylZXX0p-FM52M7TMucHJZHV0I74zJ4w';
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
