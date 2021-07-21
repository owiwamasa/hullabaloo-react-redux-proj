import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addFollower } from '../../store/follower'
import './PodcastPage.css'

function PodcastPage({ podcasts, episodes, followers }) {
    const { id } = useParams()
    const podcast = podcasts?.find(pod => pod.id === +id)
    const podcastEpisodes = episodes?.filter(episode => episode.podcastId === +id)
    const episodesCopy = []
    podcastEpisodes?.forEach(episode => episodesCopy.push(episode))
    const mostRecentEpisodes = episodesCopy?.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : -1)
    const podcastUser = podcast?.User
    const sessionUser = useSelector(state => state.session.user);
    const follower = followers?.filter(follower => (follower.podcastId === podcast?.id))
    const following = follower?.find(follow => follow.userId === sessionUser?.id)
    const dispatch = useDispatch()
    const [isFollower, setIsFollower] = useState(false)

    useEffect(() => {
        if (following !== undefined) {
            setIsFollower(false)
        } else {
            setIsFollower(true)
        }
    }, [following])

    const follow = () => {
        dispatch(addFollower(sessionUser?.id, podcast?.id))
        setIsFollower(true)
    }

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
                    {isFollower ? <button className='podcast-page-follow-btn' onClick={follow}>Follow {podcast?.name}</button>
                        : <button className='podcast-page-follow-btn' disabled={true} >✓ Following {podcast?.name}</button>}

                    <div className='podcast-page-description'>{podcast?.description}</div>
                    <div className='podcast-page-plays'>Total Plays: {podcast?.totalPlays}</div>
                </div>
            </div>
            <div className='podcast-page-episodes-title'>Episodes</div>
            <div className='podcast-page-episodes-scroll'>
                {mostRecentEpisodes?.map(episode => (
                    <div className='podcast-page-episodes-list' key={episode?.id}>
                        <div className='podcast-page-episode'>{episode?.title}</div>
                        <div className='podcast-page-episode-image-div'>
                            <Link to={`/episodes/${episode?.id}`}>
                                <img src={episode?.imageUrl} alt='episode' />
                            </Link>
                        </div>
                        <div className='podcast-page-episode-date'>{episode?.releaseDate}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PodcastPage
