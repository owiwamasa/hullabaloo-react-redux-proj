import { useParams, Link } from 'react-router-dom'
import './EpisodePage.css'

function EpisodePage({ episodes, podcasts, users }) {
    const { id } = useParams()
    const episode = episodes?.find(episode => episode.id === +id)
    const podcastId = episode?.podcastId
    const userId = episode?.userId
    const podcast = podcasts?.find(podcast => podcast.id === podcastId)
    const user = users?.find(user => user.id === userId)

    return (
        <div className='episode-page-container'>
            <div className='episode-page-title'>{episode?.title}</div>
            <div className='episode-page-podcast-name'>{podcast?.name}</div>
            <div className='episode-page-info'>
                <div className='episode-page-image-container'>
                    <img className='episode-page-image' src={episode?.imageUrl} alt='episode' />
                    <audio className='episode-page-audio' controls>
                        <source src={episode?.mp3file} type='audio/mp3'></source>
                    </audio>
                    <div className='episode-page-total-plays'>Total Plays: {episode?.totalPlays}</div>
                </div>
                <div className='episode-page-user-description'>
                    <div className='episode-page-user'>Created by {user?.username}</div>
                    <div className='episode-page-profile-pic'>
                        <img src={user?.profilePic} />
                    </div>
                    <div className='episode-page-description'>{episode?.description}</div>
                    <Link className='episode-page-podcast-link' to={`/podcasts/${podcast?.id}`}>
                        <button className='episode-page-podcast-btn'>{podcast?.name} Page</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default EpisodePage
