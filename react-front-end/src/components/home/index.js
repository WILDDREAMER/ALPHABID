import Hero from './Hero'
import LatestProducts from './latestProducts'

export default function Home(params) {
    return(
        <div className='home'>
            <Hero></Hero>
            <LatestProducts></LatestProducts>
        </div>
    )
}