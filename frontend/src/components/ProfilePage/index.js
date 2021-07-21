import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import CreatePodcastModal from '../CreatePodcastModal'
import EditPodcastModal from '../EditPodcastModal'
import CreateEpisodeModal from '../CreateEpisodeModal'
import EditEpisodeModal from '../EditEpisodeModal';
import './ProfilePage.css'
import { deletePodcast } from '../../store/podcast'
import { deleteEpisode } from '../../store/episode'

function ProfilePage({ podcasts, episodes }) {
    const sessionUser = useSelector(state => state.session.user);
    const userPodcasts = podcasts?.filter(podcast => podcast.userId === sessionUser.id)
    const userEpisodes = episodes?.filter(episode => episode.userId === sessionUser.id)
    const dispatch = useDispatch()

    const deletePod = (podcastId) => {
        return dispatch(deletePodcast(podcastId))
    }

    const deleteOneEpisode = (episodeId) => {
        return dispatch(deleteEpisode(episodeId))
    }

    return (
        <div>
            <div className='profile-page-create-btn-container'>
                <div className='profile-page-header'>
                    <CreatePodcastModal />
                    <div className='profile-page-titles'>
                    </div>
                </div>
            </div>
            <div className='profile-page-container'>
                <div className='profile-page-podcasts-container'>
                    <div className='profile-page-podcast-user'>{sessionUser?.username}'s Podcasts</div>
                    {userPodcasts && userPodcasts?.map(podcast => (
                        <div className='profile-page-podcasts' key={podcast?.id}>
                            <div className='profile-page-podcast-title'>{podcast?.name}</div>
                            <Link to={`/podcasts/${podcast?.id}`}>
                                <img className='profile-page-podcast-image' src={podcast?.imageUrl} />
                            </Link>
                            <div className='profile-page-podcast-plays'>Total Plays: {podcast?.totalPlays}</div>
                            <div className='profile-page-edit-btns'>
                                <CreateEpisodeModal podcastId={podcast?.id} />
                                <EditPodcastModal podcastId={podcast?.id} />
                                <button className='profile-page-btn' onClick={() => deletePod(podcast?.id)}>Delete Podcast</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='profile-page-episodes-container'>
                    <div className='profile-page-episode-user'>{sessionUser?.username}'s Episodes</div>
                    {userEpisodes && userEpisodes?.map(episode => (
                        <div className='profile-page-episodes' key={episode?.id}>
                            <div className='profile-page-episode-title'>{episode?.title}</div>
                            <Link to={`/episodes/${episode?.id}`}>
                                <img className='profile-page-episode-image' src={episode?.imageUrl} />
                            </Link>
                            <div className='profile-page-episode-podcast-title'>{episode?.Podcast?.name}</div>
                            <div className='profile-page-episode-plays'>Total Plays: {episode?.totalPlays}</div>
                            <div className='profile-page-episode-edit-btns'>
                                <EditEpisodeModal episodeId={episode?.id} podcastId={episode.podcastId} />
                                <button className='profile-page-btn' onClick={() => deleteOneEpisode(episode?.id)}>Delete Episode</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
