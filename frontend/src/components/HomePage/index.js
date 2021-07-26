import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getAllPodcasts } from '../../store/podcast';
import { getAllEpisodes } from '../../store/episode';
import { getAllFollowers } from '../../store/follower';
import SearchResultsPage from '../SearchResults'

import './HomePage.css'

function HomePage() {
    const podcasts = useSelector(state => state.podcast.allPodcasts)
    const episodes = useSelector(state => state.episode.allEpisodes)
    const followers = useSelector(state => state.follower.allFollowers)
    const dispatch = useDispatch()

    const topTenEpisodes = episodes?.slice(0, 10)
    const topTenPodcasts = podcasts?.slice(0, 10)
    const episodeCopy = []
    episodes?.forEach(episode => episodeCopy.push(episode))
    const mostRecent = episodeCopy?.sort((a, b) => (a.releaseDate < b.releaseDate) ? 1 : -1)
    const mostRecentEpisodes = mostRecent.slice(0, 10)
    const sessionUser = useSelector(state => state.session.user);
    const follows = followers?.filter(follow => follow.userId === sessionUser?.id)
    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(getAllPodcasts())
        dispatch(getAllEpisodes())
        dispatch(getAllFollowers())
    }, [dispatch])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className='home-page-search-bar'>
                <form onSubmit={onSubmit}>
                    <input
                        className='home-page-search-input'
                        type='text'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by podcast, episode, user, description...'>
                    </input>
                </form>
            </div>
            {search && <SearchResultsPage className='home-page-div' search={search} />}
            {follows?.length ? <div className='home-followed-podcasts home-page-div'>
                <div className='home-followed-podcast-title'>Podcasts You're Following</div>
                <div className='home-followed-podcast-list'>
                    {follows && follows?.map(follow => (
                        <div className='home-followed-podcast-list-each' key={follow?.Podcast?.id}>
                            <Link className='home-followed-podcast-list-link' to={`/podcasts/${follow?.Podcast?.id}`}>
                                <img className='home-followed-podcast-list-image' src={follow?.Podcast?.imageUrl} alt={follow?.Podcast?.name} />
                                <div className='home-followed-podcast-list-name'>{follow?.Podcast?.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div> : null}

            <div className='most-played-podcasts home-page-div'>
                <div className='most-podcast-title'>Most Popular Podcasts</div>
                <div className='home-podcast-list'>
                    {topTenPodcasts && topTenPodcasts?.map(podcast => (
                        <div className='home-podcast-list-each' key={podcast?.id}>
                            <Link className='home-podcast-list-link' to={`/podcasts/${podcast?.id}`}>
                                <img className='home-podcast-list-image' src={podcast?.imageUrl} alt={podcast?.name} />
                                <div className='home-podcast-list-name'>{podcast?.name}</div>
                            </Link>
                            <div className='home-podcast-list-plays'>Total Plays: {podcast?.totalPlays}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='most-recent-episodes home-page-div'>
                <div className='recent-episode-title'>Newest Episodes</div>
                <div className='recent-episode-list'>
                    {mostRecentEpisodes && mostRecentEpisodes?.map(episode => (
                        <div className='recent-episode-list-each' key={episode?.id}>
                            <div className='recent-episode-list-link'>
                                <Link className='recent-episode-list-link' to={`/episodes/${episode?.id}`}>
                                    <div className='recent-episode-list-image-div'>
                                        <img className='recent-episode-list-image' src={episode?.imageUrl} alt={episode?.title} />
                                    </div>
                                </Link>
                                <div className='recent-episode-list-title'>{episode?.title}</div>
                                <div className='recent-episode-list-podcast'>{episode?.Podcast.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='most-played-episodes home-page-div'>
                <div className='most-episode-title'>Most Popular Episodes</div>
                <div className='home-episode-list'>
                    {topTenEpisodes && topTenEpisodes?.map(episode => (
                        <div className='home-episode-list-each' key={episode?.id}>
                            <div className='home-episode-list-link'>
                                <Link className='home-episode-list-link' to={`/episodes/${episode?.id}`}>
                                    <div className='home-episode-list-image-div'>
                                        <img className='home-episode-list-image' src={episode?.imageUrl} alt={episode?.title} />
                                    </div>
                                    <div className='home-episode-list-title'>{episode?.title}</div>
                                </Link>
                                <div className='home-episode-list-podcast'>{episode?.Podcast.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default HomePage
