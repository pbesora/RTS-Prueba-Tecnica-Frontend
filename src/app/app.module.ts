import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from "@angular/forms";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieListComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    SerieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
