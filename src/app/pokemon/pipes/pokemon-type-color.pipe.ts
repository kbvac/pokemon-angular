import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'bg-red-300';
        break;
      case 'Eau':
        color = 'bg-blue-300';
        break;
      case 'Plante':
        color = 'bg-green-300';
        break;
      case 'Insecte':
        color = 'bg-orange-300';
        break;
      case 'Normal':
        color = 'bg-gray-300';
        break;
      case 'Vol':
        color = 'bg-blue-300';
        break;
      case 'Poison':
        color = 'bg-purple-300';
        break;
      case 'Fée':
        color = 'bg-pink-300';
        break;
      case 'Psy':
        color = 'bg-purple-300';
        break;
      case 'Electrik':
        color = 'bg-yellow-300';
        break;
      case 'Combat':
        color = 'bg-orange-300';
        break;
      default:
        color = 'bg-black';
        break;
    }
  
    return 'w-fit p-2 hover:scale-95 rounded-full '+ color;
  
  }
}