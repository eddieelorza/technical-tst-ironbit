import React, {useState, useCallback, useEffect} from "react";
import Card from "../../components/cards/card"
import SearchBar from "../../components/searchBar/searchBar"
import Form from "../../components/form/form"
import {getData} from '../../api/api.js'


const Home = ()=>{
    const [character, setCharacter] = useState([]);

    const getCharacters = useCallback(async () => {
        const data = await getData();
        const {results} = data;
        setCharacter(results.slice(0, 5));
    }, []);

    useEffect(() => {
        getCharacters();
    }, [getCharacters]);

    console.log(character)

    const searchCharacters = (searchTerm) => {
        if (searchTerm === '') {
            getCharacters();
            return;
        }
        const filteredCharacters = character.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCharacter(filteredCharacters);
    };


    return(

    <>
    <div className="container">
        <SearchBar searchCharacters={searchCharacters}/>
        <div className="d-flex justify-content-center align-items-center m-5">
             <Form/>
        </div>
       
    <div className="d-flex justify-content-center align-items-center row">   
    {character.map((item) => (
                
                <Card
                key={item.id}
                name={item.name}
                status={item.status}
                species={item.species}
                location={item.location}
                origin={item.origin}
                image={item.image}
                />
    ))}
    </div>

    </div>
        

    </>
    
    );
}

export default Home;


