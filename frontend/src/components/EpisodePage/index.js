import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function EpisodePage() {
    const { id } = useParams()
    const episodes = useSelector(state => state.episode.allEpisodes)
    const episode = episodes.find(episode => episode.id === +id)
    console.log(episode)

    return (
        <div>
            <div>{episode.title}</div>
            <img src={episode.imageUrl} />
            <div>{episode.description}</div>
        </div>
    )
}


export default EpisodePage
