import { Component } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from './materia';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {

  public materias: Materia[] = [];
  public materia = new Materia();


  // materiaForm = this.fb.group({
  //   nombre: ['', [Validators.required]],
  //   area: ['', [Validators.required]],
  //   abreviatura: ['', [Validators.required]],
  //   descripcion: ['', [Validators.required]]
  // })

  constructor(private materiaService: MateriaService, private router: Router,
    private fb: FormBuilder) { }

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

  create() {
    this.materiaService.create(this.materia)
      .subscribe(response => {
        this.router.navigate(['materia'])
      })
  }

  update() {
    this.materiaService.update(this.materia)
      .subscribe(response => {
      this.router.navigate(['materia'])
    }) 
  }

  cleanObject() {
  }

  // compararCategoria(o1:Categoria , o2:Categoria):boolean{
  //   if(o1 === undefined && o2 === undefined)return true;
  //   return o1 === null || o2 === null || o1 === undefined || o2 ===undefined ? false: o1.categoria_id == o2.categoria_id;
  // }

}
