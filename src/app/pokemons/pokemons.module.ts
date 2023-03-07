import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';

@NgModule({
  declarations: [PokemonCardComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, PokemonsRoutingModule],
})
export class PokemonsModule {}
