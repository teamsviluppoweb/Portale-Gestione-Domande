import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'domanda',
    loadChildren: () => import('src/app/modules/domanda/domanda.module').then(m => m.DomandaModule)
  },
  {
    path: 'concorsi',
    loadChildren: () => import('src/app/modules/concorsi/concorsi.module').then(m => m.ConcorsiModule)
  },
];
