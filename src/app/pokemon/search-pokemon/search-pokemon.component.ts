import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styles: ``,
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemoms$: Observable<Pokemon[]>;
  constructor(
    private router: Router,
    private pokemonsService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemoms$ = this.searchTerms.pipe(
      // recuperer la valeur du champ chaque 300ms
      debounceTime(300),
      // Lancer des requetes uniquement si les termes actuel change
      distinctUntilChanged(),
      //
      switchMap((term) => this.pokemonsService.searchPokemon(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
