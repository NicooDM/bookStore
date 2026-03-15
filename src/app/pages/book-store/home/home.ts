import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookService } from '../../../services/book.service';
import { ListBook } from '../../../components/listBook/listBook';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ListBook],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  class Home {
  private bookService = inject(BookService);

  // Cargamos libros por categorías para mostrar múltiples listados
  public featuredBooks = toSignal(
    this.bookService.searchBooks('bestsellers', 4),
    { initialValue: [] }
  );

  public newArrivals = toSignal(
    this.bookService.searchBooks('fiction', 4),
    { initialValue: [] }
  );
}
