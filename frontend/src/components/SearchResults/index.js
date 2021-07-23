import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPodcasts } from '../../store/podcast';
import { getAllEpisodes } from '../../store/episode';
import { getAllUsers } from '../../store/user';
import './SearchResults.css'

function SearchResultsPage({ search }) {
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const episodes = useSelector(state => state.episode.allEpisodes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPodcasts())
        dispatch(getAllEpisodes())
        dispatch(getAllUsers())
    }, [dispatch])

    const podcastResults = []
    podcasts?.forEach(podcast => {
        let podcastLower = podcast?.name.toLowerCase()
        let podcastDescriptionLower = podcast?.description.toLowerCase()
        let podcastUserLower = podcast?.User?.username.toLowerCase()
        let searchLower = search?.toLowerCase()
        if (podcastLower.includes(searchLower)
            || podcastDescriptionLower.includes(searchLower)
            || podcastUserLower.includes(searchLower)) {
            podcastResults.push(podcast)
        }
    })

    const episodeResults = []
    episodes?.forEach(episode => {
        let episodeLower = episode?.title.toLowerCase()
        let episodeDescriptionLower = episode?.description.toLowerCase()
        let episodeUserLower = episode?.User?.username.toLowerCase()
        let episodePodcastLower = episode?.Podcast?.name.toLowerCase()
        let searchLower = search?.toLowerCase()
        if (episodeLower.includes(searchLower)
            || episodeDescriptionLower.includes(searchLower)
            || episodeUserLower.includes(searchLower)
            || episodePodcastLower.includes(searchLower)) {
            episodeResults.push(episode)
        }
    })

    const allResults = podcastResults.concat(episodeResults)


    return (
        <div>
            <div className='search-results'>
                <div className='search-results-title'>Search Results ({allResults?.length})</div>
                <div className='episode-results-container'>
                    <div className='podcast-results-title'>Podcast Search Results ({podcastResults?.length})</div>
                    <div className='podcast-results-scroll'>
                        {podcastResults && podcastResults?.map(podcast => (
                            <div className='search-each-podcast' key={podcast?.id}>
                                <Link className='podcast-results-link' to={`/podcasts/${podcast?.id}`}>
                                    <div className='search-podcast-image-div'>
                                        <img className='search-podcast-image' src={podcast?.imageUrl}></img>
                                    </div>
                                    <div className='search-podcast-name'>{podcast?.name}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='episode-results-container'>
                    <div className='episode-results-title'>Episode Search Results ({episodeResults?.length})</div>
                    <div className='episode-results-scroll'>
                        {episodeResults && episodeResults?.map(episode => (
                            <div className='search-each-episode' key={episode?.id}>
                                <Link className='episode-results-link' to={`/episodes/${episode?.id}`}>
                                    <div className='search-episode-image-div'>
                                        <img className='search-episode-image' src={episode?.imageUrl}></img>
                                    </div>
                                    <div className='search-episode-title'>{episode?.title}</div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SearchResultsPage
