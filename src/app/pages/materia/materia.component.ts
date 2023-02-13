import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from './materia';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {

  public materias: Materia[] = [];

  constructor(private materiaService: MateriaService, private route: Router) { }

  ngOnInit(): void {
    this.materiaService.get()
      .subscribe(response => this.materias = response);
  }

  deleteMateria(materia: Materia) {
    this.materiaService.delete(materia.id_materia)
      .subscribe(response => {
        this.materias = this.materias.filter(m => m.id_materia != materia.id_materia)
    })
  }

}
