import './Searchbox.css';

interface SearchBoxProps {
    handleInputChange: (inputValue: string) => void;

}
const Searchbox = ({ handleInputChange }: SearchBoxProps) => {
    return (
        <input onChange={(e) => {
            handleInputChange(e.target.value);
        }}
            className='searchbox-container'
            type='search'
            placeholder='Search Pokemons'></input>

    );
}

export default Searchbox