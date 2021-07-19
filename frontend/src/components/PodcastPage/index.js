import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import './PodcastPage.css'

function PodcastPage({ podcasts, episodes }) {
    const { id } = useParams()
    // const podcasts = props.podcasts
    // const episodes = props.episodes
    console.log(podcasts)
    console.log(episodes)
    // const podcasts = useSelector(state => state.podcast.allPodcasts)
    const podcast = podcasts.find(pod => pod.id === +id)
    // const episodes = useSelector(state => state.episode.allEpisodes)
    const podcastEpisodes = episodes.filter(episode => episode.podcastId === +id)

    // const podcastUser = podcast.User.username

    return (
        <div className='podcast-page-container'>
            <div className='podcast-page-title'>{podcast.name}</div>
            <div className='podcast-page-info'>
                <div className='podcast-page-image'>
                    <img src={podcast.imageUrl} />
                </div>
                <div className='podcast-page-user-info'>
                    <div className='podcast-page-username'>Created by {podcast.userId}</div>
                    <div className='podcast-page-description'>{podcast.description}</div>
                    <div className='podcast-page-plays'>Total Plays: {podcast.totalPlays}</div>
                </div>
            </div>
            <div className='podcast-page-episodes-title'>Episodes</div>
            <div className='podcast-page-episodes-scroll'>
                {podcastEpisodes.map(episode => (
                    <div className='podcast-page-episodes-list' key={episode.id}>
                        <div className='podcast-page-episode'>{episode.title}</div>
                        <Link to={`/episodes/${episode.id}`}>
                            <img src={episode.imageUrl} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PodcastPage
