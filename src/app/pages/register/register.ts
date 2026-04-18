import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // Añadido RouterLink para el HTML
  templateUrl: './register.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  

  public registerForm: FormGroup = this.fb.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.passwordMatchValidator },
  );

  /**
   * Validador para asegurar que las contraseñas coincidan.
   */
  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) return null;

    return password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
  }

  public onRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { fullName, email, password } = this.registerForm.value;
    const success = this.authService.register({
      name: fullName,
      email,
      password,
    });
    if (success) {
     
      Swal.fire({
        icon: 'success',
        title: 'Cuenta creada!',
        text: 'Ahora puedes iniciar seccion',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/auth/login']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: 'usuario o password ya existe!',
      });
    }
  }
}
