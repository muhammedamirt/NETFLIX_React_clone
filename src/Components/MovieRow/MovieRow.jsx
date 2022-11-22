import React, { useEffect, useState } from 'react'
import { imageURL, API_KEY } from '../../constants/constant'
import Youtube from 'react-youtube'
import axios from '../../Axios'

import './MovieRow.css'

function MovieRow(props) {
    const [rowPosters, setRowPosters] = useState([])
    const [movieUrlId, setMovieUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setRowPosters(response.data.results)
        }).catch((err) => {
            console.log('error');
        })
    }, [])
    const showTrailer = (movieId) => {
        axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setMovieUrlId(response.data.results[0])
            } else {
                console.log('no vedio');
            }

        })
    }
    const opts = {
        height: '350',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }

    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {rowPosters.map((obj) =>
                    <img onClick={() => showTrailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageURL + obj.backdrop_path}`} alt="posters" />
                )}
            </div>
            {movieUrlId && <Youtube videoId={movieUrlId ? movieUrlId.key : ""} opts={opts} />}
        </div>
    )
}

export default MovieRow