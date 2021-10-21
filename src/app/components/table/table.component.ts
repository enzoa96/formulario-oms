import { Component, OnInit } from '@angular/core';
import { ReqResResponse } from 'src/app/models/reqres-response';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private listService: ListService) {}

  public usuarios: any = [];

  ngOnInit(): void {
    this.listService.cargarList().subscribe((usuarios) => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }
}
