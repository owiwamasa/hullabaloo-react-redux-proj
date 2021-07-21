import { Link } from 'react-router-dom'

import './HomePage.css'

function HomePage({ podcasts, episodes }) {
    const topTenEpisodes = episodes?.slice(0, 10)
    const topTenPodcasts = podcasts?.slice(0, 10)
    const episodeCopy = []
    episodes?.forEach(episode => episodeCopy.push(episode))
    const mostRecent = episodeCopy?.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : -1)
    const mostRecentEpisodes = mostRecent.slice(0, 10)

    return (
        <div>
            <div className='most-recent-episodes'>
                <div className='recent-episode-title'>Newest Episodes</div>
                <div className='recent-episode-list'>
                    {mostRecentEpisodes && mostRecentEpisodes?.map(episode => (
                        <div className='recent-episode-list-each' key={episode?.id}>
                            <div className='recent-episode-list-link'>
                                <Link className='recent-episode-list-link' to={`/episodes/${episode?.id}`}>
                                    <div className='recent-episode-list-title'>{episode?.title}</div>
                                    <div className='recent-episode-list-image-div'>
                                        <img className='recent-episode-list-image' src={episode?.imageUrl} alt={episode?.title} />
                                    </div>
                                </Link>
                                <div className='recent-episode-date'>{episode?.releaseDate}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
                        <div className='home-episode-list-each' key={episode?.id}>
                            <div className='home-episode-list-link'>
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
