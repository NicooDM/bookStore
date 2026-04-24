import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private router = inject(Router);
  private cartService = inject(CartService);
  public authService = inject(AuthService)

  // Exponemos el signal del carrito para el HTML
  public totalCartItems = this.cartService.totalItems;

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/book-store/home']);
  }

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
