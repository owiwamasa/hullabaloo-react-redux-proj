import { useState } from 'react'
import CreateEpisodeForm from './CreateEpisodeForm'
import { Modal } from '../../context/Modal'
import './CreateEpisodeForm.css'

function CreateEpisodeModal({ podcastId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='create-episode-btn' onClick={() => setShowModal(true)}>Add Episode</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateEpisodeForm setShowModal={setShowModal} podcastId={podcastId} />
                </Modal>
            )}
        </>

    )
}

export default CreateEpisodeModal
