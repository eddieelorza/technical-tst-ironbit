const URL_BASE = "https://rickandmortyapi.com/api/character";


const getData = async () => {
    try {
        const response = await fetch(URL_BASE);
        const data = await response.json();
        return data;
    } catch (error) {
        alert("Fetch Error", error);
    }
}

export{getData}