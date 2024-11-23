import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiDog = 'https://dog.ceo/api/breeds/image/random';
  private apiGutendex = 'https://gutendex.com/books/?ids=1,2,3,4,5,6,7,8,9,10';

  constructor(private http: HttpClient) { }

  getDog(): Observable<any> {
    return this.http.get<any>(this.apiDog).pipe(
      catchError(error => {
        console.error('Error al obtener perro', error);
        return of({ message: 'Error al obtener la imagen' });
      })
    );
  }
  
  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiGutendex).pipe(
      catchError(error => {
        console.error('Error al obtener libros', error);
        return of({ results: [] });
      })
    );
  }
}