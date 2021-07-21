import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './EditEpisodeForm.css'
import { editEpisode } from '../../store/episode'

function EditEpisodeForm({ episodeId, podcastId, setShowModal }) {
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [mp3file, setMp3file] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            title, description, imageUrl, mp3file, podcastId, userId: sessionUser?.id
        }

        return dispatch(editEpisode(payload, episodeId)).then(() => setShowModal(false))
            .then(() => history.push(`/episodes/${episodeId}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='edit-episode-form-div'>
            <form onSubmit={onSubmit}>
                <div className='edit-episode-content'>
                    <h3 className='edit-episode-h3'>Edit Episode</h3>
                    <div className='errors-container'>
                        <ul className='errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='edit-episode-inputs'>
                        <div>
                            <div className='edit-episode-title-input'>
                                <label
                                    className='edit-episode-label'
                                    htmlFor='title'>
                                    Title:
                                </label>
                                <input
                                    className='edit-episode-input-title'
                                    type='text'
                                    name='title'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='edit-episode-description-input'>
                                <label
                                    className='edit-episode-label'
                                    htmlFor='description'>
                                    Description:
                                </label>
                                <textarea
                                    className='edit-episode-input edit-episode-description'
                                    name='description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div className='edit-episode-image-input'>
                                <label
                                    className='edit-episode-label'
                                    htmlFor='imageUrl'>
                                    Image URL:
                                </label>
                                <input
                                    className='edit-episode-input-image'
                                    type='text'
                                    name='imageUrl'
                                    value={imageUrl}
                                    onChange={e => setImageUrl(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='edit-episode-mp3file-input'>
                                <label
                                    className='edit-episode-label'
                                    htmlFor='mp3file'>
                                    mp3 File:
                                </label>
                                <input
                                    className='edit-episode-input-mp3file'
                                    type='text'
                                    name='mp3file'
                                    value={mp3file}
                                    onChange={e => setMp3file(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='edit-episode-submit-btn'>
                        <button
                            className='edit-episode-btn'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default EditEpisodeForm
