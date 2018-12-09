import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paths } from './app-paths';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PathResolveService } from './path-resolve.service';
import { config } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.home
  },
  {
    path: paths.home,
    component: HomeComponent
  },
  {
    path: paths.about,
    component: AboutComponent
  },
  {
    path: paths.contact,
    component: ContactComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
