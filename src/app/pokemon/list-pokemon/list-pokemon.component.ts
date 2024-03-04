import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr"; // load on demand
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { AuthService } from "../../auth.service";
dayjs.locale("fr"); // use French locale globally

// Autoriser les calcules horaires relatif
dayjs.extend(relativeTime);

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: ``,
})
export class ListPokemonComponent implements OnInit {
  title = "ng-pokemon-app";
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | undefined;
  today: any;
  pokemonTypes: string[];

  constructor(
    private router: Router,
    private pokemonServices: PokemonService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    console.table(this.pokemons);
    if(!this.auth.isLoggedIn){
      this.router.navigate(["/login"]);
    }
    this.today = dayjs();
    this.pokemonServices
      .getAllPokemonList()
      .subscribe((pokemons) => (this.pokemons = pokemons));
    this.pokemonTypes = this.pokemonServices.getPokemonTypeList();
    // this.selectPokemon(this.pokemons);
  }

  // Fonction de selection de pokemon via la methode find
  selectPokemon(pokemonId: string) {
    try {
      console.log(pokemonId);
      this.selectedPokemon = this.pokemons.find(
        (pokemon) => pokemon?.id === +pokemonId
      );
      // if (this.selectedPokemon) {
      //   return this.selectedPokemon?.name;
      // }
      // return "pas d'id correspondant";
    } catch (error) {
      console.error(error);
      // return "erreur dans d'id";
    }
  }

  // Afficher les specialites de chaque pokemons
  displaySpecs(specsArray: Array<string>): string {
    const customDisplayArray: string[] = [];
    specsArray.forEach((spec: string) => {
      if (spec === "Feu") {
        customDisplayArray.push("🔥");
      } else if (spec === "Poison") {
        customDisplayArray.push("☠️");
      } else if (spec === "Plante") {
        customDisplayArray.push("🍀");
      } else if (spec === "Eau") {
        customDisplayArray.push("💦");
      } else if (spec === "F") {
        customDisplayArray.push("💦");
      } else if (spec === "Normal") {
        customDisplayArray.push("👁️");
      } else if (spec === "Insecte") {
        customDisplayArray.push("🐜");
      } else if (spec === "Vol") {
        customDisplayArray.push("🦅");
      } else if (spec === "Electrik") {
        customDisplayArray.push("⚡️");
      } else {
        customDisplayArray.push("Inconnu");
      }
    });

    // Joindre les éléments du tableau personnalisé en une seule chaîne
    return customDisplayArray.join(" + ");
  }

  // Afficher la page /pokemon/:id
  gotoPokemon(id: number) {
    try {
      this.router.navigate([`/pokemon/${id}`]);
    } catch (error) {
      console.log(error);
    }
  }
}
