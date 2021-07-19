import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './PodcastPage.css'

function PodcastPage() {
    const { id } = useParams()
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const podcast = podcasts.find(pod => pod.id === +id)
    // const sessionUser = useSelector(state => state.session.user)
    // const podcastUserId = podcast.userId
    const episodes = useSelector(state => state.episode.allEpisodes)
    const podcastEpisodes = episodes.filter(episode => episode.podcastId === +id)
    console.log(podcastEpisodes)

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
                    <div className='podcast-page-episodes-list'>
                        <div className='podcast-page-episode'>{episode.title}</div>
                        <img src={episode.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PodcastPage
