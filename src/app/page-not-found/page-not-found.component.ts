import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div
      class="text-2xl w-full h-screen flex flex-col justify-center items-center bg-transparent"
    >
      <!-- Image -->
      <img
        class="w-64 h-64"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/231.png"
      />
      <!-- Texte -->
      <p class="text-3xl text-gray-500">Hey, cette page n'existe pas</p>
      <!-- Redirection -->
      <button routerLink="/pokemons" class="mt-5 text-xl uppercase">Retour</button>
    </div>
  `,
  styles: ``,
})
export class PageNotFoundComponent {}
