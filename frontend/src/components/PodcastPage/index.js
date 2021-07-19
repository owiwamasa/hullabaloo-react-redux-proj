import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getOnePodcast } from '../../store/podcast'
import './PodcastPage.css'

function PodcastPage() {
    const { id } = useParams()
    const dispatch = useDispatch()
    // const podcast = useSelector(state => console.log(state.podcast[id].podcast))

    useEffect(() => {
        dispatch(getOnePodcast(id))
    }, [dispatch, id])

    return (
        <div className='podcast-page-container'>
            <div className='podcast-page-title'>The Midnight Miracle</div>
            <div className='podcast-page-info'>
                <div className='podcast-page-image'>
                    <img src='https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/bklykxhl9dqgymq0daa9/midnight-miracle' />
                </div>
                <div className='podcast-page-user-info'>
                    <div className='podcast-page-username'>Created by daveChappelle</div>
                    <div className='podcast-page-description'>The Midnight Miracle is a podcast like you've never heard before. The show invites you into the minds of cultural icons Talib Kweli, yasiin bey, and Dave Chappelle. Listen in as notable friends stop by, share old stories, and make new memories.</div>
                    <div className='podcast-page-plays'>Total Plays: 752</div>
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
