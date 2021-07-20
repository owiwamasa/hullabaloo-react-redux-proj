import { useState } from 'react'
import EditPodcastForm from './EditPodcastForm'
import { Modal } from '../../context/Modal'
import './EditPodcastForm.css'

function EditPodcastModal({ podcastId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='edit-podcast-btn' onClick={() => setShowModal(true)}>Edit Podcast</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPodcastForm podcastId={podcastId} />
                </Modal>
            )}
        </>

    )
}

export default EditPodcastModal
