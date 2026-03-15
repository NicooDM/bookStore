import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Definimos el formulario con validaciones senior
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  public onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Iniciando sesión con:', this.loginForm.value);
      // Simulación de login exitoso y redirección
      this.router.navigate(['/book-store/home']);
    } else {
      // Marcamos todo como 'touched' para mostrar los errores de validación
      this.loginForm.markAllAsTouched();
    }
  }
}
