import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CreateEpisodeForm.css'
import { createEpisode } from '../../store/episode'

function CreateEpisodeForm({ setShowModal, podcastId }) {
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [mp3file, setMp3file] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            title, description, imageUrl, mp3file, releaseDate: new Date(), totalPlays: 0, podcastId, userId: sessionUser?.id
        }

        return dispatch(createEpisode(payload)).then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='create-episode-form-div'>
            <form onSubmit={onSubmit}>
                <div className='create-episode-content'>
                    <div className='create-episode-h3-container'>
                        <h3 className='create-episode-h3'>Create New Episode</h3>
                    </div>
                    <div className='errors-container'>
                        <ul className='errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='create-episode-inputs'>
                        <div>
                            <div className='create-episode-title-input'>
                                <label
                                    className='create-episode-label'
                                    htmlFor='title'>
                                    Title:
                                </label>
                                <input
                                    className='create-episode-input-title'
                                    type='text'
                                    name='title'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='create-episode-description-input'>
                                <label
                                    className='create-episode-label'
                                    htmlFor='description'>
                                    Description:
                                </label>
                                <textarea
                                    className='create-episode-input create-episode-description'
                                    name='description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div className='create-episode-image-input'>
                                <label
                                    className='create-episode-label'
                                    htmlFor='imageUrl'>
                                    Image URL:
                                </label>
                                <input
                                    className='create-episode-input-image'
                                    type='text'
                                    name='imageUrl'
                                    value={imageUrl}
                                    onChange={e => setImageUrl(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='create-episode-mp3file-input'>
                                <label
                                    className='create-episode-label'
                                    htmlFor='mp3file'>
                                    mp3 File:
                                </label>
                                <input
                                    className='create-episode-input-mp3file'
                                    type='text'
                                    name='mp3file'
                                    value={mp3file}
                                    onChange={e => setMp3file(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='create-episode-submit-btn'>
                        <button
                            className='create-episode-btn'
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


export default CreateEpisodeForm
