import Product from "../product";
import Sonos from "../../assets/images/Sonos.svg"

export default function PopularAuctions(params) {
    return(
        <section className='auctions'>
            <div className="title">POPULAR AUCTIONS</div>
            <h5>Lorium ipsum text here Lorium ipsum text here</h5>
            <div className='products container'>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
                <Product img={Sonos} title='SONOS' price='102.56'></Product>
            </div>
        </section>
    )
}