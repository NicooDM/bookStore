import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, map, of } from 'rxjs';
import { BookItem, GoogleBooksResponse } from '../core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = environment.base_url;

  /**
   * Busca libros en Google Books API por query (título, autor, etc.)
   * @param query - Término de búsqueda
   * @param maxResults - Límite de resultados (default 10)
   * @returns Observable con lista de libros (BookItem[])
   */
  searchBooks(query: string, maxResults: number = 20): Observable<BookItem[]> {
    if (!query.trim()) return of([]);

    const params = new HttpParams()
      .set('q', query)
      .set('maxResults', maxResults.toString());

    return this.http.get<GoogleBooksResponse>(this.apiUrl, { params }).pipe(
      map(response => response.items || []),
      catchError(error => {
        console.error('Error buscando libros en Google Books:', error);
        return of([]); // Retornamos un array vacío si hay error para no romper la app
      })
    );
  }

  /**
   * Obtiene los detalles de un libro específico por su ID
   */
  getBookById(id: string): Observable<BookItem | null> {
    return this.http.get<BookItem>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Error obteniendo libro con id ${id}:`, error);
        return of(null);
      })
    );
  }
}
