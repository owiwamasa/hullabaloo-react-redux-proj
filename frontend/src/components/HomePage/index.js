import { Link } from 'react-router-dom'

import './HomePage.css'

function HomePage({ podcasts, episodes }) {
    const topTenEpisodes = episodes?.slice(0, 10)
    const topTenPodcasts = podcasts?.slice(0, 10)

    return (
        <div>
            <div className='most-played-podcasts'>
                <div className='most-podcast-title'>Most Played Podcasts</div>
                <div className='home-podcast-list'>
                    {topTenPodcasts && topTenPodcasts?.map(podcast => (
                        <div className='home-podcast-list-each' key={podcast?.id}>
                            <Link className='home-podcast-list-link' to={`/podcasts/${podcast?.id}`}>
                                <div className='home-podcast-list-name'>{podcast?.name}</div>
                                <img className='home-podcast-list-image' src={podcast?.imageUrl} alt={podcast?.name} />
                            </Link>
                            <div className='home-podcast-list-plays'>Total Plays: {podcast?.totalPlays}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='most-played-episodes'>
                <div className='most-episode-title'>Most Played Episodes</div>
                <div className='home-episode-list'>
                    {topTenEpisodes && topTenEpisodes?.map(episode => (
                        <div className='home-episode-list-each'>
                            <div className='home-episode-list-link' key={episode?.id}>
                                <Link className='home-episode-list-link' to={`/episodes/${episode?.id}`}>
                                    <div className='home-episode-list-title'>{episode?.title}</div>
                                    <div className='home-episode-list-image-div'>
                                        <img className='home-episode-list-image' src={episode?.imageUrl} alt={episode?.title} />
                                    </div>
                                </Link>
                                <div className='home-episode-list-plays'>Total Plays: {episode?.totalPlays}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default HomePage
