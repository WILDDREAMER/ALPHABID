import Hero from './Hero'
import LatestProducts from './latestProducts'
import Types from './types'
import Brands from './brands'
import Auctions from './auctions'
import ContactUs from './contactUs'

export default function Home(params) {
    return(
        <div className='home'>
            <Hero></Hero>
            <LatestProducts></LatestProducts>
            <Types></Types>
            <Brands></Brands>
            <Auctions></Auctions>
            <ContactUs></ContactUs>
        </div>
    )
}