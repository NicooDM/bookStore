import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private router = inject(Router);
  private cartService = inject(CartService);

  // Exponemos el signal del carrito para el HTML
  public totalCartItems = this.cartService.totalItems;

  /**
   * Maneja la búsqueda y redirige a la página de resultados.
   * @param query - Término de búsqueda.
   */
  onSearch(query: string): void {
    if (query && query.trim()) {
      this.router.navigate(['/book-store/search'], { 
        queryParams: { q: query.trim() } 
      });
    }
  }
}
