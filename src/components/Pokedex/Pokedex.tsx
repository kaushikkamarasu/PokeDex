import { PokemonSchema } from '../../types/PokemonSchema';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Pokecards from '../Pokecards/Pokecards';
import Searchbox from '../Searchbox/Searchbox';
import './Pokedex.css';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    handleInputChange: (inputValue: string) => void;
    selectedPokemon: PokemonSchema | undefined;
    handlePokemonClick: (inputValue: (string | undefined)) => void;
}


const Pokedex = ({ searchedPokemons, handleInputChange, handlePokemonClick, selectedPokemon }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox handleInputChange={handleInputChange} />
                <Pokecards
                    searchedPokemons={searchedPokemons}
                    handlePokemonClick={handlePokemonClick} />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} handlePokemonClick={handlePokemonClick} />

            </div>
        </div>
    );
}
export default Pokedex;