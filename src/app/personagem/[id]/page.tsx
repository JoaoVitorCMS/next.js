

interface IPersonagens{
    params: {
        id: string
    }

}
   
interface IData{

    name: string;
    gender: string;
    image: string;
    species: string;
    status: string;

}

interface IDataStaticIndex{
    results: {
        id: number;

    }[]
}



const Personagem = async ({params: {id}}: IPersonagens) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {cache: 'no-store'})
    const data: IData  = await res.json()

    console.log(data)
    return(
        <div>
            <h1>butijao de gas</h1>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.gender}</p>
            <p>{data.species}</p>
            <p>{data.status}</p>
        </div>
    )
}

export default Personagem


export async function generateStaticParams(){
    const res  = await fetch(('https://rickandmortyapi.com/api/character'))
    const data: IDataStaticIndex = await res.json()

    return data.results.map((item) => ({
        id: item.id.toString()
    }))
}