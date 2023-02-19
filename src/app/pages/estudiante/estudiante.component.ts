import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-estudiante',
    templateUrl: './estudiante.component.html',
    styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

    constructor( private route: Router) { }
    ngOnInit(): void {
    }
}
