import Hero from './Hero'
import LatestProducts from './latestProducts'
import Types from './types'

export default function Home(params) {
    return(
        <div className='home'>
            <Hero></Hero>
            <LatestProducts></LatestProducts>
            <Types></Types>
        </div>
    )
}