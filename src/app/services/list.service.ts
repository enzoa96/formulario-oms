import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group, ListResponse } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  cargarList() {
    const url = 'https://615c7bc7c2981300177361f2.mockapi.io/api/v1/toms';
    return this.http.get<ListResponse>(url).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  // TODO: Hacer el post
  guardar(groups: Group[]) {}
}
