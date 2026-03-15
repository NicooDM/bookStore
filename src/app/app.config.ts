import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Configuramos el router con scroll automático y transiciones suaves
    provideRouter(
      routes, 
      withComponentInputBinding(), // Permite recibir params de ruta como inputs (Muy moderno)
      withViewTransitions(),       // Transiciones de vista nativas del navegador
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }) // Scroll arriba al navegar
    ),
    
    // 2. Cliente HTTP para las APIs
    provideHttpClient(),
    
    // 3. Animaciones asíncronas para mejor rendimiento
    provideAnimationsAsync()
  ]
};
