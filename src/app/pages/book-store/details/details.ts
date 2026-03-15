import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map, tap, catchError, of } from 'rxjs';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Details {
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private cartService = inject(CartService);

  // Controlamos el estado de carga
  public isLoading = signal(true);

  public addToCart(): void {
    const bookData = this.book();
    if (bookData) {
      this.cartService.addToCart(bookData);
    }
  }

  /**
   * Reactively fetches the book details based on the ID in the URL.
   * Using 'switchMap' to cancel previous requests if the ID changes quickly.
   */
  public book = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(() => this.isLoading.set(true)),
      switchMap(id => {
        if (!id) {
          this.isLoading.set(false);
          return of(null);
        }
        return this.bookService.getBookById(id).pipe(
          tap(() => this.isLoading.set(false)),
          catchError(() => {
            this.isLoading.set(false);
            return of(null);
          })
        );
      })
    ),
    { initialValue: null }
  );
}
