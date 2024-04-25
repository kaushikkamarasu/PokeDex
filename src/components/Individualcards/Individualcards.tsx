import './Individualcards.css';

interface IndividualcardsProps {
    spriteUrl?: string;
    name?: string;
    handlePokemonClick: (inputValue: (string | undefined)) => void;
}
const Individualcards = ({ spriteUrl, name, handlePokemonClick }: IndividualcardsProps) => {
    return (

        <div onClick={() => handlePokemonClick(name)} className='individual-card-container'>
            <img className='pokemon-sprite' alt="pokemon" src={spriteUrl} />
            <p>{name}</p>
        </div>
    );
}

export default Individualcards;