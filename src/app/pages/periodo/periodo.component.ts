import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodoService } from 'src/app/services/periodo.service';
import { Periodo } from './periodo';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent {

  @ViewChild('periodoModalRef') periodoModalRef: any;

  public periodos: Periodo[] = [];
  public periodo: Periodo = new Periodo();

  editMateria(periodo: Periodo) {
    this.periodo.id_periodo = periodo.id_periodo
    this.periodo.fecha_fin = periodo.fecha_fin
    this.periodo.fecha_inicio = periodo.fecha_inicio
    this.periodoModalRef.nativeElement.querySelector('[name="fin"]').value = periodo.fecha_fin;
    this.periodoModalRef.nativeElement.querySelector('[name="inicio"]').value = periodo.fecha_inicio;
  }

  constructor(private service: PeriodoService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.get()
      .subscribe(response => this.periodos = response);
  }

  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    this.service.search(inputValue)
      .subscribe(response => {
        this.periodos = response;
        console.log(response)
      });
  }

  deleteMateria(periodo: Periodo) {
    this.service.delete(periodo.id_periodo)
      .subscribe(response => {
        this.periodos = this.periodos.filter(m => m.id_periodo != periodo.id_periodo)
    })
  }

  create() {
    this.service.create(this.periodo)
      .subscribe(response => {
        console.log(this.periodo.fecha_fin)
        this.periodo.fecha_fin;
        this.get();
        this.periodo = new Periodo();
      })
      
  }

  update() {
    this.service.update(this.periodo.id_periodo, this.periodo)
      .subscribe(response => {
        this.periodo = new Periodo();
        this.get();
      });
  }


}
