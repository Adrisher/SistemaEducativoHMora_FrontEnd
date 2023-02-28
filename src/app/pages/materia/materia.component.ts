import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('materiaModalRef') materiaModalRef: any;

  public materias: Materia[] = [];
  public materia = new Materia();
  public busqueda: string;

  editMateria(materia: Materia) {
    this.materia.id_materia = materia.id_materia
    this.materia.nombre = materia.nombre
    this.materia.descripcion = materia.descripcion
    this.materiaModalRef.nativeElement.querySelector('[name="nombre"]').value = materia.nombre;
    this.materiaModalRef.nativeElement.querySelector('[name="descripcion"]').value = materia.descripcion;
  }


  // materiaForm = this.fb.group({
  //   nombre: ['', [Validators.required]],
  //   area: ['', [Validators.required]],
  //   abreviatura: ['', [Validators.required]],
  //   descripcion: ['', [Validators.required]]
  // })

  constructor(private service: MateriaService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.get()
      .subscribe(response => this.materias = response);
  }

  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    this.service.search(inputValue)
      .subscribe(response => {
        this.materias = response;
        console.log(response)
      });
  }

  deleteMateria(materia: Materia) {
    this.service.delete(materia.id_materia)
      .subscribe(response => {
        this.materias = this.materias.filter(m => m.id_materia != materia.id_materia)
    })
  }

  create() {
    this.service.create(this.materia)
      .subscribe(response => {
        this.get();
        //this.router.navigate(['materia'])
      })
      
  }

  update() {
    this.service.update(this.materia.id_materia, this.materia)
      .subscribe(response => {
        this.materia = new Materia();
        this.get();
      });
  }

  cleanObject() {
  }

  // compararCategoria(o1:Categoria , o2:Categoria):boolean{
  //   if(o1 === undefined && o2 === undefined)return true;
  //   return o1 === null || o2 === null || o1 === undefined || o2 ===undefined ? false: o1.categoria_id == o2.categoria_id;
  // }

}
