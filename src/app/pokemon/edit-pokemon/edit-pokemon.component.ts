import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-edit-pokemon",
  templateUrl: "./edit-pokemon.component.html",
  styles: ``,
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private pkServices: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pkServices.getPokemonById(+pokemonId).subscribe((pokemon)=> this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }
}
