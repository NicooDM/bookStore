import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-book',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cartBook.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CartBook {
  public cartService = inject(CartService);

  // Exponemos las propiedades del servicio para el HTML
  public cartItems = this.cartService.items;
  public totalItems = this.cartService.totalItems;
  public totalPrice = this.cartService.totalPrice;

  public remove(id: string): void {
    this.cartService.removeFromCart(id);
  }

  /**
   * Vacía el carrito con confirmación profesional usando SweetAlert2.
   */
  public clear(): void {
    Swal.fire({
      title: '¿Vaciar el Carrito?',
      text: 'Se eliminarán todos los libros seleccionados y no se podrá deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'No, mantener libros',
      confirmButtonColor: '#dc3545', // Color peligro de Bootstrap
      cancelButtonColor: '#6c757d',
      reverseButtons: true,
      backdrop: `rgba(220, 53, 69, 0.1)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.clearCart();
        Swal.fire({
          title: 'Carrito vacío',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }
}
