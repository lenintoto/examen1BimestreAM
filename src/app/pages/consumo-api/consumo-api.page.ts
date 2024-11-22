import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-root',
  templateUrl: './consumo-api.page.html',
  styleUrls: ['./consumo-api.page.scss']
})
export class AppComponent implements OnInit {
  dogImage: string = '';
  robotImage: string = '';
  books: any;
  errorMessage: string ='';

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    // Obtener imagen aleatoria de perro
    this.examenService.getDog().subscribe((response) => {
      console.log('Respuesta de perro:', response);
      if (response.message) {
        this.dogImage = response.message;
      } else {
        this.errorMessage = response.message;
      }
    });
  
    // Obtener libros de Gutendex
    this.examenService.getBooks().subscribe((response) => {
      console.log('Respuesta de libros:', response); // Log para verificar la respuesta
      if (response.results && response.results.length > 0) {
        this.books = response.results;  // Asignamos los datos de los libros
      } else {
        this.errorMessage = 'No se encontraron libros.';
      }
    });
  }
  
}
