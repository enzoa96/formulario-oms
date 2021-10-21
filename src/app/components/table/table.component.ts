import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.cargarList().subscribe((resp) => {
      console.log(resp);
    });
  }
}
