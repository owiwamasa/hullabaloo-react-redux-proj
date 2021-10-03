import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { editPodcast } from '../../store/podcast'
import { editEpisode } from '../../store/episode'
import { getAllPodcasts } from '../../store/podcast';
import { getAllEpisodes } from '../../store/episode';
import { getAllUsers } from '../../store/user';
import { getAllComments, createComment, deleteComment } from '../../store/comment'
import './EpisodePage.css'
// import WaveForm from '../WaveForm'

function EpisodePage() {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment.allComments)
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const episodes = useSelector(state => state.episode.allEpisodes)
    const users = useSelector(state => state.user.allUsers)
    const sessionUser = useSelector(state => state.session.user);
    const [comm, setComm] = useState('')
    const [errors, setErrors] = useState([])

    const { id } = useParams()
    const episode = episodes?.find(episode => episode.id === +id)
    const podcastId = episode?.podcastId
    const userId = episode?.userId
    const podcast = podcasts?.find(podcast => podcast.id === podcastId)
    const user = users?.find(user => user.id === userId)
    const episodeComments = comments?.filter(comment => comment?.Episode?.id === episode?.id)
    const episodeCommentsByTime = episodeComments?.reverse()

    let count = 0;

    const onSubmit = (e) => {
        e.preventDefault()

        if (!sessionUser) {
            setErrors(['You must be logged in to comment.'])
            return
        }

        const payload = { comment: comm, userId: sessionUser?.id, episodeId: episode?.id }
        dispatch(createComment(payload))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
        setComm('')
    }

    const deleteOneComment = (commentId) => {
        dispatch(deleteComment(commentId))
    }


    const playIncrement = () => {
        if (count < 1) {
            count++
            let episodeTotal = parseInt(episode?.totalPlays, 10)
            const newEpisodeTotal = episodeTotal + 1

            const episodePayload = {
                title: episode?.title,
                description: episode?.description,
                imageUrl: episode?.imageUrl,
                mp3file: episode?.mp3file,
                totalPlays: newEpisodeTotal
            }
            let podcastTotal = parseInt(podcast?.totalPlays, 10)
            const newPodcastTotal = podcastTotal + 1

            const podcastPayload = {
                name: podcast?.name,
                description: podcast?.description,
                imageUrl: podcast?.imageUrl,
                totalPlays: newPodcastTotal
            }
            const updateTotal = async (podId) => {
                await dispatch(editEpisode(episodePayload, id))
                await dispatch(editPodcast(podcastPayload, podcastId))
                dispatch(getAllEpisodes())
            }
            updateTotal()
        }
        return
    }


    useEffect(() => {
        dispatch(getAllComments())
        dispatch(getAllPodcasts())
        dispatch(getAllEpisodes())
        dispatch(getAllUsers())
    }, [dispatch])

    useEffect(() => {
        const audioPlayer = document.querySelector('.episode-page-audio')
        audioPlayer?.addEventListener('play', (e) => {
            playIncrement()
        })
    }, [])

    return (
        <div className='episode-page-container'>
            <div className='episode-page-title'>{episode?.title}</div>
            <div className='episode-page-date'>{episode?.releaseDate.slice(5)}-{episode?.releaseDate.slice(0,4)}</div>
            <div className='episode-page-podcast-name'>{podcast?.name}</div>
            <audio className='episode-page-audio' controls>
                <source src={episode?.mp3file} type='audio/mp3'></source>
            </audio>
            {/* <WaveForm audio={episode?.mp3file}/> */}
            <div className='episode-page-info'>
                <div className='episode-page-image-container'>
                    <div className='episode-page-image-div'>
                        <img className='episode-page-image' src={episode?.imageUrl} alt='episode' />
                    </div>
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
            <div className='episode-page-comment-container'>
                <div className='episode-page-comment-title'>Comments</div>
                <div className='episode-page-comment-info'>
                    <div className='episode-page-comment'>
                        <form onSubmit={onSubmit}>
                            <div className='errors-container'>
                                <ul className='errors'>
                                    {errors && errors.map((err, idx) => (
                                        <li key={idx}>{err}</li>
                                    ))}
                                </ul>
                            </div>
                            <textarea
                                name='comment'
                                type='text'
                                value={comm}
                                onChange={e => setComm(e.target.value)}
                            >
                            </textarea>
                            <button className='episode-page-comment-btn' type='submit'>Post Comment</button>
                        </form>
                    </div>
                    <div className='episode-page-comment-list-scroll'>
                        <div className='episode-page-comment-list'>
                            {episodeCommentsByTime && episodeCommentsByTime?.map(comment => (
                                <div className='episode-page-comment-list-each' key={comment?.id}>
                                    <div className='episode-page-comment-date'>{comment?.createdAt.slice(5, 10)}-{comment?.createdAt.slice(0,4)}</div>
                                    <div className='episode-page-comment-list-post-div'>
                                        <div className='episode-page-comment-list-post'>" {comment?.comment} "</div>
                                    </div>
                                    <div className='episode-page-comment-user-N-delete'>
                                        <div className='episode-page-comment-list-user-info'>
                                            <div className='episode-page-comment-list-user'>-{comment?.User?.username}</div>
                                            <div className='episode-page-comment-list-user-image'>
                                                <img src={comment?.User?.profilePic} alt='profile pic' />
                                            </div>
                                        </div>
                                        {(comment?.User?.id === sessionUser?.id) ?
                                            <button className='episode-page-comment-delete' onClick={() => deleteOneComment(comment?.id)}>Delete</button>
                                            : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default EpisodePage
