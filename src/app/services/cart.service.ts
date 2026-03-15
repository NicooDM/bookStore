import { Injectable, signal, computed, effect } from '@angular/core';
import { BookItem } from '../core/models/book.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  // Estado inicial del carrito (Signal)
  private cartItems = signal<BookItem[]>(this.loadCartFromStorage());

  // Signals computados para acceso público (solo lectura)
  public items = computed(() => this.cartItems());
  public totalItems = computed(() => this.cartItems().length);
  
  public totalPrice = computed(() => 
    this.cartItems().reduce((acc, item) => 
      acc + (item.saleInfo?.listPrice?.amount || 0), 0
    )
  );

  constructor() {
    // Efecto reactivo: persiste en localStorage cada vez que el Signal cambia
    effect(() => {
      localStorage.setItem('cart_ebooks', JSON.stringify(this.cartItems()));
    });
  }

  /**
   * Añade un libro al carrito de forma segura.
   */
  addToCart(book: BookItem): void {
    const isAlreadyInCart = this.cartItems().some(item => item.id === book.id);
    if (!isAlreadyInCart) {
      this.cartItems.update(prev => [...prev, book]);
    }
  }

  /**
   * Elimina un libro del carrito.
   */
  removeFromCart(bookId: string): void {
    this.cartItems.update(prev => prev.filter(item => item.id !== bookId));
  }

  /**
   * Vacía el carrito.
   */
  clearCart(): void {
    this.cartItems.set([]);
  }

  /**
   * Comprueba si un libro ya está en el carrito.
   */
  isInCart(bookId: string): boolean {
    return this.cartItems().some(item => item.id === bookId);
  }

  private loadCartFromStorage(): BookItem[] {
    const savedCart = localStorage.getItem('cart_ebooks');
    if (!savedCart) return [];
    try {
      return JSON.parse(savedCart);
    } catch (e) {
      console.error('Error cargando el carrito desde localStorage', e);
      return [];
    }
  }
}
