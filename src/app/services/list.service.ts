import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  cargarList() {
    const url = 'http://api.tate.com.ar:8083/api/ABMConfig/ABMConfigListar ';
    return this.http.get(url);
  }
}
