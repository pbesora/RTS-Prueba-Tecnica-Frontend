import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate:[AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'movies',
    canActivate:[AuthGuardService],
    component: MovieListComponent
  },
  {
    path: 'series',
    canActivate:[AuthGuardService],
    component: SeriesListComponent
  },
  {
    path: 'movies/:id',
    canActivate:[AuthGuardService],
    component: MovieDetailsComponent
  },
  {
    path: 'series/:id',
    canActivate:[AuthGuardService],
    component: SeriesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
