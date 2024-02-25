import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pipes/pokemon-type-color.pipe";
import { PowerIllustratorPipe } from "./pipes/power-illustrator.pipe";
import { RouterModule, Routes } from "@angular/router";
import { DateFromNowFormatterPipe } from "./pipes/date-from-now-formatter.pipe";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoadervComponent } from './loaderv/loaderv.component';
import { authGuard } from "../auth.guard";

// Declaration des routes pokmeons
const routes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  {
    path: "pokemon/add",
    component: AddPokemonComponent,
  },
  {
    path: "pokemon/:id",
    component: DetailPokemonComponent,
  },

  {
    path: "edit/pokemon/:id",
    component: EditPokemonComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PowerIllustratorPipe,
    DateFromNowFormatterPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoadervComponent,
  ],
  // injection de service dans le pokemon module
  providers: [PokemonService],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PokemonModule {}
