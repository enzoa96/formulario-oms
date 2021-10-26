import { Component, OnInit, Input } from '@angular/core';
import { Group, Elemento } from 'src/app/components/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  @Input() group!: Group; // Grupo que nos pasa el componente padre para renderizar sus elementos
  @Input() onSave!: () => void; // Callback para notificar al componente padre que queremos guardar todos los grupos

  private editedElements: any[] = [];

  // Cuando el usuario escribe en un input
  onKey(event: any, elemento: any) {
    const { name, value } = event.target;

    if (!elemento.original) {
      elemento.original = { ...elemento };
      this.editedElements.push(elemento);
    }

    elemento[name] = value;
  }

  ngOnInit(): void {}
}
