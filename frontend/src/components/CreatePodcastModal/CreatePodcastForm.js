import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CreatePodcastForm.css'
import { createPodcast } from '../../store/podcast'

function CreatePodcastForm({ setShowModal }) {
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        const payload = {
            name, description, imageUrl, userId: sessionUser?.id, totalPlays: 0
        }

        return dispatch(createPodcast(payload)).then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
    }

    return (
        <div className='create-podcast-form-div'>
            <form onSubmit={onSubmit}>
                <div className='create-podcast-content'>
                    <div className='create-podcast-h3-div'>
                        <h3 className='create-podcast-h3'>Create New Podcast</h3>
                    </div>
                    <div className='errors-container'>
                        <ul className='errors'>
                            {errors && errors.map((err, idx) => (
                                <li key={idx}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='create-podcast-inputs'>
                        <div>
                            <div className='create-podcast-name-input'>
                                <label
                                    className='create-podcast-label'
                                    htmlFor='name'>
                                    Name:
                                </label>
                                <input
                                    className='create-podcast-input-name'
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='create-podcast-description-input'>
                                <label
                                    className='create-podcast-label'
                                    htmlFor='description'>
                                    Description:
                                </label>
                                <textarea
                                    className='create-podcast-input create-podcast-description'
                                    name='description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>
                            <div className='create-podcast-image-input'>
                                <label
                                    className='create-podcast-label'
                                    htmlFor='imageUrl'>
                                    Image URL:
                                </label>
                                <input
                                    className='create-podcast-input-image'
                                    type='text'
                                    name='imageUrl'
                                    value={imageUrl}
                                    onChange={e => setImageUrl(e.target.value)}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='create-podcast-submit-btn'>
                        <button
                            className='create-podcast-btn'
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


export default CreatePodcastForm
