import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: `
    <div class="flex flex-col justify-center items-center h-full">
      <p>Ajouter un pokemon</p>
      <app-pokemon-form [pokemon]="pokemon" />
    </div>
  `,
  styles: ``,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
