import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: ``,
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[];
  activePokemon: Pokemon | undefined;
  pokemonId: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonServices: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonServices
      .getAllPokemonList()
      .subscribe((pokemons) => (this.pokemons = pokemons));
    this.pokemonId = this.route.snapshot.paramMap.get("id");
    if (this.pokemonId) {
      this.pokemonServices
        .getPokemonById(+this.pokemonId)
        .subscribe((pokemon) => (this.activePokemon = pokemon));
    }
  }

  // Afficher la page tout les pokemons
  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
  // Naviguer vers la page Edit
  goToDetailPage(pokemon: Pokemon) {
    this.router.navigate(["edit/pokemon/", pokemon?.id]);
  }

  // Supprimer un pokemon
  deletePokemon(pokemon: Pokemon) {
    this.pokemonServices.deletePokemon(pokemon.id).subscribe(()=> this.router.navigate(['/pokemons']));
  }
}
