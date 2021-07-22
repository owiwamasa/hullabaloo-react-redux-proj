import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { editPodcast } from '../../store/podcast'
import { editEpisode } from '../../store/episode'
import './EpisodePage.css'

function EpisodePage({ episodes, podcasts, users }) {
    const { id } = useParams()
    const dispatch = useDispatch()
    const episode = episodes?.find(episode => episode.id === +id)
    const podcastId = episode?.podcastId
    const userId = episode?.userId
    const podcast = podcasts?.find(podcast => podcast.id === podcastId)
    const user = users?.find(user => user.id === userId)
    let count = 0;
    console.log(episode)

    const playIncrement = () => {
        if (count < 1) {
            count++
            let episodeTotal = parseInt(episode.totalPlays, 10)
            const newEpisodeTotal = episodeTotal + 1

            const episodePayload = {
                title: episode?.title,
                description: episode?.description,
                imageUrl: episode?.imageUrl,
                mp3file: episode?.mp3file,
                totalPlays: newEpisodeTotal
            }
            let podcastTotal = parseInt(podcast.totalPlays, 10)
            const newPodcastTotal = podcastTotal + 1

            const podcastPayload = {
                name: podcast?.name,
                description: podcast?.description,
                imageUrl: podcast?.imageUrl,
                totalPlays: newPodcastTotal
            }
            dispatch(editEpisode(episodePayload, episode?.id))
            dispatch(editPodcast(podcastPayload, podcast?.id))
        }
        return
    }

    useEffect(() => {
        const audioPlayer = document.querySelector('.episode-page-audio')
        audioPlayer?.addEventListener('play', (e) => {
            playIncrement()
        })
    }, [dispatch])

    return (
        <div className='episode-page-container'>
            <div className='episode-page-title'>{episode?.title}</div>
            <div className='episode-page-date'>{episode?.releaseDate}</div>
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
                        <img src={user?.profilePic} alt='profile pic' />
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
