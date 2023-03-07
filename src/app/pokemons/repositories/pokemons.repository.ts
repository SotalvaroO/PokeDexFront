import { Injectable } from "@angular/core";
import { DataRepository } from "src/app/data-repository/data.repository";
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({providedIn: 'root'})
export class PokemonsRepository{

    constructor(private repository: DataRepository<Pokemon, number>) {

    }
}