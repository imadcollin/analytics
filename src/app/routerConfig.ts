import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiComponent } from './api/api.component';
import { WordDetailsComponent } from './word-details/word-details.component';

export const appRoutes: Routes = [
        {
      path: 'header',
      component: HeaderComponent
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
    } 
  ];

  //export default appRoutes;
