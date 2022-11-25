import React, { useEffect, useState } from 'react'
import { API_KEY ,imageURL} from '../../constants/constant'
import axios from '../../Axios'
import './banner.css'
function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        setTimeout(()=>{
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
                const movie_num = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[movie_num])
            })
        },7000) 
    })
    
    return (

        <div
            style={{ backgroundImage: `url(${movie ? imageURL+movie.backdrop_path:""})` }}
            className='Banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
                <div className='fade_bottom'></div>
            </div>
        </div>
    )
}

export default Banner