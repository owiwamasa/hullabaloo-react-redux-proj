import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './PodcastPage.css'

function PodcastPage() {
    const { id } = useParams()
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const podcast = podcasts.find(pod => pod.id === +id)
    // const sessionUser = useSelector(state => state.session.user)
    // const podcastUserId = podcast.userId
    console.log(podcast)

    return (
        <div className='podcast-page-container'>
            <div className='podcast-page-title'>{podcast.name}</div>
            <div className='podcast-page-info'>
                <div className='podcast-page-image'>
                    <img src={podcast.imageUrl} />
                </div>
                <div className='podcast-page-user-info'>
                    <div className='podcast-page-username'>Created by {podcast.userId}</div>
                    <div className='podcast-page-description'>{podcast.description}</div>
                    <div className='podcast-page-plays'>Total Plays: {podcast.totalPlays}</div>
                </div>
            </div>
            <div className='podcast-page-episodes-title'>Episodes</div>
            <div className='podcast-page-episodes-scroll'>
                <div className='podcast-page-episodes-list'>
                    <div className='podcast-page-episode'>Episode 1</div>
                    <img src='https://format-com-cld-res.cloudinary.com/image/private/s--x5LE1zih--/c_limit,g_center,h_65535,w_960/fl_keep_iptc.progressive.apng/v1/5f7521a979f98778690eb004d249f88e/Frame_14.png' />
                </div>
                <div className='podcast-page-episodes-list'>
                    <div className='podcast-page-episode'>Episode 2</div>
                    <img src='https://www.talibkweli.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-06-at-2.51.28-PM.png' />
                </div>
                <div className='podcast-page-episodes-list'>
                    <div className='podcast-page-episode'>Episode 3</div>
                    <img src='https://www.orcasound.com/wp-content/uploads/2021/06/image3.jpg' />
                </div>
            </div>
        </div>
    )
}


export default PodcastPage
