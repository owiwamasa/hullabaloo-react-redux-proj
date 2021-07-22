import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPodcasts } from '../../store/podcast';
import { getAllEpisodes } from '../../store/episode';
import { getAllUsers } from '../../store/user';

function SearchResultsPage() {
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const episodes = useSelector(state => state.episode.allEpisodes)
    const users = useSelector(state => state.user.allUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPodcasts())
        dispatch(getAllEpisodes())
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            {/* <div className='search-podcasts'>
                {searchPodcasts && searchPodcasts?.map(podcast => (
                    <div className='search-each-podcast' key={podcast?.id}>
                        <div className='search-podcast-name'>{podcast?.name}</div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}



export default SearchResultsPage
