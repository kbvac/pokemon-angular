import { Component, Input, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pokemon-form",
  templateUrl: "./pokemon-form.component.html",
  styleUrls: ["./styles.scss"],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;
  // selectedType: string[];

  constructor(
    private pokemonServices: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get PokemonList
    this.types = this.pokemonServices.getPokemonTypeList();
    console.log(
      "les tyoes de pokemons",
      this.pokemon.types,
      this.types.includes("F")
    );
    this.isAddForm = this.router.url.includes("add");
    console.log("Formulaire ajout :", this.isAddForm)
  }

  hasType(type: string): boolean {
    return this.pokemon && this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    try {
      // const isChecked = ($event.target as HTMLInputElement).checked;
      const isChecked = this.pokemon.types.includes(type);
      // Verifier si le types es selectionné
      if (isChecked) {
        console.log(
          type +
            "Il est deja coché et le pokemons a " +
            this.pokemon.types.length +
            " élements",
          this.pokemon.types
        );
        const typeIndex: number = this.pokemon.types.indexOf(type);
        this.pokemon.types.splice(typeIndex, 1);
      } else {
        console.log(
          type +
            "Il est pas coché et le pokemons contient " +
            this.pokemon.types.length +
            " élements",
          this.pokemon.types
        );
        this.pokemon.types.push(type);
      }
    } catch (error) {
      console.log("Erreur", error);
    }
  }

  onSubmit() {
    try {
      if (this.isAddForm) {
        this.pokemonServices
          .addPokemon(this.pokemon)
          .subscribe((pokemon: Pokemon) => this.router.navigate(["/pokemon", pokemon.id]));
      } else {
        this.pokemonServices.updatePokemon(this.pokemon).subscribe(() => {
          this.router.navigate(["/pokemon", this.pokemon.id]);
        });
      }
    } catch (error) {
      console.log("Erreur: ", error);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 3 && !this.hasType(type)) {
      return false;
    } else if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    return true;
  }
}
