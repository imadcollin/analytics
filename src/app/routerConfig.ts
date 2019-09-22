import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiComponent } from './api/api.component';
import { WordDetailsComponent } from './word-details/word-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
        {
      path: '',
      component: ApiComponent
    } ,
        {
      path: 'footer',
      component: FooterComponent
    } ,
        {
      path: 'Api',
      component: ApiComponent
    } ,
        {
      path: 'detail',
      component: WordDetailsComponent
    } ,
        {
      path: '**',
      component:PageNotFoundComponent
    } 
  ];

  //export default appRoutes;
