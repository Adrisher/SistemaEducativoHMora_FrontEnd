import { Component, OnInit } from '@angular/core';
import { Calificacion } from './calificacion';
import { CalificacionService } from '../../services/calificacion.service';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html'
})
export class CalificacionComponent implements OnInit {

  lista_calificaciones: Calificacion[]=[];

  constructor(private calificacionService: CalificacionService) { }

  selectedCalificacion: Calificacion=new Calificacion();

  idCapEdit:any;
  openForEdit(calificacion: Calificacion){
    this.selectedCalificacion=calificacion;
    this.idCapEdit = this.selectedCalificacion.id_calificacion;
    console.log("es la id " + this.idCapEdit)
    console.log(this.selectedCalificacion)
  }
  actGuardad(){
    this.calificacionService.agregarActualizar(this.selectedCalificacion).subscribe(
      resultado => console.log(resultado),
      error => console.log(error)
    );
  }

  update(){
    this.calificacionService.actaulizar(this.idCapEdit,this.selectedCalificacion).subscribe(
      resultado => console.log(resultado),
      error => console.log(error)
    );
  }

  addOrEdit(){
    if(this.selectedCalificacion.id_calificacion ==0){
      this.selectedCalificacion.id_calificacion=this.lista_calificaciones.length +1;
      this.lista_calificaciones.push(this.selectedCalificacion)
      this.calificacionService.Create(this.selectedCalificacion).subscribe(
        dato => {
          console.log(this.selectedCalificacion)
        },error => console.log(error)
      );
      console.log("creado")
      
    }
    console.log("fuera de if")
    console.log(this.selectedCalificacion.id_calificacion)
    this.calificacionService.agregarActualizar(this.selectedCalificacion).subscribe(
      resultado => console.log(resultado),
      error => console.log(error)
    );
    this.selectedCalificacion=new Calificacion();
    console.log(this.selectedCalificacion)
  }

  guardar(){
    this.calificacionService.Create(this.selectedCalificacion).subscribe(
      dato => {
        console.log
      },error => console.log(error)
    );
  }


  ngOnInit(): void {
    this.listarCalificaciones();

    
  }

  private listarCalificaciones(){
    this.calificacionService.getCalificaciones().subscribe(
      lista_calificaciones=> this.lista_calificaciones =lista_calificaciones
    );
  }

   

   

}
