import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'concorsi',
    loadChildren: () => import('src/app/modules/concorsi/concorsi.module').then(m => m.ConcorsiModule)
  },
];


export const DOMANDE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/domande/domande.module').then(m => m.DomandeModule)
  },

];
