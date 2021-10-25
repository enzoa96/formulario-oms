import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  constructor(private listService: ListService) {}

  public groups: Group[] | any[] = [];

  ngOnInit(): void {
    // Cargar groups desde la API
    this.listService.cargarList().subscribe((groups) => {
      this.groups = groups;
      if (this.groups[0]) this.groups[0].active = true;
    });
  }

  // Cuando presione Guardar en el componente hijo table.component.ts
  saveGroups() {
    this.listService.guardar(this.groups).subscribe((data) => {
      console.log(data);
    });
  }
}
