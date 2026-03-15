import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map, tap, catchError, of } from 'rxjs';
import { BookService } from '../../services/book.service';
import { CardBook } from '../../components/cardBook/cardBook';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, CardBook, RouterLink],
  templateUrl: './search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Search {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  // Variable para controlar el estado de carga (usaremos RxJS para esto)
  public isLoading = signal(false);

  /**
   * Creamos un Signal reactivo que depende de los queryParams.
   * Cada vez que el parámetro 'q' cambie en la URL, se disparará una nueva búsqueda automáticamente.
   * 'switchMap' cancela la búsqueda anterior si se inicia una nueva, evitando problemas de concurrencia.
   */
  public searchResults = toSignal(
    this.route.queryParams.pipe(
      map(params => params['q'] || ''),
      tap(() => this.isLoading.set(true)),
      switchMap(query => {
        if (!query.trim()) {
          this.isLoading.set(false);
          return of([]);
        }
        return this.bookService.searchBooks(query).pipe(
          tap(() => this.isLoading.set(false)),
          catchError(() => {
            this.isLoading.set(false);
            return of([]);
          })
        );
      })
    ),
    { initialValue: [] }
  );

  // Obtenemos el término actual para mostrarlo en el título
  public currentQuery = toSignal(
    this.route.queryParams.pipe(map(params => params['q'] || '')),
    { initialValue: '' }
  );
}
