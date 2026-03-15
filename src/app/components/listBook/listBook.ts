import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItem } from '../../core/models/book.model';
import { CardBook } from '../cardBook/cardBook';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-book',
  standalone: true,
  imports: [CommonModule, CardBook, RouterLink],
  templateUrl: './listBook.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBook {
  /**
   * Título de la sección de libros.
   */
  public title = input<string>('Selección para ti');

  /**
   * Lista de libros a mostrar (obligatorio).
   */
  public books = input.required<BookItem[]>();

  /**
   * Opción para mostrar u ocultar el enlace de "Ver Todo".
   */
  public showViewAll = input<boolean>(true);

  /**
   * Ruta a la que redirigirá el botón de "Ver Todo".
   */
  public viewAllLink = input<string>('/book-store/search');
}
