import { useParams, Link } from 'react-router-dom'
import './PodcastPage.css'

function PodcastPage({ podcasts, episodes }) {
    const { id } = useParams()
    const podcast = podcasts?.find(pod => pod.id === +id)
    const podcastEpisodes = episodes?.filter(episode => episode.podcastId === +id)

    const podcastUser = podcast?.User

    return (
        <div className='podcast-page-container'>
            <div className='podcast-page-title'>{podcast?.name}</div>
            <div className='podcast-page-info'>
                <div className='podcast-page-image'>
                    <img src={podcast?.imageUrl} alt='podcast' />
                </div>
                <div className='podcast-page-user-info'>
                    <div className='podcast-page-username'>Created by {podcastUser?.username}</div>
                    <div className='podcast-page-profile-pic'>
                        <img src={podcastUser?.profilePic} alt='profile pic' />
                    </div>
                    <div className='podcast-page-description'>{podcast?.description}</div>
                    <div className='podcast-page-plays'>Total Plays: {podcast?.totalPlays}</div>
                </div>
            </div>
            <div className='podcast-page-episodes-title'>Episodes</div>
            <div className='podcast-page-episodes-scroll'>
                {podcastEpisodes?.map(episode => (
                    <div className='podcast-page-episodes-list' key={episode?.id}>
                        <div className='podcast-page-episode'>{episode?.title}</div>
                        <div className='podcast-page-episode-image-div'>
                            <Link to={`/episodes/${episode?.id}`}>
                                <img src={episode?.imageUrl} alt='episode' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PodcastPage
