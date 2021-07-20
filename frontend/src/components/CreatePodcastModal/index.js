import { useState } from 'react'
import CreatePodcastForm from './CreatePodcastForm'
import { Modal } from '../../context/Modal'
import './CreatePodcastForm.css'

function CreatePodcastModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='create-podcast-btn' onClick={() => setShowModal(true)}>Create New Podcast</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreatePodcastForm />
                </Modal>
            )}
        </>

    )
}

export default CreatePodcastModal
