import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsReponse } from "@/pokemons/interface/pokemon-response";
import { SimplePokemon } from "@/pokemons/interface/simple-pokemon";




export const metadata = {
 title: 'favorites',
 description: 'favorites',
};

export default async function PokemonsPage() {

  
  
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons Favorites <small>estático</small></span>
      
      <PokemonGrid pokemons={ [] } />

    </div>
  );
}