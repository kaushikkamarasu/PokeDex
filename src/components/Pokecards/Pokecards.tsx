import { PokemonSchema } from '../../types/PokemonSchema';
import Individualcards from '../Individualcards/Individualcards';
import './Pokecards.css';

interface PokecardsProps {
    searchedPokemons: PokemonSchema[];
    handlePokemonClick: (inputValue: (string | undefined)) => void;
}

const Pokecards = ({ searchedPokemons, handlePokemonClick }: PokecardsProps) => {
    return (
        <div className="cards-container">
            {
                searchedPokemons.map((pokemon) => {

                    return (
                        pokemon.name && (
                            <Individualcards
                                key={pokemon.id}
                                name={pokemon.name}
                                spriteUrl={pokemon.sprites.normal}
                                handlePokemonClick={handlePokemonClick} />
                        )
                    )
                })
            }
        </div>

    );
}
export default Pokecards;