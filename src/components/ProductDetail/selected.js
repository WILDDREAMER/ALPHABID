import Counter from '../counter'
import React from 'react'
import Button from 'react-bootstrap/Button';

function Quantity(params) {
    const [number, setNumber] = React.useState(0);
    return (
        <div className="quantity">
            <div className="minus productText" onClick={() => setNumber(curr => (curr - 1 >= 0) ? curr - 1 : curr)}>-</div>
            <div className="number productText">{number}</div>
            <div className="plus productText" onClick={() => setNumber(curr => curr + 1)}>+</div>
        </div>
    )
}

export default function Detail(props) {
    return (
        <section className="detail">
            <h5 className='container'>HOME/ Bluetooth headphones</h5>
            <div className="content container">
                <div className="title">Bluetooth Headphone</div>
                <div className="infos">
                    <div className="img"></div>
                    <div className="text">
                        <div className="title">Current bid: ${props.price}</div>
                        <div className="productText">Item condition: <span>{props.condition}</span></div>
                        <div className="productText">Time left:</div>
                        <Counter big></Counter>
                        <div className="textContainer">
                            <div className="productText">Auction ends: June 28, 2021 12:00 am</div>
                            <div className="productText">Timezone: UTC +3</div>
                        </div>
                        <div className='actions'>
                            <Quantity></Quantity>
                            <div className="hummer"></div>
                            <div className="like"></div>
                            <div className="search"></div>
                            <Button>buy now for: $9,805</Button>
                        </div>
                        <div className="productText">Categories: <span>{props.category}</span></div>
                        <div className="productText">Tags: <span>{props.tags}</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}