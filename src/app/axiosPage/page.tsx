"use client"

import { useEffect, useState, Suspense } from "react"
import { api } from "@/constants/api"
import Image from "next/image"


interface IData{
    name: string;
    gender: string;
    species: string;
    image: string;
}

const AxiosPage = () => {
const [data, setData] = useState <IData[]>([])

useEffect(() => {
    api.get(`/character`).then((res) => {
        setData(res.data.results)
    }).catch((error) =>{
        console.log("deu ruim resquisicao")
    })
}, [])

    return(
        <>
        <h1>Axios page client side</h1>
        <Suspense fallback={<div>Loading...</div>}>
        {data.map((item, index) => {
            return(
                <div>
                    <h2>{item.name}</h2>
                    <Image src={item.image} alt={item.name} width={200} height={200}></Image>
                </div>
            )
        })}
        </Suspense>
        </>
    )
}

export default AxiosPage