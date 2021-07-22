import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import SearchResultsPage from '../SearchResults'

import './HomePage.css'

function HomePage({ podcasts, episodes, followers }) {
    const topTenEpisodes = episodes?.slice(0, 10)
    const topTenPodcasts = podcasts?.slice(0, 10)
    const episodeCopy = []
    episodes?.forEach(episode => episodeCopy.push(episode))
    const mostRecent = episodeCopy?.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : -1)
    const mostRecentEpisodes = mostRecent.slice(0, 10)
    const sessionUser = useSelector(state => state.session.user);
    const follows = followers?.filter(follow => follow.userId === sessionUser?.id)
    const [search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    class='nav-search'
                    type='search'
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search by podcast, episode, username...'>
                </input>
            </form>
            <SearchResultsPage />
            <div className='home-followed-podcasts'>
                <div className='home-followed-podcast-title'>Podcasts You're Following</div>
                <div className='home-followed-podcast-list'>
                    {follows && follows?.map(follow => (
                        <div className='home-followed-podcast-list-each' key={follow?.Podcast?.id}>
                            <Link className='home-followed-podcast-list-link' to={`/podcasts/${follow?.Podcast?.id}`}>
                                <div className='home-followed-podcast-list-name'>{follow?.Podcast?.name}</div>
                                <img className='home-followed-podcast-list-image' src={follow?.Podcast?.imageUrl} alt={follow?.Podcast?.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='most-played-podcasts'>
                <div className='most-podcast-title'>Most Popular Podcasts</div>
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
                                <div className='recent-episode-list-podcast'>{episode?.Podcast.name}</div>
                                <div className='recent-episode-date'>{episode?.releaseDate}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='most-played-episodes'>
                <div className='most-episode-title'>Most Popular Episodes</div>
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
                                <div className='home-episode-list-podcast'>{episode?.Podcast.name}</div>
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
