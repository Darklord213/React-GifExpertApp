import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import {useState, useEffect } from 'react'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid=({category})=> {

    //const [images, setImages] = useState([]);

    /* useEffect(()=>{
       getGif(category).then(imgs=>setImages(imgs))
    },[category]);// se usa un arreglo vacio para que solo se dispare una vez la renderizacion o petecion http
    // sepone como dependencia category ya que si esta cambia se volveria a renderizar todo de nuevo */
    const {data:images, loading}=useFetchGifs(category); //images es el alias
    /* console.log(data);
    console.log(loading); */
    
    return (
    <>
        <h3>{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
                {images.map(img=>(
                  <GifGridItem 
                  key={img.id}
                  {...img} />//pasamos un objeto entero para ser destructurado
                ))}
            
        </div>
    </>
    )
}



