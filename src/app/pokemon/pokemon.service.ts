import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Observable, catchError, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { response } from "express";
import { error } from "console";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  private log(pokemonObject: Pokemon[] | Pokemon | Object) {
    console.table(pokemonObject);
  }

  private errorhandler(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  // Recuperer la liste complete de component
  getAllPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemons) => this.log(pokemons)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  // Recuperer un Pokemon en fonction de son ID
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  // Recuperer la liste des types des pokemons
  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }

  // Mettre a jour un Pokemon
  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http.put("api/pokemons", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.errorhandler(error, undefined))
    );
  }

  // Rechercher un Pokemon
  searchPokemon(term: string): Observable<Pokemon[]> {
    if(term.length <=1 ){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.errorhandler(error, null))
    );
  }

  // Ajouter un Pokemon
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.post<Pokemon>("api/pokemons", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.errorhandler(error, null))
    );
  }

  // Supprimer un Pokemon
  deletePokemon(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.errorhandler(error, null))
    );
  }
}
