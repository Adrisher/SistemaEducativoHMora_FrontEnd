import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from './Curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public cursos: Curso[] = [];
  public curso = new Curso();

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCurso();
  }

  getAllCurso() {
    this.cursoService.getAllCurso().subscribe(res => {
      console.log(res);
      this.cursos = res
    }, error => {
      console.log(error);
    })
  }

  saveCurso() {
    this.cursoService.createCurso(this.curso).subscribe(
      response => console.log('Datos guardados correctamente', response),
      error => console.error('Error al guardar los datos', error)
    );
  }

  // create() {
  //   this.cursoService.create(this.curso)
  //     .subscribe(response => {
  //       this.router.navigate(['dasboard/curso'])
  //     })
  // }


  // deleteCurso(id_curso: number) {
  //   this.cursoService.delete(id_curso).subscribe(() => {
  //   }, error => {
  //     console.log(error);

  //   });
  // }

  // update() {
  //   this.cursoService.update(this.curso)
  //     .subscribe(response => {
  //       this.router.navigate(['curso/curso'])
  //     })
  // }
}
