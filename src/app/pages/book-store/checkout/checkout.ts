import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkout {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public cartService = inject(CartService);

  public isProcessing = signal(false);

  // Formulario reactivo con validaciones senior
  public checkoutForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
  });

  public onPay(): void {
    if (this.checkoutForm.valid) {
      this.isProcessing.set(true);
      
      // Simulación de pasarela de pago (2 segundos)
      setTimeout(async () => {
        this.cartService.clearCart(); 
        this.isProcessing.set(false);

        // Alerta 
        await Swal.fire({
          title: '¡Pago Confirmado!',
          text: 'Gracias por tu compra. Tus eBooks ya están disponibles en tu biblioteca.',
          icon: 'success',
          confirmButtonText: 'Ir a mis libros',
          confirmButtonColor: '#0d6efd',
          backdrop: `rgba(13, 110, 253, 0.1)`,
          showClass: { popup: 'animate__animated animate__fadeInDown' },
          hideClass: { popup: 'animate__animated animate__fadeOutUp' }
        });

        this.router.navigate(['/book-store/home']);
      }, 2000);

    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}
