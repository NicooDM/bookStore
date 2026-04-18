import { effect, Injectable, signal } from '@angular/core';

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
  constructor() {
    effect(() => {
      const user = this.currentUser();
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); //actualziamos el localstorage automaticamente
      } else {
        localStorage.removeItem('currentUser');
      }
    });
  }
  //registro

  register(newUser: User): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find((u) => u.email === newUser.email)) {
      return false;
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === email && u.password === password);
     //realizamos la busqueda del usuario registrado
    if (user) {
      this.currentUser.set(user);
      return true; // si el usuario existe devolvemos el true
    }
    return false; // si no devolvemos el false
  }
  logout() {
    this.currentUser.set(null);
  }
}
