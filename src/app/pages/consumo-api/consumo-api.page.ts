import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service';
//import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './consumo-api.page.html',
  styleUrls: ['./consumo-api.page.scss']
})
export class AppComponent implements OnInit {
  dogImages: string[] = [];
  books: any[] = [];
  errorMessage: string = '';

  constructor(private examenService: ExamenService/*, private firebaseService: FirebaseService*/) { }

  ngOnInit(): void {
    // Obtener 10 imágenes aleatorias de perros
    for (let i = 0; i < 10; i++) {
      this.examenService.getDog().subscribe((response) => {
        if (response.message) {
          this.dogImages.push(response.message);
        } else {
          this.errorMessage = response.message;
        }
      });
    }

    // Obtener libros de Gutendex
    this.examenService.getBooks().subscribe((response) => {
      if (response.results && response.results.length > 0) {
        this.books = response.results.slice(0, 10);
      } else {
        this.errorMessage = 'No se encontraron libros.';
      }
    });
  }

  /*saveData() {
    this.firebaseService.saveData(this.dogImages, this.books)
      .then(() => {
        console.log('Datos guardados exitosamente');
      })
      .catch((error: any) => {
        console.error('Error al guardar datos: ', error);
      });
  }*/
}