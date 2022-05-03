import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { GenresComponent } from './genres/genres.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [MoviesComponent, ActorsComponent, GenresComponent],
  exports: [MoviesComponent]
})
export class MoviesModule {}
