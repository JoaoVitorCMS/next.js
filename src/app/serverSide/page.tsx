import { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

type IData = {
    results: {
        id: string
        name: string;
        gender: string;
        image: string;
        species: string;
        status: string;
    }[]
}

export const metadata: Metadata = {
    title: "Lista de personagens RM",
    description: "Generate by create next consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()

    return (
        <>
            <div>Server side page try</div>
            {data?.results.map((item, index) => {
                return (
                    <div key={index} className="border-2 border-solid mb-[50px] w-[20rem]">
                        <h2>{item.name}</h2>
                        <Image src={item.image} alt={item.name} width={200} height={200} />
                        <p>{item.species}</p>
                        <p>{item.status}</p>
                        <p>{item.gender}</p>
                        <Link href={`/personagem/${item.id}`}>Abrir detalhes</Link>
                    </div>
                )
            })}
        </>

    )
}

export default ServerSide
