import React from 'react'
// import Home from './Homepage'
// import { Link, Route, Routes } from 'react-router-dom'
import './Results.css'
function Results({ results }) {
    return (
        <div className='category'>

            {/* movie  */}
            <div className="movie-div">
                <h1>Movie</h1>
                <div className="movie">
                    {
                        results.filter((e) => e.Type === "movie").map((e) => {
                            return (
                                <div id="movie-single-div">
                                    <img style={{
                                        height: "20rem",
                                        width: "15rem",
                                        marginBottom: "1rem",
                                        borderRadius: "15px 15px 0 0",
                                    }} src={e.Poster} alt="" />
                                    <div className="movie-title">
                                <h6>{e.Title}</h6>
                                <h6>{e.Year}</h6>
                                </div>
                                </div>
                                
                            )
                            
                        })
                    }
                </div>
            </div>

            <div className="series-div">
                <h1>Series</h1>
                <div className="series">
                    {

                        results.filter((s) => s.Type === "series")
                            .map((e) => {
                                return (
                                    <div className="series-single-div">
                                        <img style={{
                                            height: "20rem",
                                            width: "15rem",
                                            marginBottom: "1rem",
                                            borderRadius: "15px 15px 0 0",
                                        }} src={e.Poster} />
                                        <h6>{e.Title}</h6>
                                        <h6>{e.Year}</h6>
                                    </div>
                                )
                            })
                    }
                </div>
                
                
            </div>
        


        </div>
    )
}

export default Results