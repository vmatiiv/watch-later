import React from 'react'
import { connect } from 'react-redux'
import WatchLater from './WatchLater'
import { getWatchLaterMovies } from '../../selectors'
import {removeFromWatchListAC} from '../../redux/reducers/watchLaterReducer'
function WatchLaterContainer({movies,removeFromWatchListAC}:any) {
    return !!movies.length ? <WatchLater movies={movies} remove={removeFromWatchListAC}/> : <h1>nothing here</h1>
}
const mapStateToProps = (store:any) => ({
    movies: getWatchLaterMovies(store) 
})

const mapDispatchToProps = {
    removeFromWatchListAC
}
export default connect(mapStateToProps,mapDispatchToProps)(WatchLaterContainer)
