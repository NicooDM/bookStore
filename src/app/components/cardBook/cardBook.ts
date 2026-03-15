import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookItem } from '../../core/models/book.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card-book',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cardBook.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBook {
  private cartService = inject(CartService);
  
  // Input reactivo (Signal)
  book = input.required<BookItem>();

  public addToCart(event: Event): void {
    event.stopPropagation(); // Evitamos que el click navegue a detalles
    this.cartService.addToCart(this.book());
  }

  // Propiedades calculadas (Computed) para optimizar el rendimiento
  thumbnail = computed(() => 
    this.book().volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x220?text=Sin+Portada'
  );

  authors = computed(() => 
    this.book().volumeInfo.authors?.join(', ') || 'Autor desconocido'
  );

  title = computed(() => this.book().volumeInfo.title);
  
  category = computed(() => this.book().volumeInfo.categories?.[0] || 'Literatura');

  price = computed(() => {
    const amount = this.book().saleInfo?.listPrice?.amount;
    const currency = this.book().saleInfo?.listPrice?.currencyCode || 'USD';
    return amount ? { amount, currency } : null;
  });

  rating = computed(() => this.book().volumeInfo.averageRating);
}
