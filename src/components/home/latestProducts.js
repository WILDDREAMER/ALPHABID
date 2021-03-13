import Product from '../product';
import Sonos from '../../assets/images/sonos.jpg'
import Iphone from '../../assets/images/iphone12.jpg'
import Ps5 from '../../assets/images/ps5.jpg'

export default function latestProducts(props) {
    return (
        <section className='latestProducts'>
            <div className="container">
                <h1 className="title">Latest Auction products</h1>
                <h5>Lorium ipsum text here Lorium ipsum text here</h5>
                <div className='products'>
                    <Product title='SONOS' price='102.56' img={Sonos}></Product>
                    <Product title='Iphone 12' price='908.25' img={Iphone}></Product>
                    <Product title='Ps5' price='1500.65' img={Ps5}></Product>
                </div>
            </div>
        </section>
    )
}