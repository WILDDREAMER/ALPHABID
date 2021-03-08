import Counter from "./counter";

export default function Product(props) {
    return(
        <div className='product'>
            <div className='icons'>
                <div className="hummer icon"></div>
                <div className="wish icon"></div>
                <div className="search icon"></div>
            </div>
            <div className='imgContainer'><img src={props.img} alt=""/></div>
            <Counter></Counter>
            <div className='infos'>
                <div className="title">{props.title}</div>
                <div className="price">Current Bid: ${props.price}</div>
            </div>
        </div>
    )
}