import { useState } from 'react'
import EditEpisodeForm from './EditEpisodeForm'
import { Modal } from '../../context/Modal'
import './EditEpisodeForm.css'

function EditEpisodeModal({ episodeId, podcastId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='edit-episode-btn' onClick={() => setShowModal(true)}>Edit Episode</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditEpisodeForm episodeId={episodeId} podcastId={podcastId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditEpisodeModal
