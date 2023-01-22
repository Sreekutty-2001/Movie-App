import React from 'react'
// import Home from './Homepage'
// import { Link, Route, Routes } from 'react-router-dom'
import './Results.css'
function Results({ loading, results }) {
    return (
        <div className='category'>

            {/* movie  */}
            <div className="movie-div">
                <h1>Movie</h1>
                <div className="movie">
                    {loading ? (
                        <h1>No Result</h1>
                    ) : (
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
                                        <h2>{e.Title}</h2>
                                        <h3>{e.Year}</h3>
                                    </div>
                                </div>

                            )

                        })
                    )
                    }
                </div>
            </div>

            <div className="series-div">
                <h1>Series</h1>
                <div className="series">
                    {
                        loading ? (
                            <h1>No results</h1>
                        ) : (
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
                                            <h4>{e.Title}</h4>
                                        <h5>{e.Year}</h5>
                                        </div>
                                    )
                                })
                        )
                    }
                </div>


            </div>



        </div>
    )
}

export default Results