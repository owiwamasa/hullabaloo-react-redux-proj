import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import CreatePodcastModal from '../CreatePodcastModal'
import EditPodcastModal from '../EditPodcastModal'
import CreateEpisodeModal from '../CreateEpisodeModal'
import EditEpisodeModal from '../EditEpisodeModal';
import { getAllPodcasts } from '../../store/podcast';
import { getAllEpisodes } from '../../store/episode';
import { getAllUsers } from '../../store/user';
import { getAllFollowers } from '../../store/follower';
import { getAllComments, deleteComment } from '../../store/comment';
import './ProfilePage.css'
import { deletePodcast } from '../../store/podcast'
import { deleteEpisode } from '../../store/episode'
import logo from '../../images/comedy-heads.png'

function ProfilePage() {
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const episodes = useSelector(state => state.episode.allEpisodes)
    const followers = useSelector(state => state.follower.allFollowers)
    const users = useSelector(state => state.user.allUsers)
    const sessionUser = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comment.allComments)

    const userPodcasts = podcasts?.filter(podcast => podcast.userId === sessionUser.id)
    const userEpisodes = episodes?.filter(episode => episode.userId === sessionUser.id)
    const episodeCopy = []
    userEpisodes?.forEach(episode => episodeCopy.push(episode))
    const podcastCopy = []
    userPodcasts?.forEach(podcast => podcastCopy.push(podcast))
    const mostRecentEpisodes = episodeCopy?.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : -1)
    const mostRecentPodcasts = podcastCopy?.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
    const follows = followers?.filter(follow => follow.userId === sessionUser?.id)
    const user = users?.find(user => user.id === sessionUser.id)

    const dispatch = useDispatch()

    const deletePod = (podcastId) => {
        const podcastEpisodes = userEpisodes?.filter(episode => episode?.podcastId === podcastId)
        if (podcastEpisodes) {
            podcastEpisodes.forEach(async episode => await dispatch(deleteEpisode(episode?.id)))
        }
        return dispatch(deletePodcast(podcastId))
    }

    const deleteOneEpisode = (episodeId) => {
        const episodeComments = comments?.filter(comment => comment?.episodeId === episodeId)
        if (episodeComments) {
            episodeComments.forEach(async comment => await dispatch(deleteComment(comment?.id)))
        }
        return dispatch(deleteEpisode(episodeId))
    }

    useEffect(() => {
        dispatch(getAllPodcasts())
        dispatch(getAllEpisodes())
        dispatch(getAllUsers())
        dispatch(getAllFollowers())
        dispatch(getAllComments())
    }, [dispatch])

    return (
        <div>
            <div className='profile-page-pic-container'>
                <div className='profile-page-pic-div'>
                    <img src={user?.profilePic} alt='profile pic' />
                </div>
            </div>
            {follows?.length ? <div className='profile-page-followed-podcasts'>
                <div className='profile-page-followed-podcast-title'>Podcasts You're Following</div>
                <div className='profile-page-followed-podcast-list'>
                    {follows && follows?.map(follow => (
                        <div className='profile-page-followed-podcast-list-each' key={follow?.Podcast?.id}>
                            <Link className='profile-page-followed-podcast-list-link' to={`/podcasts/${follow?.Podcast?.id}`}>
                                <img className='profile-page-followed-podcast-list-image' src={follow?.Podcast?.imageUrl} alt={follow?.Podcast?.name} />
                                <div className='profile-page-followed-podcast-list-name'>{follow?.Podcast?.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div> : null}
            <div className='profile-page-container'>
                <div className='profile-page-create-btn-container'>
                    <div className='profile-page-create-title'>CREATE <br></br> NEW <br></br> PODCAST</div>
                    <img className='profile-page-logo' src={logo} alt='logo' />
                    <CreatePodcastModal />
                </div>
                <div className='profile-page-episode-div'>
                    <div className='profile-page-podcast-user'>{sessionUser?.username}'s Podcasts</div>
                    <div className='profile-page-podcasts-container'>
                        {mostRecentPodcasts.length ? mostRecentPodcasts?.map(podcast => (
                            <div className='profile-page-podcasts' key={podcast?.id}>
                                <div className='profile-page-podcast-title'>{podcast?.name}</div>
                                <Link to={`/podcasts/${podcast?.id}`}>
                                    <img className='profile-page-podcast-image' src={podcast?.imageUrl} alt='podcast' />
                                </Link>
                                <div className='profile-page-podcast-plays'>Total Plays: {podcast?.totalPlays}</div>
                                <div className='profile-page-edit-btns'>
                                    <CreateEpisodeModal podcastId={podcast?.id} />
                                    <EditPodcastModal podcastId={podcast?.id} />
                                    <button className='profile-page-btn profile-page-delete-btn' onClick={() => deletePod(podcast?.id)}>Delete Podcast</button>
                                </div>
                            </div>
                        )):
                        <div className='profile-page-none-div'>
                            <div className='profile-page-no-podcasts'>You have no podcasts!<br></br><br></br><i class="fas fa-frown"></i></div>
                        </div>
                        }
                </div>
                </div>
                <div className='profile-page-episode-div'>
                    <div className='profile-page-episode-user'>{sessionUser?.username}'s Episodes</div>
                    <div className='profile-page-episodes-container'>
                        {mostRecentEpisodes.length ? mostRecentEpisodes?.map(episode => (
                            <div className='profile-page-episodes' key={episode?.id}>
                                <div className='profile-page-episode-title'>{episode?.title}</div>
                                <Link to={`/episodes/${episode?.id}`}>
                                    <div className='profile-page-episode-image-div'>
                                        <img className='profile-page-episode-image' src={episode?.imageUrl} alt='episode' />
                                    </div>
                                </Link>
                                <div className='profile-page-episode-podcast-title'>{episode?.Podcast?.name}</div>
                                <div className='profile-page-episode-plays'>Total Plays: {episode?.totalPlays}</div>
                                <div className='profile-page-episode-edit-btns'>
                                    <EditEpisodeModal episodeId={episode?.id} podcastId={episode.podcastId} />
                                    <button className='profile-page-btn' onClick={() => deleteOneEpisode(episode?.id)}>Delete Episode</button>
                                </div>
                            </div>
                        )):
                        <div className='profile-page-none-div'>
                            <div className='profile-page-no-episodes'>You have no episodes!<br></br><br></br><i class="fas fa-frown"></i></div>
                        </div>
                        }
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
