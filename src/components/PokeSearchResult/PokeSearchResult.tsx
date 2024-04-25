import { PokemonSchema } from '../../types/PokemonSchema';
import './PokeSearchResult.css';

interface PokeSearchResultProps {
    handlePokemonClick: (inputValue: (string | undefined)) => void;
    selectedPokemon: PokemonSchema | undefined;
}
const PokeSearchResult = ({ handlePokemonClick, selectedPokemon }: PokeSearchResultProps) => {

    const { name, id, height, weight, base_experience, sprites } = selectedPokemon || {};

    return (
        <div className="poke-result-card">
            {selectedPokemon ? (
                <div className='clicked-pokemon'>
                    <img
                        className='pokemon-sprite-animated'
                        alt="pokemon_animation" src={sprites?.animated || sprites?.normal} />
                    <p>Name: {name}</p>
                    <p>Base Exp: {base_experience}</p>
                    <p>weight: {weight}</p>
                    <p>height: {height}</p>
                    <p>id: {id}</p>
                </div>
            ) : (
                <h2>Welcome to the Pokedex</h2>
            )}

        </div>
    );
}
export default PokeSearchResult;