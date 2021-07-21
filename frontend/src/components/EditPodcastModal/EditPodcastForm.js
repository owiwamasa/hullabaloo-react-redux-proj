import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './EditPodcastForm.css'
import { editPodcast } from '../../store/podcast'

function EditPodcastForm({ podcastId, setShowModal }) {
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            name, description, imageUrl, userId: sessionUser?.id
        }

        return dispatch(editPodcast(payload, podcastId)).then(() => setShowModal(false))
            .then(() => history.push(`/podcasts/${podcastId}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='edit-podcast-form-div'>
            <form onSubmit={onSubmit}>
                <div className='edit-podcast-content'>
                    <h3 className='edit-podcast-h3'>Edit Podcast</h3>
                    <div className='errors-container'>
                        <ul className='errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='edit-podcast-inputs'>
                        <div>
                            <div className='edit-podcast-name-input'>
                                <label
                                    className='edit-podcast-label'
                                    htmlFor='name'>
                                    Name:
                                </label>
                                <input
                                    className='edit-podcast-input-name'
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='edit-podcast-description-input'>
                                <label
                                    className='edit-podcast-label'
                                    htmlFor='description'>
                                    Description:
                                </label>
                                <textarea
                                    className='edit-podcast-input edit-podcast-description'
                                    name='description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div className='edit-podcast-image-input'>
                                <label
                                    className='edit-podcast-label'
                                    htmlFor='imageUrl'>
                                    Image URL:
                                </label>
                                <input
                                    className='edit-podcast-input-image'
                                    type='text'
                                    name='imageUrl'
                                    value={imageUrl}
                                    onChange={e => setImageUrl(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='edit-podcast-submit-btn'>
                        <button
                            className='edit-podcast-btn'
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


export default EditPodcastForm
