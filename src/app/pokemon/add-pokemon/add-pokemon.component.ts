import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-add-pokemon",
  template: `
    <p>Ajouter un pokemon</p>
    <app-pokemon-form [pokemon]="pokemon" />
  `,
  styles: ``,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
