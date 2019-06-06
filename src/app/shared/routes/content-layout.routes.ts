import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'domande',
    loadChildren: () => import('src/app/modules/domande/domande.module').then(m => m.DomandeModule)
  },
  {
    path: 'concorsi',
    loadChildren: () => import('src/app/modules/concorsi/concorsi.module').then(m => m.ConcorsiModule)
  },
];
