import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/components/models';
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

  @Input() group!: Group; // Grupo que nos pasa el componente padre para renderizar sus elementos

  // Cuando presiona el boton grabar
  Grabar() {
    for (let element of this.group.elementos) {
      if ((element as any).original) {
        delete (element as any).original;
      }
    }
  }

  // Cuando presiona el boton cancelar
  Cancelar() {
    // Deshacer modificaciones
    for (let element of this.group.elementos) {
      const original = (element as any).original;

      if (original) {
        element.codigo = original.codigo;
        element.descripcion = original.descripcion;
        element.valor = original.valor;
        delete (element as any).original;
      }
    }
  }
}
